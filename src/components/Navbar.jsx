import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoDark from '../assets/images/logo-dark.png';
import logoWhite from '../assets/images/logo-white.png';
import logoIconDark from '../assets/images/logo-icon-40.png';
import logoIconWhite from '../assets/images/logo-icon-40-white.png';
import avatar from '../assets/images/team/01.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav id="topnav" className="defaultscroll is-sticky w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="logo flex items-center gap-2">
          <div className="block sm:hidden">
            <img src={logoIconDark} className="h-10 dark:hidden" alt="logo" />
            <img src={logoIconWhite} className="h-10 hidden dark:inline-block" alt="logo white" />
          </div>
          <div className="hidden sm:block">
            <img src={logoDark} className="h-[24px] dark:hidden" alt="logo" />
            <img src={logoWhite} className="h-[24px] hidden dark:inline-block" alt="logo white" />
          </div>
        </Link>

        {/* Search + Avatar */}
        <ul className="flex items-center gap-3">
          <li>
            <div className="relative">
              <i className="uil uil-search text-lg absolute top-[10px] right-3" />
              <input
                type="text"
                className="py-2 px-3 text-sm border border-gray-100 dark:border-gray-800 dark:text-slate-200 rounded-3xl outline-none bg-white dark:bg-slate-900 pe-10 sm:w-44 w-36"
                placeholder="Search..."
              />
            </div>
          </li>

          <li className="relative">
            <button onClick={toggleDropdown} className="dropdown-toggle focus:outline-none">
              <span className="size-9 inline-flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 border-emerald-600 text-white">
                <img src={avatar} alt="avatar" className="rounded-full" />
              </span>
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-44 rounded-md bg-white dark:bg-slate-900 shadow-lg z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="py-2 text-start">
                  <li>
                    <Link to="/candidate-profile" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">
                      <i data-feather="user" className="me-2 size-4" /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/candidate-profile-setting" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">
                      <i data-feather="settings" className="me-2 size-4" /> Settings
                    </Link>
                  </li>
                  <li className="border-t my-2 border-gray-100 dark:border-gray-800" />
                  <li>
                    <Link to="/lock-screen" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">
                      <i data-feather="lock" className="me-2 size-4" /> Lockscreen
                    </Link>
                  </li>
                  <li>
                    <Link to="/connexion" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-white/70 hover:text-emerald-600 dark:hover:text-white">
                      <i data-feather="log-out" className="me-2 size-4" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={toggleMenu} className="block sm:hidden ml-4 focus:outline-none">
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
          </div>
        </button>
      </div>

      {/* Navigation Menu */}
      <div id="navigation" className={`sm:block ${mobileMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900`}>
        <ul className="navigation-menu px-4 py-2 space-y-1 sm:flex sm:space-y-0 sm:space-x-4">
          <li>
            <Link to="/" className="text-sm font-medium hover:text-emerald-600 dark:text-white">Accueil</Link>
          </li>
          <li>
            <Link to="/jobs" className="text-sm font-medium hover:text-emerald-600 dark:text-white">Jobs</Link>
          </li>
          <li>
            <Link to="/about" className="text-sm font-medium hover:text-emerald-600 dark:text-white">À propos</Link>
          </li>
          <li>
            <Link to="/contact" className="text-sm font-medium hover:text-emerald-600 dark:text-white">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
