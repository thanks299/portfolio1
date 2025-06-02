import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses = 'rounded-md font-medium inline-flex items-center justify-center transition-all duration-300 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-gray-300 disabled:text-gray-500',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-gray-300 disabled:text-gray-500',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:border-gray-300 disabled:text-gray-400',
    text: 'bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 disabled:text-gray-400',
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-2.5 px-5',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-white dark:bg-dark-700 z-0 opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={allClasses} 
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={allClasses} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default Button;