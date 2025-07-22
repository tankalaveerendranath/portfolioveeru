import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  website?: string;
}

const experienceData: Experience[] = [
  {
    id: 1,
    company: 'Oasis Infobyte',
    position: 'Graphic Design Intern',
    duration: 'Dec 2023 - Jan 2024',
    location: 'Remote',
    description: [
      'Built modern, responsive user interfaces using Canvas',
      'Worked closely with UI/UX  to implement pixel-perfect designs',
      'Developed reusable component libraries to improve development efficiency',
      'Participated in development processes and sprint planning sessions'
    ],
    technologies: ['Canvas','Figma','Adobe Illustartor', 'Git'],
    website: 'https://oasisinfobyte.com'
  },
  {
    id: 2,
    company: 'Codsoft',
    position: 'Java Intern',
    duration: 'Jan 2024 - Feb 2024',
    location: 'Remote',
    description: [
      'The internship provided hands-on experience in applying core Java concepts like OOP, exception handling, collections, and file handling in real-world scenarios.',
      'Collaborated on projects using tools like Git and IDEs such as IntelliJ or Eclipse, gaining exposure to version control and collaborative software development.',
      'I became familiar with popular Java frameworks like Spring, and followed best practices such as clean code, unit testing, and Agile methodologies.',
      'The internship enhanced career prospects by building technical skills, offering mentorship, and creating networking opportunities within the software development industry.'
    ],
    technologies: ['Java','AWT','Git','Eclipse'],
    website: 'https://digitalinnovations.com'
  },
  {
    id: 3,
    company: 'CipherByte Technologies',
    position: 'Full Stack Developer Intern',
    duration: 'May 2025 - June 2025',
    location: 'Remote',
    description: [
            'Developed and maintained responsive web applications using React, Node.js, and MongoDB',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented RESTful APIs and integrated third-party services to enhance application functionality',
      'Optimized application performance resulting in 40% faster load times',
      'Mentored junior developers and conducted code reviews to maintain code quality standards' 
    ],
    technologies: ['MongoDB','ExpressJS','NodeJS','ReactJS','Vite', 'Git'],
    website: 'https://cipherbytetechnologies.com'
  }
];

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-8 sm:py-12 md:py-16 lg:py-20 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            My professional journey in web development, showcasing the roles and responsibilities 
            that have shaped my expertise in building modern web applications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
            
            {experienceData.map((experience, index) => (
              <div key={experience.id} className={`relative mb-6 sm:mb-8 md:mb-12 ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'}`}>
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 md:left-6.5 lg:left-1/2 transform lg:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 dark:bg-blue-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-900 shadow-md"></div>
                
                <div className={`ml-8 sm:ml-12 md:ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                          <span className="font-semibold text-xs sm:text-sm md:text-base">{experience.company}</span>
                          {experience.website && (
                            <a 
                              href={experience.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="ml-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                            >
                              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 lg:mt-0 lg:text-right">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="sm:w-4 sm:h-4 mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="sm:w-4 sm:h-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;