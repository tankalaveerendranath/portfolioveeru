import React from 'react';
import { Calendar, MapPin, Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center lg:text-left">
              About Me
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              I'm a passionate frontend developer with over 2 years of experience building web applications. 
              I specialize in creating intuitive, accessible, and performant user experiences using modern 
              technologies and best practices.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              With a background in design and a focus on clean code, I bridge the gap between aesthetics and 
              functionality. I'm constantly learning and exploring new technologies to stay at the forefront 
              of web development.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              As a full-stack developer, I thrive on building seamless user experiences and robust backend systems. 
              From designing intuitive interfaces to architecting scalable APIs, I enjoy working across the entire stack 
              to bring ideas to life. I'm passionate about writing efficient code and continuously improving through 
              hands-on learning and collaboration.
           </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 sm:mb-8">
              <div className="flex items-center">
                <Calendar className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">2+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">Sujatha Nagar,Pendurthi</span>
              </div>
            </div>
            
            <a 
              href="veer.pdf" 
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <Download size={18}  className="mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-2xl bg-blue-600 transform rotate-6"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src="l.png" 
                  alt="About" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;