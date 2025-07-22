import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const skillsData: Skill[] = [
  { name: 'HTML/CSS',level:96, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 98, category: 'frontend' },
  { name: 'Next.js', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 94, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 99, category: 'backend' },
  { name: 'MySQL', level: 89, category: 'backend' },
  { name: 'Python', level: 97, category: 'backend' },
  { name: 'PHP', level: 85, category: 'backend' },
  { name: 'UI/UX Design', level: 87, category: 'design' },
  { name: 'Figma', level: 92, category: 'design' },
  { name: 'Git', level: 80, category: 'other' },
  { name: 'Testing', level: 90, category: 'other' },
  { name: 'Accessibility', level: 85, category: 'other' },
];

const Skills: React.FC = () => {
  const frontendSkills = skillsData.filter(skill => skill.category === 'frontend');
  const backendSkills = skillsData.filter(skill => skill.category === 'backend');
  const designSkills = skillsData.filter(skill => skill.category === 'design');
  const otherSkills = skillsData.filter(skill => skill.category === 'other');
  
  return (
    <section id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Here are some of the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-md">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Frontend Development</h3>
            <div className="space-y-3 sm:space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-md">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Backend Development</h3>
            <div className="space-y-3 sm:space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-md">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Design</h3>
            <div className="space-y-3 sm:space-y-4">
              {designSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 shadow-md">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">Other Skills</h3>
            <div className="space-y-3 sm:space-y-4">
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  return (
    <div>
      <div className="flex justify-between mb-1 sm:mb-2">
        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2 sm:h-2.5 rounded-full transition-all duration-300" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;