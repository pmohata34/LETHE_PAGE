"use client";

import React, { useEffect, useRef, useState } from "react";
import  useLenis  from "../lib/useLenis"; 
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdShare } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

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


export default function Page() {
  useLenis({ lerp: 0.07 });
  return (
    <>
    <div className="min-h-screen w-full bg-black overflow-x-hidden ">
      {/* Infobar */}
      <div className="marquee fixed top-0 left-0 w-full bg-[#4025aa] text-white text-sm h-12 z-50 flex items-center overflow-hidden">
        <p className="inline-block whitespace-nowrap px-4">
          <span className="font-bold">Wipe. Verify. Relax. | Launch Special</span>{" "}
          – Get <span className="font-bold">20% OFF</span> on all premium data-wiping plans! Offer valid till{" "}
          <span className="font-bold">30 Sept.</span>
        </p>
      </div>
      
      <style jsx>{`
        .marquee { overflow: hidden; }
        .marquee p {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 14s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .marquee:hover p { animation-play-state: paused; }`
        }
      </style>

      {/* Navbar */}
      <nav className="fixed top-12 w-full bg-black/80 border-b border-white/10 px-8 py-4 flex items-center justify-between z-50 backdrop-blur">
        <span className="flex items-center text-white font-bold text-4xl ml-16">
          <Image src="/logo.png" alt="Lethe Logo" width={40} height={40} className="mr-2 rounded-full" />
          <Link href="/">Leth<span className="italic">e</span></Link>
        </span>
        <div className="hidden md:flex items-center gap-6 mr-10">
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

            <div className="absolute left-0 top-full mt-0 w-[420px] bg-black border border-white/10 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-50 p-6 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Why partner with us</h4>
                <Link href="#" className="block text-gray-300 hover:text-indigo-400 transition">Partner Ecosystem</Link>
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
          <Link href="/download" className="ml-4 bg-[#4025aa] text-white font-semibold px-5 py-2 rounded transition">Download</Link>
        </div>
      </nav>
      <main className="pt-30">
        {/* Documentation Section */}
        <section className="bg-black text-white min-h-screen flex">
          {/* Sidebar */}
          <aside className="hidden md:flex flex-col w-64 bg-[#111] border-r border-white/10 p-6">
            <h2 className="text-xl font-bold mb-6">Docs</h2>
            <nav className="flex flex-col gap-4 text-gray-300">
              <Link href="#" className="hover:text-indigo-400 transition">Home</Link>
              <Link href="#" className="hover:text-indigo-400 transition">Getting Started</Link>
              <Link href="#" className="hover:text-indigo-400 transition">Authentication</Link>
              <Link href="#" className="hover:text-indigo-400 transition">API Reference</Link>
              <Link href="#" className="hover:text-indigo-400 transition">Integrations</Link>
              <Link href="#" className="hover:text-indigo-400 transition">FAQ</Link>
            </nav>
        </aside>

        {/* Main Docs Content */}
        <div className="flex-1 p-8 md:p-16">
          <h1 className="text-3xl font-bold mb-4">Welcome to Docs</h1>
          <p className="text-gray-400 mb-12">
            Let’s make your integration smooth and enterprise-ready. Browse through the guides below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#111] border border-white/10 rounded-xl shadow-lg p-6 hover:border-indigo-500 transition">
              <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
              <p className="text-gray-400 mb-6">
                Set up your project and integrate in just a few steps.
              </p>
              <Link href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer>
          <div className="max-w-6xl mx-auto px-6 mt-10">
          {/* Line only on content width */}
            <div className="border-t border-gray-300">
              <div className="flex flex-col sm:flex-row justify-start items-center py-5 space-y-2 sm:space-y-0 sm:space-x-8 text-white">
                <p>© 2025 Lethe Technology Group. All rights reserved.</p>
                <nav className="flex space-x-4 ml-30">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                  <a href="#" className="hover:underline">Cookie Policy</a>
                  <a href="#" className="hover:underline">Modern Slavery Act Disclosure Statement</a>
                </nav>
              </div>
            </div>
          </div>
        </footer>
          
        <ShareSidebar />
        
        {/* Card 2 */}
        <div className="bg-[#111] border border-white/10 rounded-xl shadow-lg p-6 hover:border-indigo-500 transition">
          <h3 className="text-xl font-semibold mb-4">API Reference</h3>
          <p className="text-gray-400 mb-6">
            Browse endpoints, request/response formats, and usage.
          </p>
          <Link href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">
            View API →
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-[#111] border border-white/10 rounded-xl shadow-lg p-6 hover:border-indigo-500 transition">
          <h3 className="text-xl font-semibold mb-4">Integration Guides</h3>
          <p className="text-gray-400 mb-6">
            Step-by-step tutorials for SSO, webhooks, and third-party services.
          </p>
          <Link href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Explore Guides →
          </Link>
        </div>
      </main>
    </div>
    </>
  );
}