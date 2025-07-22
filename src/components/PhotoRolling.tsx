import React from 'react';

const PhotoRolling: React.FC = () => {
  const photos = [
    {
      id: 1,
      url: 'image copy 3.png',
      alt: 'Modern workspace setup'
    },
    {
      id: 2,
      url: 'image copy.png',
      alt: 'Code on laptop screen'
    },
    {
      id: 3,
      url: 'image.png',
      alt: 'Creative design workspace'
    },
    {
      id: 4,
      url: 'image copy 2.png',
      alt: 'Team collaboration'
    },
    {
      id: 5,
      url: 'image copy 4.png',
      alt: 'Mobile app development'
    },
    {
      id: 6,
      url: 'image copy 5.png',
      alt: 'Mobile app development'
    },
    {
      id: 7,
      url: 'io.png',
      alt: 'Technology and creativity'
    }
  ];

  // Calculate dynamic animation duration based on number of photos
  // More photos = longer duration for smooth scrolling
  const animationDuration = Math.max(20, photos.length * 3);
  
  // Dynamic styles for the animation
  const scrollStyle = {
    animation: `scroll ${animationDuration}s linear infinite`,
    width: `${photos.length * 2 * 280}px` // Responsive width calculation
  };
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            A visual showcase of my development journey, workspace, and creative participation.
          </p>
        </div>
        
        <div className="relative">
          {/* Rolling container */}
          <div 
            className="flex space-x-3 sm:space-x-4 md:space-x-6" 
            style={scrollStyle}
          >
            {/* First set of photos */}
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="flex-shrink-0 w-48 h-36 xs:w-56 xs:h-42 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {photos.map((photo) => (
              <div
                key={`duplicate-${photo.id}`}
                className="flex-shrink-0 w-48 h-36 xs:w-56 xs:h-42 sm:w-64 sm:h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-8 sm:w-16 md:w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-8 sm:w-16 md:w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default PhotoRolling;