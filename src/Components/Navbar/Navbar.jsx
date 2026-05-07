import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-50 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-[20px] md:text-[22px] font-bold text-[#111827] tracking-tight">
          OzenCRM
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/product" className={`relative text-[15px] font-medium transition-colors group ${isActive('/product') ? 'text-[#111827]' : 'text-[#64748b] hover:text-[#111827]'}`}>
            Product
            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#111827] transition-all duration-300 ${isActive('/product') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link to="/api" className={`relative text-[15px] font-medium transition-colors group ${isActive('/api') ? 'text-[#111827]' : 'text-[#64748b] hover:text-[#111827]'}`}>
            API
            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#111827] transition-all duration-300 ${isActive('/api') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link to="/pricing" className={`relative text-[15px] font-medium transition-colors group ${isActive('/pricing') ? 'text-[#111827]' : 'text-[#64748b] hover:text-[#111827]'}`}>
            Pricing
            <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#111827] transition-all duration-300 ${isActive('/pricing') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://ipixelzen.com/register" className="hidden sm:block px-5 py-2 bg-[#f1f5f9] text-[#111827] rounded-lg text-sm font-semibold hover:bg-gray-200">
            Free Trial
          </a>
          <Link to="/book-demo" className="px-5 py-2 bg-[#4338ca] text-white rounded-lg text-sm font-semibold shadow-md inline-block">
            Book a Demo
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 border-b">
          <Link to="/product" onClick={() => setIsOpen(false)} className={`font-medium transition-colors hover:underline underline-offset-4 ${isActive('/product') ? 'text-[#111827] underline' : 'text-[#64748b] hover:text-[#111827]'}`}>Product</Link>
          <Link to="/api" onClick={() => setIsOpen(false)} className={`font-medium transition-colors hover:underline underline-offset-4 ${isActive('/api') ? 'text-[#111827] underline' : 'text-[#64748b] hover:text-[#111827]'}`}>API</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className={`font-medium transition-colors hover:underline underline-offset-4 ${isActive('/pricing') ? 'text-[#111827] underline' : 'text-[#64748b] hover:text-[#111827]'}`}>Pricing</Link>
          <a href="https://ipixelzen.com/register" className="w-full py-3 bg-[#f1f5f9] hover:bg-gray-200 transition-colors rounded-lg font-semibold text-center block">Free Trial</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;