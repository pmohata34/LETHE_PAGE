"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

export type LogoItem =
  | {
      node: React.ReactNode
      href?: string
      title?: string
      ariaLabel?: string
    }
  | {
      src: string
      alt?: string
      href?: string
      title?: string
      srcSet?: string
      sizes?: string
      width?: number
      height?: number
    }

export interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: "left" | "right"
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  ariaLabel?: string
  className?: string
  style?: React.CSSProperties
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.2, // Slightly faster easing for better responsiveness
  MIN_COPIES: 2,
  COPY_HEADROOM: 1, // Reduced from 2 to 1 for better performance
  THROTTLE_MS: 16, // ~60fps throttling for resize observer
} as const

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : (value ?? undefined)

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(" ")

const useThrottledCallback = (callback: () => void, delay: number) => {
  const lastRun = useRef(Date.now())

  return useCallback(() => {
    const now = Date.now()
    if (now - lastRun.current >= delay) {
      callback()
      lastRun.current = now
    }
  }, [callback, delay])
}

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList,
) => {
  const throttledCallback = useThrottledCallback(callback, ANIMATION_CONFIG.THROTTLE_MS)

  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => throttledCallback()
      window.addEventListener("resize", handleResize, { passive: true })
      throttledCallback()
      return () => window.removeEventListener("resize", handleResize)
    }

    const observers = elements
      .filter((ref) => ref.current)
      .map((ref) => {
        const observer = new ResizeObserver(throttledCallback)
        observer.observe(ref.current!)
        return observer
      })

    throttledCallback()

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, dependencies)
}

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList,
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? []

    if (images.length === 0) {
      onLoad()
      return
    }

    let loadedCount = 0
    const totalImages = images.length

    const handleImageEvent = () => {
      loadedCount++
      if (loadedCount === totalImages) {
        onLoad()
      }
    }

    const imagePromises = Array.from(images).map((img) => {
      const htmlImg = img as HTMLImageElement

      if (htmlImg.complete && htmlImg.naturalWidth > 0) {
        handleImageEvent()
        return Promise.resolve()
      }

      return new Promise<void>((resolve) => {
        const onLoadOrError = () => {
          handleImageEvent()
          resolve()
        }

        htmlImg.addEventListener("load", onLoadOrError, { once: true })
        htmlImg.addEventListener("error", onLoadOrError, { once: true })
      })
    })

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageEvent)
        img.removeEventListener("error", handleImageEvent)
      })
    }
  }, dependencies)
}

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean,
) => {
  const rafRef = useRef<number | null>(null)
  const lastTimestampRef = useRef<number | null>(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track || seqWidth <= 0) return

    // Check for reduced motion preference
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      track.style.transform = "translate3d(0, 0, 0)"
      return
    }

    // Initialize position
    offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth

    const animate = (timestamp: number) => {
      if (!isAnimatingRef.current) return

      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp
      }

      const deltaTime = Math.min(0.1, Math.max(0, timestamp - lastTimestampRef.current) / 1000)
      lastTimestampRef.current = timestamp

      const target = pauseOnHover && isHovered ? 0 : targetVelocity
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU)

      velocityRef.current += (target - velocityRef.current) * easingFactor

      // Only update if there's meaningful movement
      if (Math.abs(velocityRef.current) > 0.01) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth
        offsetRef.current = nextOffset

        // Use transform3d for hardware acceleration
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    isAnimatingRef.current = true
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      isAnimatingRef.current = false
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      lastTimestampRef.current = null
    }
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover])
}

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos = [], // Added default empty array to prevent undefined errors
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = "Partner logos",
    className,
    style,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)
    const seqRef = useRef<HTMLUListElement>(null)

    const [seqWidth, setSeqWidth] = useState<number>(0)
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES)
    const [isHovered, setIsHovered] = useState<boolean>(false)

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed)
      const directionMultiplier = direction === "left" ? 1 : -1
      const speedMultiplier = speed < 0 ? -1 : 1
      return magnitude * directionMultiplier * speedMultiplier
    }, [speed, direction])

    const updateDimensions = useCallback(() => {
      const container = containerRef.current
      const sequence = seqRef.current

      if (!container || !sequence) return

      const containerWidth = container.clientWidth
      const sequenceRect = sequence.getBoundingClientRect()
      const sequenceWidth = Math.ceil(sequenceRect.width)

      if (sequenceWidth > 0 && sequenceWidth !== seqWidth) {
        setSeqWidth(sequenceWidth)
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded))
      }
    }, [seqWidth])

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight])
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight])
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover)

    const cssVariables = useMemo(
      () =>
        ({
          "--logoloop-gap": `${gap}px`,
          "--logoloop-logoHeight": `${logoHeight}px`,
          ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor],
    )

    const rootClasses = useMemo(
      () =>
        cx(
          "relative overflow-x-hidden group",
          "[--logoloop-gap:32px]",
          "[--logoloop-logoHeight:28px]",
          "[--logoloop-fadeColorAuto:#ffffff]",
          "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
          scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
          className,
        ),
      [scaleOnHover, className],
    )

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true)
    }, [pauseOnHover])

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false)
    }, [pauseOnHover])

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNodeItem = "node" in item
        const hasHref = "href" in item && item.href

        const content = isNodeItem ? (
          <span
            className={cx(
              "inline-flex items-center",
              "motion-reduce:transition-none",
              scaleOnHover && "transition-transform duration-300 ease-out group-hover/item:scale-110",
            )}
            aria-hidden={!!(hasHref && !item.ariaLabel)}
          >
            {item.node}
          </span>
        ) : (
          <img
            className={cx(
              "h-[var(--logoloop-logoHeight)] w-auto block object-contain",
              "[-webkit-user-drag:none] pointer-events-none select-none",
              "[image-rendering:-webkit-optimize-contrast]",
              "motion-reduce:transition-none",
              scaleOnHover && "transition-transform duration-300 ease-out group-hover/item:scale-110",
            )}
            src={item.src || "/placeholder.svg"}
            srcSet={item.srcSet}
            sizes={item.sizes}
            width={item.width}
            height={item.height}
            alt={item.alt ?? ""}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        )

        const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title)

        const inner = hasHref ? (
          <a
            className={cx(
              "inline-flex items-center no-underline rounded-sm",
              "transition-opacity duration-200 ease-linear",
              "hover:opacity-75 focus:opacity-75",
              "focus-visible:outline-2 focus-visible:outline-current focus-visible:outline-offset-2",
            )}
            href={item.href}
            aria-label={itemAriaLabel || "Partner logo link"}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        )

        return (
          <li
            className={cx(
              "flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-none",
              scaleOnHover && "overflow-visible group/item",
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        )
      },
      [scaleOnHover],
    )

    const logoLists = useMemo(() => {
      if (!logos || logos.length === 0) {
        return <div className="flex items-center justify-center py-8 text-muted-foreground">No logos to display</div>
      }

      return Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          className="flex items-center"
          key={copyIndex}
          role={copyIndex === 0 ? "list" : "presentation"}
          aria-hidden={copyIndex > 0}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
        </ul>
      ))
    }, [copyCount, logos, renderLogoItem])

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: toCssLength(width) ?? "100%",
        ...cssVariables,
        ...style,
      }),
      [width, cssVariables, style],
    )

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {fadeOut && (
          <>
            <div
              aria-hidden="true"
              className={cx(
                "pointer-events-none absolute inset-y-0 left-0 z-10",
                "w-[clamp(24px,8%,120px)]",
                "bg-gradient-to-r from-[var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))] to-transparent",
              )}
            />
            <div
              aria-hidden="true"
              className={cx(
                "pointer-events-none absolute inset-y-0 right-0 z-10",
                "w-[clamp(24px,8%,120px)]",
                "bg-gradient-to-l from-[var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))] to-transparent",
              )}
            />
          </>
        )}

        <div
          className={cx("flex w-max will-change-transform select-none", "motion-reduce:transform-none")}
          ref={trackRef}
        >
          {logoLists}
        </div>
      </div>
    )
  },
)

LogoLoop.displayName = "LogoLoop"

export default LogoLoop
