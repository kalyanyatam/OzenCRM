import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import APISection from './Components/APISection/APISection'
import CTA from './Components/CTA/CTA'
import Intelligence from './Components/Intelligence/Intelligence'
import Productsection from './Components/Productsection/Productsection'

const LandingPage = () => (
  <main>
    <Hero />
    <Features />
    <Intelligence />
    <APISection />
    <CTA />
  </main>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Productsection />} />
      </Routes>

      <footer className="w-full py-8 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 OzenCRM. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App