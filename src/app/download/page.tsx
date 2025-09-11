"use client";
import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
      <div className="bg-black/80 rounded-2xl shadow-lg p-10 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-4xl font-bold text-white mb-4">Download Lethe</h1>
        <p className="text-gray-300 mb-8 text-center">
          Get the latest version of Lethe for your platform. Securely wipe your data and recycle electronics with confidence.
        </p>
        <a
          href="/downloads/gorecycle-latest.zip"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition text-lg"
          download
        >
          Download for Windows
        </a>
        <div className="mt-6 text-gray-400 text-sm">
          <span>Need another platform?</span>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a href="/downloads/gorecycle-mac.zip" className="underline hover:text-white" download>
              macOS
            </a>
            <a href="/downloads/gorecycle-linux.zip" className="underline hover:text-white" download>
              Linux
            </a>
          </div>
        </div>
        <Link href="/" className="mt-8 text-indigo-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
