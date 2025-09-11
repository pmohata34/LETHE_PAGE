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
            <li><a href="#">Enterprise Overview</a></li>
            <li><a href="#">Mobile Overview</a></li>
            <li><a href="#">ITAD Overview</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">USE CASES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">See all cases</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">SOLUTIONS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">See all solutions</a></li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3 className="font-bold mb-3 text-sm">PRODUCTS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Blancco Drive Eraser</a></li>
            <li><a href="#">Blancco Drive Verifier</a></li>
            <li><a href="#">Blancco Eraser for Apple Devices</a></li>
            <li><a href="#">Blancco File Eraser</a></li>
            <li><a href="#">Blancco Removable Media Eraser</a></li>
            <li><a href="#">Blancco LUN Eraser</a></li>
            <li><a href="#">Blancco Virtual Machine Eraser</a></li>
            <li><a href="#">Blancco Hardware Solutions</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">PORTALS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Cloud portal</a></li>
            <li><a href="#">Support portal</a></li>
          </ul>
        </div>

        {/* RESOURCES + EVENTS + COMPANY */}
        <div>
          <h3 className="font-bold mb-3 text-sm">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Resource Hub</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">EVENTS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Event & Webinars</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Certifications</a></li>
            <li><a href="#">Supported Standards</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">News & Press</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </div>

        {/* PARTNERS + GET IN TOUCH */}
        <div>
          <h3 className="font-bold mb-3 text-sm">PARTNERS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Why Partner with Blancco</a></li>
            <li><a href="#">Blancco Technology Alliance Partners</a></li>
            <li><a href="#">Find a Partner</a></li>
            <li><a href="#">Partner Portal log in</a></li>
          </ul>

          <h3 className="font-bold mt-6 mb-3 text-sm">GET IN TOUCH</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Request A Free Trial</a></li>
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
      <div className="bg-black py-6">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GoRecycle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
