"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useLenis from "./lib/useLenis";
import { MaskContainer } from "./components/svg-mask-effect"
import Link from "next/link";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagicBento from "./components/MagicBento";
import Pricing from "./components/Pricing";
import LogoLoop from "./components/LogoLoop";

export default function Home() {
  useLenis({ lerp: 0.07 });
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

    const words = ["better", "cute", "beautiful", "modern"];

  const imageLogos = [
    { src: "/adamas.png", alt: "Company 1" },
    { src: "/download.png", alt: "Company 2" },
    { src: "/defence.png", alt: "Company 3" },
    { src: "/dell.png", alt: "Company 4" },
    { src: "/rbi.png", alt: "Company 5" },
    { src: "/Sims.png", alt: "Company 6" },
    { src: "/rbi.png", alt: "Company 7" },
  ];



  const [visible, setVisible] = useState(false);

  // Add missing plansRef and aboutRef
  const plansRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);

  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const section_2 = document.getElementById("horizontal");
      const box_items = gsap.utils.toArray<HTMLElement>(".horizontal__item");

      if (section_2 && box_items.length > 0) {
        gsap.to(box_items, {
          xPercent: -100 * (box_items.length - 1),
          ease: "sine.out",
          scrollTrigger: {
            trigger: section_2,
            pin: true,
            scrub: 3,
            snap: 1 / (box_items.length - 1),
            end: () => "+=" + section_2.offsetWidth,
          },
        });
      }
    }
  }, []);
  
  return (
    <>
        <div className="min-h-screen w-full bg-black">
      <main className="relative z-10">
        <div className="w-full bg-[#4025aa] text-white text-center text-sm py-3 overflow-hidden ">
          <p className="animate-marquee">
            <span className='font-bold'>
              Wipe. Verify. Relax. | Launch Special
            </span>  – Get  <span className='font-bold'>20% </span>OFF on all premium data-wiping plans! Offer valid till <span className='font-bold'>30 Sept. </span>
          </p>
        </div>
        {/* Navbar */}
        <nav className="sticky top-0 w-full bg-black/80 border-b border-white/10 px-8 py-4 flex items-center justify-between z-50 rounded-full backdrop-blur">
          <span className="flex items-center text-white font-bold text-3xl pl-15">
            <Image
              src="/logo.png"
              alt="GoRecycle Logo"
              width={40}
              height={40}
              className="mr-3 rounded-full"
            />
            <a href="/"><span className="italic">Go</span>Recycle</a>
          </span>
          <div className="flex items-center gap-6 pr-20 relative">
            <a href="#" className="text-white hover:text-indigo-400 transition"></a>
            {/* Dropdown for Services */}
            <div className="relative group">
              <button
                className="text-white hover:text-indigo-400 transition flex items-center focus:outline-none"
                tabIndex={0}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 min-w-[160px] bg-black border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-50">
                <a href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-t-lg transition">Data Shredding</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 transition">E-Waste Recycling</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-b-lg transition">Secure Pickup</a>
              </div>
            </div>
            <a href="#" className="text-white hover:text-indigo-400 transition">Partners</a>

            <a href="#" className="text-white hover:text-indigo-400 transition">Blog</a>

            <a href="#" className="text-white hover:text-indigo-400 transition">Docs</a>

            <a href="#" className="text-white hover:text-indigo-400 transition">Contact</a>
            <Link
              href="/download"
              className="ml-4 bg-[#4025aa] text-white font-semibold px-5 py-2 rounded transition"
            >
              Download
            </Link>
          </div>
        </nav>
        <div className="flex flex-row items-center justify-start pl-15 gap-10 mt-10 px-8">
          <video
          id='vertical'
            className="w-[640px] h-[500px] object-cover rounded-2xl shadow-lg"
            src="/landing.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
<div className="flex h-[40rem] w-full flex-col items-centre justify-centre overflow-hidden cursor-none">
  <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white bg-transparent">
            Hover <span className="text-[#7558ea]">Here.</span>
          </p>
        }
        className="h-[40rem]  text-white dark:text-black"
      >
        Discover the power of{" "}
        <span className="text-[#4025aa]">Data Wiping</span> with native CSS
        variables and container queries with
        <span className="text-[#4025aa]"> advanced architectures</span>.
      </MaskContainer>
</div>
        </div>
        {/* About Section */}
        <section
          ref={aboutRef}
          className={"w-full max-w-5xl mx-auto mt-20 px-8 py-12 bg-black/80 rounded-2xl shadow-lg flex-col md:flex-row gap-8 transition-opacit"}
        >
          <div className="flex-1">
            <h2 className="text-5xl italic font-bold text-white mb-4">Mission</h2>
            <p className="text-lg text-gray-200 mb-2">
              GoRecycle's mission is to make secure, transparent, and eco-friendly data wiping accessible to everyone. We empower individuals, organizations, and recyclers with a simple, one-click solution that permanently erases sensitive data, generates tamper-proof proof-of-erasure certificates, and supports responsible IT asset recycling. By combining strong cryptography with user-friendly design, we aim to build trust, prevent data misuse, and accelerate a sustainable circular economy.
            </p>
            <p className="text-md text-gray-400">
              Clean drives, fresh starts — because every byte deserves a second life.
            </p>
            <a
              href="#"
              className="inline-block mt-6 text-indigo-400 hover:underline text-lg font-medium"
            >
              Our Solution →
            </a>
            <a
              href="#"
              className="inline-block mt-6 ml-9 text-indigo-400 hover:underline text-lg font-medium"
            >
              Learn more →
            </a>
          </div>
          <div className="flex-shrink-0 flex items-end justify-end">
            <Image
              src="/mission.png"
              alt="Our Mission"
              width={480}
              height={480}
              className="rounded-xl shadow-lg object-contain"
            />
          </div>
        </section>
        {/* Plans Section */}
        <section className="w-full max-w-5xl mx-auto mt-24 mb-24 px-8 items-end">
          <Pricing />
        </section>
        <section className="w-full max-w-7xl mx-auto mb-34 px-8 flex flex-col items-end">
          <h2 className="text-5xl font-bold text-white mb-30">Trusted <span className="italic">Users</span></h2>
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={98}
            gap={120}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut={true}
            fadeOutColor="black"
            ariaLabel="Technology partners"
          />
        </section>
        {/* USP Section */}
        <section className="w-full max-w-5xl mx-auto mt-34 mb-24 px-8 flex flex-col items-center">
          <h2 className="text-5xl font-bold text-white italic mb-8 ml-0"></h2>
          <div className="flex justify-center items-center w-full">
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </section>
      
        
        
      <Footer />
    
        {/* ...rest of your content if any... */}
      </main>
    </div>
  </>
  )
}


