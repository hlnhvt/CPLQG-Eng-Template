import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const introSubMenu = [
    { label: 'General Introduction', path: '/introduction/about' },
    { label: 'Open Letter', path: '/introduction/open-letter' },
    { label: 'Functions and Tasks', path: '/introduction/functions-and-tasks' },
    { label: 'Vision and Development Direction', path: '/introduction/vision-and-development' },
    { label: 'User Guide (English Version)', path: '/introduction/user-guide' },
    { label: 'Contact Information', path: '/introduction/contact-information' },
    { label: 'Linked Websites', path: '/introduction/linked-websites' },
    { label: 'Search Content', path: '/introduction/search-content' },
    { label: 'Vietnamese Legal System Overview', path: '/introduction/vietnamese-legal-system' },
    { label: 'Legal FAQ', path: '/introduction/legal-faq' },
  ];

  const legalDocSubMenu = [
    { label: 'Search & Latest Updates', path: '/legal-document-system' },
    { label: 'Important Policy Summaries', path: '/policy-summaries' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { label: 'Home', path: '/', hasDropdown: false },
    { label: 'Introduction', path: '/introduction/about', hasDropdown: true, subMenu: introSubMenu },
    { label: 'Featured news', path: '#', hasDropdown: true },
    { label: 'Legal document system', path: '/legal-document-system', hasDropdown: true, subMenu: legalDocSubMenu },
    { label: 'Corporate legal support', path: '#', hasDropdown: true },
    { label: 'Legal assistance', path: '#', hasDropdown: true },
  ];

  return (
    <nav className="bg-[#2a458d] text-white shadow-md border-b-4 border-[#1e346f] relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex items-center text-sm font-medium">
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setOpenDropdown(index)}
              onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
            >
              <Link 
                to={item.path}
                className={`flex items-center py-3.5 px-5 hover:bg-white/10 transition-colors ${
                  isActive(item.path) ? 'bg-white/20 rounded-md my-1' : ''
                }`}
                style={isActive(item.path) ? { padding: '8px 20px', margin: '6px 4px' } : {}}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown size={14} className="ml-1 opacity-70" />
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {item.hasDropdown && openDropdown === index && item.subMenu && (
                <div className="absolute top-full left-0 w-72 bg-white text-gray-800 shadow-xl border border-gray-100 rounded-b-md z-50">
                  <ul className="py-2">
                    {item.subMenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link 
                          to={sub.path} 
                          className={`block px-5 py-2.5 text-sm hover:bg-blue-50 hover:text-brand-blue transition-colors ${location.pathname === sub.path ? 'bg-blue-50 text-brand-blue font-bold border-l-2 border-brand-blue' : ''}`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
