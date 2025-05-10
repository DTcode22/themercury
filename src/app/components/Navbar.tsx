'use client';

import React, { useState, useEffect } from 'react'; // Explicit React import
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import { useSectionTheme } from '@/context/SectionThemeContext'; // Added import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeTheme } = useSectionTheme(); // Consume theme

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDotAiColor = (): string => {
    switch (activeTheme) {
      case 'emerald':
        return 'text-emerald-400';
      case 'blue':
        return 'text-blue-400';
      case 'red':
        return 'text-red-400';
      case 'purple':
        return 'text-purple-400';
      case 'gray':
        return 'text-gray-400';
      default:
        return 'text-emerald-400'; // Fallback
    }
  };

  const getButtonClasses = (): string => {
    const baseClasses =
      'px-5 py-2.5 rounded-full backdrop-blur-md font-medium transition-all hover:text-white hover:shadow-sm';
    switch (activeTheme) {
      case 'emerald':
        return `${baseClasses} bg-emerald-500/10 text-emerald-200 border border-emerald-400/20 hover:bg-gradient-to-r hover:from-emerald-950 hover:to-green-900 hover:shadow-emerald-500/30`;
      case 'blue':
        return `${baseClasses} bg-blue-500/10 text-blue-200 border border-blue-400/20 hover:bg-gradient-to-r hover:from-blue-950 hover:to-sky-900 hover:shadow-blue-500/30`;
      case 'red':
        return `${baseClasses} bg-red-500/10 text-red-200 border border-red-400/20 hover:bg-gradient-to-r hover:from-red-950 hover:to-rose-900 hover:shadow-red-500/30`;
      case 'purple':
        return `${baseClasses} bg-purple-500/10 text-purple-200 border border-purple-400/20 hover:bg-gradient-to-r hover:from-purple-950 hover:to-violet-900 hover:shadow-purple-500/30`;
      case 'gray':
        return `${baseClasses} bg-gray-500/10 text-gray-200 border border-gray-400/20 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:shadow-gray-500/30`;
      default:
        return `${baseClasses} bg-emerald-500/10 text-emerald-200 border border-emerald-400/20 hover:bg-gradient-to-r hover:from-emerald-950 hover:to-green-900 hover:shadow-emerald-500/30`;
    }
  };

  const getMobileButtonClasses = (): string => {
    const base = 'px-5 py-2.5 rounded-full text-white font-medium text-center';
    switch (activeTheme) {
      case 'emerald':
        return `${base} bg-gradient-to-r from-emerald-600 to-green-500`;
      case 'blue':
        return `${base} bg-gradient-to-r from-blue-600 to-sky-500`;
      case 'red':
        return `${base} bg-gradient-to-r from-red-600 to-rose-500`;
      case 'purple':
        return `${base} bg-gradient-to-r from-purple-600 to-violet-500`;
      case 'gray':
        return `${base} bg-gradient-to-r from-gray-600 to-slate-500`;
      default:
        return `${base} bg-gradient-to-r from-emerald-600 to-green-500`;
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-50 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <AnimatedLogo dotAiColor={getDotAiColor()} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/vms">VMS</NavLink>
            <NavLink href="/solutions">Solutions</NavLink>
            <NavLink href="/hardware">Hardware</NavLink>
            <Link
              href="/contact"
              className={getButtonClasses()} // Apply dynamic classes
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/vms" onClick={() => setIsOpen(false)}>
              VMS
            </MobileNavLink>
            <MobileNavLink href="/solutions" onClick={() => setIsOpen(false)}>
              Solutions
            </MobileNavLink>
            <MobileNavLink href="/hardware" onClick={() => setIsOpen(false)}>
              Hardware
            </MobileNavLink>
            <Link
              href="/contact"
              className={getMobileButtonClasses()} // Apply dynamic classes for mobile
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-white/80 hover:text-white font-medium transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-white/80 hover:text-white font-medium py-2 border-b border-white/10"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
