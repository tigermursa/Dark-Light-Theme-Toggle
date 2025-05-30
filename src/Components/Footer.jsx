import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-500 dark:bg-gray-900 text-white dark:text-blue-500 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h2 className="font-bold text-xl mb-2">About</h2>
          <ul>
            <li>Our Mission</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Resources</h2>
          <ul>
            <li>Docs</li>
            <li>Blog</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Contact</h2>
          <ul>
            <li>Email: demo@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Location: Demo City</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm">
        &copy; {new Date().getFullYear()} Demo Project. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
