import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import CTA from './Components/CTA/CTA'
import Intelligence from './Components/Intelligence/Intelligence'
import Productsection from './Components/Productsection/Productsection'
import APISection from './Components/APISection/APISection'
import APIPage from './Components/APIPage/APIPage'
import PricingPage from './Components/PricingPage/PricingPage'
import FreeTrial from './Components/FreeTrial/FreeTrial'
import BookDemo from './Components/BookDemo/BookDemo'
import Footer from './Components/Footer/Footer'
import SubNav from './Components/Navbar/SubNav'

const LandingPage = () => (
  <main>
    <Hero />
    <SubNav />
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
        <Route path="/api" element={<APIPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/free-trial" element={<FreeTrial />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App