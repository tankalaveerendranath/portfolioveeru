import React from 'react';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-8rem)]">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
            <div className="animate-fadeIn">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Veerendranath
                </span>
              </h1>
              
              <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 animate-fadeIn animation-delay-200">
                Full Stack Developer & Data Analyst
              </p>
              
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 animate-fadeIn animation-delay-300">
                Passionate about creating innovative web solutions and turning data into actionable insights. 
                Let's build something amazing together.
              </p>
              
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 animate-fadeIn animation-delay-400">
                <a 
                  href="#projects"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  View My Work
                </a>
                <a 
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Get In Touch
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-4 sm:space-x-6 animate-fadeIn animation-delay-500">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 text-white hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Github size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 text-white hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-3 text-white hover:text-blue-400 transition-colors transform hover:scale-110">
                  <Instagram size={20} className="sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fadeIn animation-delay-600">
            <div className="relative w-64 h-80 xs:w-72 xs:h-96 sm:w-80 sm:h-[480px] lg:w-96 lg:h-[500px] xl:w-[400px] xl:h-[520px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lo.jpg" 
                alt="Veerendranath Tanakala" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about"
            className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-md text-white hover:text-white/80 transition-colors"
          >
            <ArrowDown size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;