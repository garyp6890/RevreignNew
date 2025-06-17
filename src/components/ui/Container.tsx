import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl'
};

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '4xl' 
}) => {
  return (
    <div className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  );
};

export default Container;