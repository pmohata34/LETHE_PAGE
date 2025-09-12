"use client";
import Link from "next/link";
import { FaWindows, FaApple, FaLinux, FaLock } from "react-icons/fa";

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="bg-black/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-gray-800">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Download Lethe
        </h1>
        <p className="text-gray-400 mb-8 text-center max-w-lg">
          Securely wipe your data with{" "}
          <span className="text-blue-400">military-grade encryption</span> and
          recycle your devices with confidence.
        </p>

        {/* Main Download */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/downloads/gorecycle-latest-windows.zip"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition text-lg flex items-center gap-3 justify-center shadow-md hover:shadow-blue-500/30"
            download
          >
            <FaWindows size={20} /> <span>Download for Windows</span>
          </a>

          <a
            href="/downloads/gorecycle-latest-mac.zip"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition text-lg flex items-center gap-3 justify-center shadow-md hover:shadow-blue-500/30"
            download
          >
            <FaApple size={20} /> <span>Download for macOS</span>
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-3 text-center">
          v2.0.1 • 45 MB • Windows 10+ / macOS 11+
        </p>

        {/* Other Platforms */}
        <div className="mt-8 text-gray-300 text-sm text-center">
          <span className="block mb-2">Available for other platforms:</span>
          <div className="flex items-center justify-center gap-6">
            
            <a
              href="/downloads/gorecycle-linux.zip"
              className="flex items-center gap-2 underline hover:text-white transition"
              download
            >
              <FaLinux /> Linux
            </a>
          </div>
        </div>

        {/* Security Badge */}
        <div className="mt-8 flex items-center gap-2 text-green-400 text-sm">
          <FaLock />{" "}
          <span>AES + Serpent + Twofish encryption • DoD 7-pass wipe</span>
        </div>

        {/* What's New */}
        <div className="mt-10 bg-gray-900/60 rounded-xl p-6 w-full border border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-3">
            What’s New
          </h2>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Improved wiping speed by 20%</li>
            <li>New user-friendly dashboard</li>
            <li>Enhanced multi-platform support</li>
            <li>Minor bug fixes and stability improvements</li>
          </ul>
        </div>

        {/* Back */}
        <Link href="/" className="mt-10 text-indigo-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}