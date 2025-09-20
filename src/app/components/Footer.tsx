// components/Footer.tsx  
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* WHO WE HELP */}
        <div>
          <h3 className="font-bold mb-3 text-sm">WHO WE HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">Enterprise Overview</a></li>
            <li><a className="hover:text-indigo-400" href="#">Mobile Overview</a></li>
            <li><a className="hover:text-indigo-400" href="#">ITAD Overview</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">USE CASES</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">See all cases</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">SOLUTIONS</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">See all solutions</a></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="font-bold mb-3 text-sm">PRODUCTS</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">Drive Eraser</a></li>
            <li><a className="hover:text-indigo-400" href="#">Drive Verifier</a></li>
            <li><a className="hover:text-indigo-400" href="#">Eraser for Apple Devices</a></li>
            <li><a className="hover:text-indigo-400" href="#">File Eraser</a></li>
            <li><a className="hover:text-indigo-400" href="#">Removable Media Eraser</a></li>
            <li><a className="hover:text-indigo-400" href="#">LUN Eraser</a></li>
            <li><a className="hover:text-indigo-400" href="#">Virtual Machine Eraser</a></li>
            <li><a className="hover:text-indigo-400" href="#">Hardware Solutions</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">PORTALS</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">Cloud portal</a></li>
            <li><a className="hover:text-indigo-400" href="#">Support portal</a></li>
          </ul>
        </div>

        {/* RESOURCES + EVENTS + COMPANY */}
        <div>
          <h3 className="font-bold mb-3 text-sm">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">Resource Hub</a></li>
            <li><a className="hover:text-indigo-400" href="#">Case Studies</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">EVENTS</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">Event & Webinars</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">About Us</a></li>
            <li><a className="hover:text-indigo-400" href="#">Certifications</a></li>
            <li><a className="hover:text-indigo-400" href="#">Supported Standards</a></li>
            <li><a className="hover:text-indigo-400" href="#">Our Team</a></li>
            <li><a className="hover:text-indigo-400" href="#">News & Press</a></li>
            <li><a className="hover:text-indigo-400" href="#">Careers</a></li>
            <li><a className="hover:text-indigo-400" href="#">Sustainability</a></li>
          </ul>
        </div>

        {/* PARTNERS + GET IN TOUCH */}
        <div>
          <h3 className="font-bold mb-3 text-sm">PARTNERS</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">Why Partner with <span className="italic">Go</span>Recycle</a></li>
            <li><a className="hover:text-indigo-400" href="#"><span className="italic hover:text-indigo-400">0DAY</span> Technology Alliance Partners</a></li>
            <li><a className="hover:text-indigo-400" href="#">Find a Partner</a></li>
            <li><a className="hover:text-indigo-400" href="#">Partner Portal log in</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-indigo-400" href="#">Contact Us</a></li>
            <li><a className="hover:text-indigo-400" href="#">Request A Free Trial</a></li>
          </ul>
        </div>

        {/* SOCIAL + SEARCH */}
        <div className="space-y-8">
          <div className=" p-6 rounded-xl">
            <h3 className="font-bold mb-3 text-sm">FOLLOW US</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 flex items-center justify-center  text-blue-600"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center  text-blue-600"><FaLinkedinIn /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center text-blue-600"><FaTwitter /></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center 
               text-blue-600"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
      
     <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Line only on content width */}
        <div className="border-t border-gray-300">
          <div className="flex flex-col sm:flex-row justify-start items-center py-5 space-y-2 sm:space-y-0 sm:space-x-8">
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
  )
}
