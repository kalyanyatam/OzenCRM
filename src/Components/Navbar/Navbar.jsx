import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-50 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-[20px] md:text-[22px] font-bold text-[#111827] tracking-tight">
          OzenCRM
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/product" className="text-[#64748b] hover:text-[#111827] text-[15px] font-medium transition-colors">Product</Link>
          <Link to="/api" className="text-[#64748b] hover:text-[#111827] text-[15px] font-medium transition-colors">API</Link>
          <Link to="/pricing" className="text-[#64748b] hover:text-[#111827] text-[15px] font-medium transition-colors">Pricing</Link>
        </div>

        {/* Buttons - Hidden on very small screens to save space */}
        <div className="flex items-center gap-3">
          <Link to="/free-trial" className="hidden sm:block px-5 py-2 bg-[#f1f5f9] text-[#111827] rounded-lg text-sm font-semibold hover:bg-gray-200">
            Free Trial
          </Link>
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
          <Link to="/product" className="text-[#64748b] font-medium" onClick={() => setIsOpen(false)}>Product</Link>
          <Link to="/api" className="text-[#64748b] font-medium" onClick={() => setIsOpen(false)}>API</Link>
          <Link to="/pricing" className="text-[#64748b] font-medium" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/free-trial" className="w-full py-3 bg-[#f1f5f9] text-[#111827] rounded-lg font-semibold text-center block" onClick={() => setIsOpen(false)}>Free Trial</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;