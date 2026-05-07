import React from 'react';
import DashboardImage from '../../assets/Dashboard.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
      
      {/* Left Content Column */}
      <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#111827] leading-tight">
          Manage <br className="hidden md:block" /> Customers.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#4338ca] leading-tight mb-6">
          Close Deals Faster.
        </h2>
        
        <p className="text-base md:text-lg text-gray-500 max-w-[480px] mx-auto md:mx-0 leading-relaxed mb-8 md:mb-10">
          OzenCRM helps you streamline sales, automate workflows, and scale your business effortlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a href="https://ipixelzen.com/register" className="w-full sm:w-auto px-8 py-4 bg-[#4338ca] text-white rounded-xl font-bold text-lg shadow-lg text-center">
            Start Free Trial
          </a>
          <Link to="/book-demo" className="w-full sm:w-auto px-8 py-4 bg-white text-[#111827] border border-gray-200 rounded-xl font-bold text-lg shadow-sm text-center">
            Book a Demo
          </Link>
        </div>
      </div>

    {/* Right Graphic Column */}
{/* Right Graphic Column */}
<div className="w-full md:w-1/2 relative order-1 md:order-2 flex justify-center items-center">
  {/* The soft glow behind the image - slightly smaller to match image size */}
  <div className="absolute -z-10 w-[80%] h-[80%] bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
  
  {/* Image Wrapper: Added max-w-[85%] to shrink the image slightly */}
  <div className="relative w-full max-w-[85%] md:max-w-[90%] p-2 md:p-3 bg-white rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 transform md:rotate-[-2deg] transition-all hover:rotate-0 duration-500">
    <div className="rounded-[18px] md:rounded-[24px] overflow-hidden bg-[#2463eb] aspect-[4/3]">
      <img 
        src={DashboardImage} 
        alt="OzenCRM Analytics Dashboard" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
    </section>
  );
};

export default Hero;