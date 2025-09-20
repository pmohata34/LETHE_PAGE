"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import useLenis from "./lib/useLenis";
import { MaskContainer } from "./components/svg-mask-effect";
import Link from "next/link";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicBento from "./components/MagicBento";
import Pricing from "./components/Pricing";
import LogoLoop from "./components/LogoLoop";
import Credentials from "./components/Credentials";
import { ChatbotWidget }  from "./components/ChatBot";
import { MdEmail, MdShare } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

function TopProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const doc = document.documentElement;

    const update = () => {
      const scrollTop = window.pageYOffset || doc.scrollTop || 0;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? (scrollTop / max) * 100 : 0;
      if (barRef.current) {
        // set width so the bar grows left-to-right
        barRef.current.style.width = `${progress}%`;
      }
      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 pointer-events-none z-[9999]"
      style={{ height: 4 }}
    >
      <div
        ref={barRef}
        className="h-full bg-[#4025aa] transition-[width] duration-100 ease-linear"
        style={{ width: "0%" }}
      />
    </div>
  );
} 

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // animate only once
      }
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

function ShareSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
      {/* Sidebar container */}
      <div
        className={`bg-white rounded-l-xl shadow-lg transition-all duration-300 ease-in-out ${
          open ? "w-24" : "w-10"
        }`}
      >
        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-30 flex items-center justify-center bg-white rounded-l-xl"
        >
          <div className="flex flex-col gap-3 items-center justify-center">
            <MdShare className="text-blue-600 text-xl mb-1" />
            <span className="text-blue-600 font-semibold text-sm rotate-90">
              Share
            </span>
          </div>
        </button>

        {/* Social Icons */}
        {open && (
          <div className="flex flex-col items-center gap-4 py-6 transition-opacity duration-300">
            <a href="mailto:?subject=Check this out!" target="_blank">
              <MdEmail className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaXTwitter className="text-blue-600 text-xl hover:scale-110 transition" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  useLenis({ lerp: 0.07 });
  const [navOpen, setNavOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const imageLogos = [
    { src: "/adamas.png", alt: "Company 1" },
    { src: "/download.png", alt: "Company 2" },
    { src: "/defence.png", alt: "Company 3" },
    { src: "/dell.png", alt: "Company 4" },
    { src: "/rbi.png", alt: "Company 5" },
    { src: "/Sims.png", alt: "Company 6" },
    { src: "/oracle.png", alt: "Company 7" },
  ];

  const sndLoops = [
    { src: "/scdbank.png", alt: "Company 1" },
    { src: "/siemens.png", alt: "Company 2" },
    
    { src: "/ericsson.png", alt: "Company 4" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
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

  const { ref: missionRef, isVisible: missionVisible } = useInView({ threshold: 0.2 });
  const { ref: credsRef, isVisible: credsVisible } = useInView({ threshold: 0.2 });
  const { ref: pricingRef, isVisible: pricingVisible } = useInView({ threshold: 0.2 });
  const { ref: usersRef, isVisible: usersVisible } = useInView({ threshold: 0.2 });
  const { ref: transparencyRef, isVisible: transparencyVisible } = useInView({ threshold: 0.2 });

  return (
    <>
      <TopProgress />
      <div className="min-h-screen w-full bg-black">
        <main className="relative z-10">
         
          {/* Animated Infobar */}
          <div className="w-full bg-[#4025aa] text-white text-center text-sm py-3 overflow-hidden">
            <p className="animate-marquee whitespace-nowrap">
              <span className="font-bold">
                Wipe. Verify. Relax. | Launch Special
              </span>
              {" "}– Get <span className="font-bold">20% </span>OFF on all premium data-wiping plans! Offer valid till <span className="font-bold">30 Sept. </span>
            </p>
          </div>
          {/* Navbar */}
          <nav className="sticky top-0 w-full bg-black/80 border-b border-white/10 px-8 py-4 flex items-center justify-between z-50 backdrop-blur">
            <span className="flex items-center text-white font-bold text-4xl pl-15">
              <Image
                src="/logo.png"
                alt="Lethe Logo"
                width={40}
                height={40}
                className="mr-3 rounded-full"
              />
              <Link href="/">Leth<span className="italic">e</span></Link>
            </span>
            {/* Hamburger for small screens */}
            <button
              className="md:hidden ml-4 text-white focus:outline-none"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Open navigation menu"
            >
              <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 10h20M6 16h20M6 22h20" />
              </svg>
            </button>
            {/* Navbar links for desktop */}
            <div className="hidden md:flex items-center gap-6 pr-20 relative">
              <Link href="#" className="text-white hover:text-indigo-400 transition"></Link>
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
                {/* Adjusted positioning: anchor directly below the button to avoid hover gaps */}
                <div className="absolute left-0 top-full mt-0 min-w-[160px] bg-black border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-50 transform translate-y-1">
                  <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-t-lg transition">Data Shredding</Link>
                  <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 transition">E-Waste Recycling</Link>
                  <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-b-lg transition">Secure Pickup</Link>
                </div>
              </div>
              <div className="relative group text-white hover:text-indigo-400 transition">
                <button
                  className="text-white hover:text-indigo-400 transition flex items-center focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabIndex={0}
                >
                  Partners
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown content (still uses Link for anchor items) */}
                <div className="absolute left-0 top-full mt-0 w-[420px] bg-black border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-50 p-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Why partner with us</h4>
                    <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">
                      Partner Ecosystem
                    </Link>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Alliance Partners</h4>
                    <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Technology Alliance</Link>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Become a Partner</h4>
                    <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Global Partner Program</Link>
                    <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">ITAD Program</Link>
                    <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Mobile Processors</Link>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Already a partner?</h4>
                    <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Login Portal</Link>
                  </div>
                </div>
              </div>
              <Link href="#" className="text-white hover:text-indigo-400 transition">Blog</Link>
              <Link href="/Doc" className="text-white hover:text-indigo-400 transition">Docs</Link>
              <Link href="#" className="text-white hover:text-indigo-400 transition">Contact</Link>
              <Link
                href="/download"
                className="ml-4 bg-[#4025aa] text-white font-semibold px-5 py-2 rounded transition"
              >
                Download
              </Link>
            </div>
            {/* Mobile nav menu */}
            {navOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/10 rounded-b-2xl shadow-lg z-50 flex flex-col items-center py-6 gap-4 animate-fade-in">
                <div className="w-full flex flex-col items-center gap-2">
                  {/* Services dropdown for mobile */}
                  <div className="relative w-full flex flex-col items-center">
                    <button
                      className="text-white hover:text-indigo-400 transition flex items-center focus:outline-none"
                      tabIndex={0}
                      onClick={() => setMobileServicesOpen((open) => !open)}
                    >
                      Services
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 min-w-[160px] bg-black border border-white/10 rounded-lg shadow-lg">
                        <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-t-lg transition">Data Shredding</Link>
                        <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 transition">E-Waste Recycling</Link>
                        <Link href="#" className="block px-4 py-2 text-white hover:bg-indigo-600 rounded-b-lg transition">Secure Pickup</Link>
                      </div>
                    )}
                  </div>
                  <Link href="#" className="text-white hover:text-indigo-400 transition">Partners</Link>
                  <Link href="#" className="text-white hover:text-indigo-400 transition">Blog</Link>
                  <Link href="/Doc" className="text-white hover:text-indigo-400 transition">Docs</Link>
                  <Link href="#" className="text-white hover:text-indigo-400 transition">Contact</Link>
                  <Link
                    href="/download"
                    className="bg-[#4025aa] text-white font-semibold px-5 py-2 rounded transition mt-2"
                  >
                    Download
                  </Link>
                </div>
              </div>
            )}
          </nav>
          <div className="flex items-center justify-start pl-10 gap-10 mt-10 px-8 flex-col-reverse md:flex-row md:items-center md:justify-center md:pl-15 md:gap-10">
            <div className="flex justify-start w-full md:w-auto">
              <video
                id="vertical"
                className="w-[90vw] max-w-[640px] h-[420px] md:w-[540px] md:h-[500px] object-cover rounded-2xl shadow-lg ml-[-20px] md:ml-0"
                src="/landing.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
             <div className="hidden md:flex h-[40rem] w-full flex-col items-centre justify-centre overflow-hidden cursor-none">
              <MaskContainer
                revealText={
                  <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white bg-transparent">
                    Hover <span className="text-[#7558ea]">Here.</span>
                  </p>
                }
                className="h-[40rem] text-white dark:text-black"
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
          ref={missionRef}
          className={`w-full max-w-5xl mx-auto mt-20 px-8 py-12 bg-black/80 rounded-2xl shadow-lg flex-col md:flex-row gap-8 transition-all duration-1000 ease-out
          ${missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex-1">
              <h2 className="text-5xl italic font-bold text-white mb-4">Mission</h2>
              <p className="text-lg text-gray-200 mb-2">
                Lethe's mission is to make secure, transparent, and eco-friendly data wiping accessible to everyone. We empower individuals, organizations, and recyclers with a simple, one-click solution that permanently erases sensitive data, generates tamper-proof proof-of-erasure certificates, and supports responsible IT asset recycling. By combining strong cryptography with user-friendly design, we aim to build trust, prevent data misuse, and accelerate a sustainable circular economy.
              </p>
              <p className="text-md text-gray-400">
                Clean drives, fresh starts — because every byte deserves a second life.
              </p>
              <Link
                href="#"
                className="inline-block mt-6 text-indigo-400 hover:underline text-lg font-medium"
              >
                Our Solution →
              </Link>
              <Link
                href="#"
                className="inline-block mt-6 ml-9 text-indigo-400 hover:underline text-lg font-medium"
              >
                Learn more →
              </Link>
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
          {/* Credentials Section */}
          <section
            ref={credsRef}
            className={`w-full max-w-5xl mx-auto mt-24 mb-24 px-8 items-end transition-all duration-1000 ease-out
            ${credsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Credentials />
          </section>
          {/* Plans Section */}
          <section 
            ref={pricingRef}
            className={`w-full max-w-5xl mx-auto mt-24 mb-24 px-8 items-end transition-all duration-1000 ease-out
            ${pricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <Pricing />
          </section>
          <section 
            ref={usersRef}
            className={`w-full max-w-7xl mx-auto mb-34 px-8 flex flex-col items-end transition-all duration-1000 ease-out
            ${usersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-5xl font-bold text-white mb-30">
              Trusted <span className="italic">Users</span>
            </h2>
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
            <div className="h-20" /> {/* Spacer */}
            <LogoLoop
              logos={sndLoops}
              speed={120}
              direction="right"
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
          <section 
            ref={transparencyRef}
            className={`w-full max-w-5xl mx-auto mt-34 mb-24 px-8 flex flex-col items-start transition-all duration-1000 ease-out
            ${transparencyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
            <h2 className="text-5xl font-bold text-white mb-8 ml-0">
              Transparency
            </h2>
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
        </main>
        <ChatbotWidget />
        <ShareSidebar />

      </div>  
    </>
  );
}