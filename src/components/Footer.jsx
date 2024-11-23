// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-color-b text-gray-300 py-8">
      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2">Email: example@example.com</p>
          <p>Phone: 012-345-6789</p>
          <p>Address: 123 Street, City, Country</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a
              href="https://github.com/a-motthet/Project-SE"
              className="text-pink-500 hover:text-pink-400"
              aria-label="Github"
            >
              Github
            </a>
          </div>
        </div>
      </div>

*/}
      <div className="border-t border-color-holdber mt-8 pt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} KMUTT COMPUTER ENGINEERING CPE#36
        </p>
      </div>
    </footer>
  );
};

export default Footer;
