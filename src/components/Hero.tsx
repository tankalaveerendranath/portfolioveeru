import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Let's talk about</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
             Designed and developed with modern web technologies. Feel free to connect for collaboration, opportunities, or feedback.
            </p>
            <button className="px-4 sm:px-6 py-2 bg-emerald-400 hover:bg-emerald-500 text-gray-900 rounded-md transition-colors text-sm sm:text-base">
              Learn more
            </button>
          </div>
          
          <div className="sm:pl-8 lg:pl-16">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">&gt; Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">&gt; About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">&gt; Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">&gt; Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">&gt; Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">&gt; Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">&gt; Web Design</span></li>
              <li><span className="text-gray-400">&gt; Web Development</span></li>
              <li><span className="text-gray-400">&gt; Full Stack Development</span></li>
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">> Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">> About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">> Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">> Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">> Projects</a></li>
            <h3 className="text-xl font-bold mb-4">Have a Question?</h3>
              className="px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors text-center text-sm sm:text-base"
              <p className="mb-2">Sujatha Nagar, Pendurthi, Visakhapatnam</p>
              <p className="mb-2">+91 93900-83562</p>
              <p className="mb-4">veerendranathtanakala05@gmail.com</p>
            </address>
            <div className="flex space-x-4">
          <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-2 sm:pt-4 animate-fadeIn animation-delay-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-white/80 transition-colors">
              <Github size={18} className="sm:w-5 sm:h-5" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
          <div className="kop relative w-48 h-60 xs:w-56 xs:h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-[350px] lg:h-[450px] xl:w-[400px] xl:h-[500px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
            </div>
          </div>
        </div>
        <br />
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} All rights reserved | Created By Veerendranath Tanakala</p>
        <ArrowDown size={20} className="sm:w-6 sm:h-6" />
      </div>
    </footer>
  );
};
        className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 bg-white/10 backdrop-blur-sm rounded-full shadow-md text-white hover:text-white/80 transition-colors"
export default Footer;