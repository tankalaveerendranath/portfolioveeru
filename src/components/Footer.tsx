import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 sm:py-12">
      <div className="kk container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Let's talk about</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
             Designed and developed with modern web technologies. Feel free to connect for collaboration, opportunities, or feedback.
            </p>
            <button className="px-4 sm:px-6 py-2 bg-emerald-400 hover:bg-emerald-500 text-gray-900 rounded-md transition-colors text-sm sm:text-base">
              Learn more
            </button>
          </div>
          
          <div className="kt sm:pl-0 md:pl-16">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><span className="text-gray-400 text-sm sm:text-base">Web Design</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Web Development</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Full Stack Development</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Data Analysis</span></li>
              <li><span className="text-gray-400 text-sm sm:text-base">Graphic Design</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Have a Question?</h3>
            <address className="text-gray-400 not-italic text-sm sm:text-base">
              <p className="mb-1 sm:mb-2">Sujatha Nagar, Pendurthi, Visakhapatnam</p>
              <p className="mb-1 sm:mb-2">+91 93900-83562</p>
              <p className="mb-3 sm:mb-4 break-all">veerendranathtanakala05@gmail.com</p>
            </address>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-xs sm:text-sm md:text-base">© {currentYear} All rights reserved | Created By Veerendranath Tanakala</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;