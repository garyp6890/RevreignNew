import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'light' | 'white' | 'dark' | 'beige';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const bgColorClasses = {
  light: 'bg-rev-light',
  white: 'bg-white',
  dark: 'bg-rev-brown text-white',
  beige: 'bg-rev-beige/20'
};

const paddingClasses = {
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20'
};

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  bgColor = 'light',
  padding = 'lg'
}) => {
  return (
    <section className={`${bgColorClasses[bgColor]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;