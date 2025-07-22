import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import FlowingWaveBackground from './FlowingWaveBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <FlowingWaveBackground />
      <div className="container mx-auto py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="pp text-base sm:text-lg md:text-xl text-white font-medium animate-fadeIn">
              Hello, I'm
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white animate-slideUp leading-tight">
              Veerendranath Tanakala
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl text-white/90 animate-slideUp animation-delay-100">
              Full-stack Website Designer & Developer
            </h3>
          </div>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl lg:max-w-lg mx-auto lg:mx-0 animate-fadeIn animation-delay-200">
            I craft engaging digital experiences with clean code and thoughtful design. Focused on building accessible and high-performance web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 animate-fadeIn animation-delay-300 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors text-center"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4 animate-fadeIn animation-delay-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-white/80 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-white/80 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-white/80 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center animate-slideIn animation-delay-300">
          <div className="kop relative w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[450px] lg:w-[400px] lg:h-[500px] xl:w-[500px] xl:h-[550px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="lo.jpg" 
              alt="Veerendranath" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <a 
        href="#projects" 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 bg-white/10 backdrop-blur-sm rounded-full shadow-md text-white hover:text-white/80 transition-colors"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;