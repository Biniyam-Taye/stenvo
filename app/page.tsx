"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, PenTool, CheckCircle, Truck } from "lucide-react";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress || 0);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value);
    setScrollProgress(newProgress);
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollLeft = (newProgress / 100) * (scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <div className="w-full flex justify-center sticky top-1 lg:top-2 z-50 px-4 lg:px-6">
        <header className="w-full max-w-7xl bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200/50 rounded-[2rem] h-[76px] lg:h-[84px] flex items-center px-6 lg:px-10 relative">

          <div className="flex-1 flex items-center">
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Stenvo Logo"
              className="h-[56px] md:h-[68px] w-auto cursor-pointer object-contain relative z-10 -ml-1 transition-transform hover:scale-105"
            />
          </div>

          {/* Centered Nav */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link href="#catalog" className="text-[17px] font-normal text-[#2d3227] hover:text-[#525f48] transition-colors">Catalog</Link>
            <Link href="#pricing" className="text-[17px] font-normal text-[#2d3227] hover:text-[#525f48] transition-colors">Pricing</Link>
            <Link href="#how-it-works" className="flex items-center gap-1.5 text-[17px] font-normal text-[#2d3227] hover:text-[#525f48] transition-colors">
              How it works
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px]"><path d="M6 9l6 6 6-6" /></svg>
            </Link>
          </nav>

          <div className="flex-1 flex items-center justify-end">
            <button
              className="rounded-md px-6 h-10 text-[15px] font-bold transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#9DF542', color: '#1B2412' }}
            >
              My store
            </button>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-12 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

              {/* Left Content */}
              <div className="max-w-xl z-20 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16">
                <h1
                  className="text-6xl lg:text-[76px] font-black uppercase tracking-normal leading-[1.15] mb-6"
                  style={{ color: '#2B3220', fontFamily: 'Impact, "Arial Black", "Segoe UI Black", sans-serif' }}
                >
                  Create And Sell <br />
                  Custom Products
                </h1>

                <p className="text-[#495439] text-[16px] sm:text-[17px] font-normal leading-normal mb-8 font-sans">
                  Turn your custom ideas into premium merchandise with zero upfront costs.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-4 sm:gap-6 text-[#2B3220] text-lg font-semibold mb-12">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    100% Free to use
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    1300+ products
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Global delivery
                  </span>
                </div>

                <div className="flex flex-col items-start gap-4 mb-2">
                  <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes vibrate-btn {
                      0% { transform: translateX(0) translateY(0); }
                      20% { transform: translateX(-2px) translateY(1px) rotate(-1deg); }
                      40% { transform: translateX(2px) translateY(-1px) rotate(1deg); }
                      60% { transform: translateX(-2px) translateY(1px) rotate(-1deg); }
                      80% { transform: translateX(2px) translateY(-1px) rotate(1deg); }
                      100% { transform: translateX(0) translateY(0); }
                    }
                    .hover-vibrate-trigger:hover {
                      animation: vibrate-btn 0.5s ease-in-out infinite !important;
                    }
                    @keyframes auto-wiggle {
                      0%, 100% { transform: rotate(6deg) translateX(0) translateY(0); }
                      20% { transform: rotate(7.5deg) translateX(-1.5px) translateY(0.5px); }
                      40% { transform: rotate(4.5deg) translateX(1.5px) translateY(-0.5px); }
                      60% { transform: rotate(7deg) translateX(-1px) translateY(0.5px); }
                      80% { transform: rotate(5deg) translateX(1px) translateY(-0.5px); }
                    }
                    .auto-wiggle {
                      animation: auto-wiggle 0.6s ease-in-out infinite;
                    }
                    @keyframes auto-wiggle-neg {
                      0%, 100% { transform: rotate(-3deg) translateX(0) translateY(0); }
                      20% { transform: rotate(-4.5deg) translateX(1.5px) translateY(0.5px); }
                      40% { transform: rotate(-1.5deg) translateX(-1.5px) translateY(-0.5px); }
                      60% { transform: rotate(-4deg) translateX(1px) translateY(0.5px); }
                      80% { transform: rotate(-2deg) translateX(-1px) translateY(-0.5px); }
                    }
                    .auto-wiggle-neg {
                      animation: auto-wiggle-neg 0.6s ease-in-out infinite;
                    }
                    @keyframes slide-two-photos {
                      0%, 35% { transform: translateX(0); }
                      45%, 85% { transform: translateX(-50%); }
                      95%, 100% { transform: translateX(0); }
                    }
                    .animate-slide-photos {
                      animation: slide-two-photos 4s infinite cubic-bezier(0.77, 0, 0.175, 1);
                    }
                    .animate-slide-photos-delayed {
                      animation: slide-two-photos 4s infinite cubic-bezier(0.77, 0, 0.175, 1);
                      animation-delay: -2s;
                    }
                    @keyframes sticker-fade-pop {
                      0%, 35% { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
                      42%, 88% { opacity: 0; transform: translateY(15px) scale(0.85); pointer-events: none; }
                      95%, 100% { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
                    }
                    .animate-sticker-fade {
                      animation: sticker-fade-pop 4s infinite cubic-bezier(0.77, 0, 0.175, 1);
                    }
                    .animate-sticker-fade-delayed {
                      animation: sticker-fade-pop 4s infinite cubic-bezier(0.77, 0, 0.175, 1);
                      animation-delay: -2s;
                    }
                  `}} />
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                      className="hover-vibrate-trigger rounded-md px-10 h-14 text-[17px] font-extrabold font-sans w-full sm:w-auto"
                      style={{ backgroundColor: '#9DF542', color: '#1B2412' }}
                    >
                      Get started for free
                    </button>
                    <button
                      className="rounded-md px-10 h-14 text-[17px] font-extrabold font-sans border-[3px] border-[#2B3220] text-[#2B3220] transition-colors hover:bg-[#2B3220] hover:text-[#9DF542] w-full sm:w-auto flex items-center justify-center"
                    >
                      How it works
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - Images */}
              <div className="relative h-[600px] w-full hidden lg:block z-10">

                {/* Photo 1 - Top Left */}
                <div className="absolute top-8 left-4 w-[280px] h-[360px] z-10">
                  <div className="w-full h-full bg-[#e0f2fe] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-sm transition-transform hover:-translate-y-2 duration-300">
                    <div className="w-[200%] h-full flex animate-slide-photos">
                      <div className="w-1/2 h-full relative">
                        <img
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&fit=crop"
                          alt="Student"
                          className="w-full h-[120%] object-cover object-top -mt-6"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-1/2 h-full relative">
                        <img
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&fit=crop"
                          alt="Creative Writer"
                          className="w-full h-[120%] object-cover object-top -mt-6"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  {/* "Thank You. Next." Floating Sticker */}
                  <div className="absolute -top-2 -right-12 z-50 animate-sticker-fade pointer-events-none">
                    <div className="auto-wiggle group cursor-pointer scale-[0.9] pointer-events-auto">
                      <div className="bg-white rounded-[1.2rem] shadow-2xl px-6 py-4 flex items-center gap-4 border-2 border-gray-50 transition-transform group-hover:scale-105 group-hover:-rotate-3">
                        {/* Beautiful Sparkles Icon rather than a messy OS Emoji */}
                        <div className="flex flex-col items-center justify-center text-[#2B3220]">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L14.59 9.41L23 12L14.59 14.59L12 23L9.41 14.59L1 12L9.41 9.41L12 1Z" />
                          </svg>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="-mr-8 -mt-2 text-[#9DF542]">
                            <path d="M12 1L14.59 9.41L23 12L14.59 14.59L12 23L9.41 14.59L1 12L9.41 9.41L12 1Z" />
                          </svg>
                        </div>
                        <div className="text-[28px] font-bold text-[#111827] flex flex-col tracking-tight italic" style={{ fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: '0.85' }}>
                          <span>Create</span>
                          <span className="ml-[12px]">Your</span>
                          <span className="ml-[4px]">Design.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo 2 - Bottom Right */}
                <div className="absolute top-[160px] right-2 w-[300px] h-[380px] z-20">
                  <div className="w-full h-full bg-[#ede9fe] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-sm transition-transform hover:-translate-y-2 duration-300">
                    <div className="w-[200%] h-full flex flex-row-reverse animate-slide-photos-delayed">
                      <div className="w-1/2 h-full relative">
                        <img
                          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&fit=crop"
                          alt="Student"
                          className="w-full h-full object-cover object-top pt-4"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-1/2 h-full relative">
                        <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&fit=crop"
                          alt="Creative Designer"
                          className="w-full h-full object-cover object-top pt-4"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  {/* "Item Sold" Floating Sticker */}
                  <div className="absolute -top-4 -right-10 z-50 animate-sticker-fade-delayed pointer-events-none">
                    <div className="auto-wiggle-neg group cursor-pointer scale-[0.9] pointer-events-auto">
                      <div className="relative">
                        {/* Dark Rectangle */}
                        <div className="bg-[#151a10] rounded-lg px-5 py-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-transform group-hover:scale-105 border-[1px] border-[#313b24]">
                          <span
                            className="text-[#f8fafc] text-[25px] uppercase tracking-wider leading-none block"
                            style={{
                              fontFamily: 'Impact, "Arial Black", "Segoe UI Black", sans-serif',
                              textShadow: '-2px 0px 0px #06b6d4, 2px 0px 0px #f43f5e'
                            }}
                          >
                            BEST SELLER
                          </span>
                        </div>
                        {/* Blue Oval */}
                        <div className="absolute -top-6 -right-8 bg-[#2563EB] w-[85px] h-[55px] rounded-[50%] flex items-center justify-center transform rotate-[15deg] shadow-[inset_0_-4px_10px_rgba(0,0,0,0.1),_0_10px_15px_-3px_rgba(0,0,0,0.2)] transition-transform group-hover:rotate-[25deg] group-hover:scale-110">
                          <div
                            className="text-white flex items-end justify-center leading-none"
                            style={{ fontFamily: 'Impact, "Arial Black", "Segoe UI Black", sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                          >
                            <span className="text-[20px] transform -rotate-[15deg] translate-y-[2px] translate-x-[2px] drop-shadow-sm">$</span>
                            <span className="text-[26px] transform -rotate-3 -ml-[2px] mb-[1px] drop-shadow-sm">$</span>
                            <span className="text-[34px] transform rotate-[12deg] -ml-[2px] mb-[1px] drop-shadow-sm">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-[340px] left-[10px] w-6 h-6 text-[#a0d6a5]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                </div>

                <div className="absolute top-[50px] right-[40px] w-[14px] h-[14px] rounded-full bg-[#c2b6f1]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Section - Designed to match exactly */}
        <section className="bg-[#f4f3ec] pt-12 pb-10 px-6 lg:px-16 overflow-hidden flex flex-col justify-center">
          <style dangerouslySetInnerHTML={{
            __html: `
            .cards-scroll::-webkit-scrollbar { display: none; }
            .cards-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />

          <div className="max-w-[1400px] mx-auto w-full">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
              <div>
                <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-gray-600 mb-4 font-sans">Elevate your brand</p>
                <h2 className="text-[40px] md:text-[56px] font-medium text-[#111] leading-[1.05] tracking-tight max-w-[600px] font-sans">
                  Comprehensive Custom Merch for Everyone
                </h2>
              </div>
            </div>

            {/* Scrollable cards */}
            <div 
              id="cards-track" 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="cards-scroll flex gap-6 overflow-x-auto pb-3 -mx-6 px-6 lg:-mx-16 lg:px-16"
            >

              {/* Card 1 — Green */}
              <div className="flex-shrink-0 w-[320px] h-[520px] bg-[#ccff00] rounded-[2rem] overflow-hidden flex flex-col relative group transition-transform hover:-translate-y-1">
                <div className="p-7 relative z-10 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full">Apparel</span>
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full">Bestseller</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-[#ccff00]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-[36px] font-medium text-[#111] leading-[1.05] tracking-tight mb-3 font-sans">T-Shirts &<br />Hoodies</h3>
                  <p className="text-[15px] text-[#222] leading-relaxed max-w-[90%] font-sans">For fashion brands and personal styles. Premium fabric, vivid prints.</p>
                </div>
                {/* Photo inset */}
                <div className="absolute bottom-0 left-0 right-0 h-[260px]">
                  <div className="absolute inset-0 rounded-t-[1.5rem] overflow-hidden bg-[#e0f2fe] transition-transform duration-500 group-hover:scale-[1.03]" style={{ transformOrigin: 'bottom' }}>

                    {/* Sliding Photos Container */}
                    <div className="w-[200%] h-full flex animate-slide-photos" style={{ animationDelay: '0s' }}>
                      {/* Photo 1: Orange Faith Hoodie */}
                      <div className="w-1/2 h-full relative">
                        <img src="/orange-hoodie.jpg" alt="Orange Faith Hoodie Placeholder" className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                      {/* Photo 2: Hustle Houston T-shirt */}
                      <div className="w-1/2 h-full relative">
                        <img src="/hustle-tee.jpg" alt="Hustle Houston T-Shirt Placeholder" className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10 pointer-events-none"></div>

                    {/* Read More button overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                      <span className="text-white text-[15px] font-medium tracking-wide drop-shadow-md">Design Now</span>
                      <div className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#111] shadow-lg group-hover:bg-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 — Beige */}
              <div className="flex-shrink-0 w-[320px] h-[520px] bg-[#f0eae1] rounded-[2rem] overflow-hidden flex flex-col relative group transition-transform hover:-translate-y-1">
                <div className="p-7 relative z-10 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full shadow-sm">Accessories</span>
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full shadow-sm">Trending</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#dfd7c8] flex items-center justify-center text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-[36px] font-medium text-[#111] leading-[1.05] tracking-tight mb-3 font-sans">Bags &<br />Tote Bags</h3>
                  <p className="text-[15px] text-[#444] leading-relaxed max-w-[90%] font-sans">Stylish carry-alls printed with your unique design. Perfect for gifting and reselling.</p>
                </div>
                {/* Photo inset */}
                <div className="absolute bottom-0 left-0 right-0 h-[260px]">
                  <div className="absolute inset-0 rounded-t-[1.5rem] overflow-hidden bg-[#e8e4dc] transition-transform duration-500 group-hover:scale-[1.03]" style={{ transformOrigin: 'bottom' }}>
                    {/* Sliding Photos Container */}
                    <div className="w-[200%] h-full flex animate-slide-photos" style={{ animationDelay: '2s' }}>
                      {/* Photo 1 */}
                      <div className="w-1/2 h-full relative">
                        <img src="/bag1.jpg" alt="Canvas Bag" className="w-full h-full object-cover object-top" />
                      </div>
                      {/* Photo 2 */}
                      <div className="w-1/2 h-full relative">
                        <img src="/bag2.jpg" alt="Leather Bag" className="w-full h-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10 pointer-events-none"></div>
                    {/* Read More button overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                      <span className="text-white text-[15px] font-medium tracking-wide drop-shadow-md">Design Now</span>
                      <div className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#111] shadow-lg group-hover:bg-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 — Beige */}
              <div className="flex-shrink-0 w-[320px] h-[520px] bg-[#f0eae1] rounded-[2rem] overflow-hidden flex flex-col relative group transition-transform hover:-translate-y-1">
                <div className="p-7 relative z-10 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full shadow-sm">Home</span>
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full shadow-sm">All levels</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#dfd7c8] flex items-center justify-center text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-[36px] font-medium text-[#111] leading-[1.05] tracking-tight mb-3 font-sans">Mugs &<br />Drinkware</h3>
                  <p className="text-[15px] text-[#444] leading-relaxed max-w-[90%] font-sans">Custom mugs that start every morning with your brand — from beginner to advanced sellers.</p>
                </div>
                {/* Photo inset */}
                <div className="absolute bottom-0 left-0 right-0 h-[260px]">
                  <div className="absolute inset-0 rounded-t-[1.5rem] overflow-hidden bg-[#d8d4f0] transition-transform duration-500 group-hover:scale-[1.03]" style={{ transformOrigin: 'bottom' }}>
                    {/* Sliding Photos Container */}
                    <div className="w-[200%] h-full flex animate-slide-photos" style={{ animationDelay: '1s' }}>
                      {/* Photo 1 */}
                      <div className="w-1/2 h-full relative">
                        <img src="d1.jpg" alt="White Mug" className="w-full h-full object-cover object-bottom" />
                      </div>
                      {/* Photo 2 */}
                      <div className="w-1/2 h-full relative">
                        <img src="d2.jpg" alt="Latte Cup" className="w-full h-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10 pointer-events-none"></div>
                    {/* Read More button overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                      <span className="text-white text-[15px] font-medium tracking-wide drop-shadow-md">Design Now</span>
                      <div className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#111] shadow-lg group-hover:bg-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 — Blue */}
              <div className="flex-shrink-0 w-[320px] h-[520px] bg-[#5bc2e7] rounded-[2rem] overflow-hidden flex flex-col relative group transition-transform hover:-translate-y-1">
                <div className="p-7 relative z-10 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      <span className="bg-white/90 text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full shadow-sm">Stationery</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-[36px] font-medium text-[#111] leading-[1.05] tracking-tight mb-3 font-sans">Posters &<br />ID badges</h3>
                  <p className="text-[15px] text-[#111]/80 leading-relaxed max-w-[90%] font-sans">Museum-quality prints of your artwork shipped directly to your customers worldwide.</p>
                </div>
                {/* Photo inset */}
                <div className="absolute bottom-0 left-0 right-0 h-[260px]">
                  <div className="absolute inset-0 rounded-t-[1.5rem] overflow-hidden bg-[#e0f7fa] transition-transform duration-500 group-hover:scale-[1.03]" style={{ transformOrigin: 'bottom' }}>
                    {/* Sliding Photos Container */}
                    <div className="w-[200%] h-full flex animate-slide-photos" style={{ animationDelay: '3s' }}>
                      {/* Photo 1 */}
                      <div className="w-1/2 h-full relative">
                        <img src="i2.jpg" alt="Posters" className="w-full h-full object-cover object-top" />
                      </div>
                      {/* Photo 2 */}
                      <div className="w-1/2 h-full relative">
                        <img src="i1.jpg" alt="ID Badges" className="w-full h-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10 pointer-events-none"></div>
                    {/* Read More button overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                      <span className="text-white text-[15px] font-medium tracking-wide drop-shadow-md">Design Now</span>
                      <div className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#111] shadow-lg group-hover:bg-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 — Lavender (Hats & Phones) */}
              <div className="flex-shrink-0 w-[320px] h-[520px] bg-[#e6e0f8] rounded-[2rem] overflow-hidden flex flex-col relative group transition-transform hover:-translate-y-1">
                <div className="p-7 relative z-10 flex-1 flex flex-col">
                  {/* Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-2">
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full shadow-sm">Accessories</span>
                      <span className="bg-white text-[#111] text-[14px] font-medium px-4 py-1.5 rounded-full shadow-sm">Tech</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center text-[#5c4b8b]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-[36px] font-medium text-[#111] leading-[1.05] tracking-tight mb-3 font-sans">Hats &<br />Phone Cases</h3>
                  <p className="text-[15px] text-[#444] leading-relaxed max-w-[90%] font-sans">Protect and style. Premium structured hats and durable, custom-printed safety covers.</p>
                </div>
                {/* Photo inset */}
                <div className="absolute bottom-0 left-0 right-0 h-[260px]">
                  <div className="absolute inset-0 rounded-t-[1.5rem] overflow-hidden bg-[#dcd6f0] transition-transform duration-500 group-hover:scale-[1.03]" style={{ transformOrigin: 'bottom' }}>
                    {/* Sliding Photos Container */}
                    <div className="w-[200%] h-full flex animate-slide-photos" style={{ animationDelay: '1.5s' }}>
                      {/* Photo 1: Hat */}
                      <div className="w-1/2 h-full relative">
                        <img src="p1.jpg" alt="Premium structured hat" className="w-full h-full object-cover object-center" />
                      </div>
                      {/* Photo 2: Phone Case */}
                      <div className="w-1/2 h-full relative">
                        <img src="p2.jpg" alt="Custom phone safety cover" className="w-full h-full object-cover object-center" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 z-10 pointer-events-none"></div>
                    {/* Read More button overlay */}
                    <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
                      <span className="text-white text-[15px] font-medium tracking-wide drop-shadow-md">Design Now</span>
                      <div className="w-7 h-7 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#111] shadow-lg group-hover:bg-white transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Scroll Progress & Navigation Graphic */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-4 mb-4 px-6 lg:px-4 w-full relative z-20 gap-8">
              {/* Graphic Tracker bar - Interactive */ }
              <div className="hidden md:flex items-center gap-4 flex-1 max-w-sm mr-8 relative group">
                <style dangerouslySetInnerHTML={{__html: `
                  .custom-scrollbar::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 32px;
                    height: 16px;
                    border-radius: 8px;
                    background: #ccff00;
                    border: 3px solid #111;
                    cursor: pointer;
                    transition: transform 0.15s ease-out;
                  }
                  .custom-scrollbar::-webkit-slider-thumb:hover {
                    transform: scale(1.15);
                  }
                  .custom-scrollbar::-moz-range-thumb {
                    width: 32px;
                    height: 16px;
                    border-radius: 8px;
                    background: #ccff00;
                    border: 3px solid #111;
                    cursor: pointer;
                    transition: transform 0.15s ease-out;
                  }
                  .custom-scrollbar::-moz-range-thumb:hover {
                    transform: scale(1.15);
                  }
                `}} />
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={scrollProgress || 0} 
                  onChange={handleSliderChange}
                  className="custom-scrollbar w-full h-1.5 rounded-full appearance-none cursor-pointer focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #111 0%, #111 ${scrollProgress}%, #e5e7eb ${scrollProgress}%, #e5e7eb 100%)`
                  }}
                  aria-label="Scroll horizontal cards"
                />
              </div>
              
              {/* Interactive Slide Arrows */}
              <div className="flex gap-3 ml-auto">
                <button
                  onClick={() => {
                    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
                  }}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white text-[#111] flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={() => {
                    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
                  }}
                  className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[#f0ebe1] pt-12 pb-24 px-6 lg:px-10 flex flex-col justify-center items-center">
          <div className="max-w-[1240px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Header Block */}
            <div className="flex flex-col justify-center pr-2 md:pr-4 py-8">
              <h2 className="text-[32px] md:text-[38px] font-extrabold text-[#202b2a] leading-tight mb-5 tracking-tight font-sans">
                Simple guide
              </h2>
              <p className="text-[#64716e] text-[14px] md:text-[15px] font-medium leading-[1.6] mb-8 pr-4">
                Follow this simple guide: choose your material, select a print house, design your product, and place your order.
              </p>
              <div>
                <button className="bg-[#7ef98c] text-[#133227] px-8 py-3 rounded-xl font-bold text-[15px] hover:bg-[#6be079] transition-colors shadow-sm tracking-wide">
                  Start designing
                </button>
              </div>
            </div>

            {/* Step 1 Card */}
            <div className="bg-[#ccff00] text-[#111] p-7 md:p-8 rounded-[1.2rem] flex flex-col justify-between shadow-sm z-10 w-full hover-vibrate-trigger transition-transform">
              <div>
                <div className="flex items-center gap-3 mb-5 text-[#111]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  <span className="font-bold text-[#111] text-[18px] md:text-[19px] tracking-tight">1. Choose Material</span>
                </div>
                <p className="text-[#222] text-[14px] leading-[1.6] mb-8 font-medium pr-2">
                  First, choose the material or product you want to design on from our extensive catalog.
                </p>
              </div>
              <div>
                <Link href="#" className="text-[#111] text-[13px] md:text-[14px] font-semibold hover:opacity-75 transition-opacity underline decoration-1 underline-offset-4">Browse catalog</Link>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="bg-[#e6e0f8] p-7 md:p-8 rounded-[1.2rem] flex flex-col justify-between hover-vibrate-trigger transition-transform shadow-sm w-full">
              <div>
                <div className="flex items-center gap-3 mb-5 text-[#111]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  <span className="font-bold text-[#111] text-[18px] md:text-[19px] tracking-tight">2. Select Print House</span>
                </div>
                <p className="text-[#444] text-[14px] leading-[1.6] mb-8 font-medium pr-2">
                  Second, select the best seller or print house that fits your unique needs and location.
                </p>
              </div>
              <div>
                <Link href="#" className="text-[#111] text-[13px] md:text-[14px] font-semibold hover:opacity-75 transition-opacity">Find sellers</Link>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="bg-[#5bc2e7] p-7 md:p-8 rounded-[1.2rem] flex flex-col justify-between hover-vibrate-trigger transition-transform shadow-sm w-full">
              <div>
                <div className="flex items-center gap-3 mb-5 text-[#111]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
                  <span className="font-bold text-[#111] text-[18px] md:text-[19px] tracking-tight">3. Design Material</span>
                </div>
                <p className="text-[#111]/80 text-[14px] leading-[1.6] mb-8 font-medium pr-2">
                  Third, design the selected material using our powerful online designer tool.
                </p>
              </div>
              <div>
                <Link href="#" className="text-[#111] text-[13px] md:text-[14px] font-semibold hover:opacity-75 transition-opacity">Open designer</Link>
              </div>
            </div>

            {/* Step 4 Card */}
            <div className="bg-[#f0eae1] p-7 md:p-8 rounded-[1.2rem] flex flex-col justify-between hover-vibrate-trigger transition-transform shadow-sm w-full">
              <div>
                <div className="flex items-center gap-3 mb-5 text-[#111]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                  <span className="font-bold text-[#111] text-[18px] md:text-[19px] tracking-tight">4. Payment & Order</span>
                </div>
                <p className="text-[#444] text-[14px] leading-[1.6] mb-8 font-medium pr-2">
                  Then, securely make your payment and place your order directly through our platform.
                </p>
              </div>
              <div>
                <Link href="#" className="text-[#111] text-[13px] md:text-[14px] font-semibold hover:opacity-75 transition-opacity">Learn more</Link>
              </div>
            </div>

            {/* Step 5 Card */}
            <div className="bg-[#f6cdcd] p-7 md:p-8 rounded-[1.2rem] flex flex-col justify-between hover-vibrate-trigger transition-transform shadow-sm w-full">
              <div>
                <div className="flex items-center gap-3 mb-5 text-[#111]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span className="font-bold text-[#111] text-[18px] md:text-[19px] tracking-tight">5. Process Complete</span>
                </div>
                <p className="text-[#333] text-[14px] leading-[1.6] mb-8 font-medium pr-2">
                  Finally, the process is complete! Your custom designed product will be on its way.
                </p>
              </div>
              <div>
                <Link href="#" className="text-[#111] text-[13px] md:text-[14px] font-semibold hover:opacity-75 transition-opacity">Track order</Link>
              </div>
            </div>

          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative w-full overflow-hidden bg-white pt-4 pb-32 border-t border-gray-100/50">
          {/* Subtle Vertical Lines Container */}
          <div className="absolute inset-0 flex justify-between px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48 pointer-events-none opacity-[0.25] z-0">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-[1px] h-[85%] bg-gradient-to-b from-gray-300 via-gray-200 to-transparent relative">
                {/* Randomly place small orange dashes on some lines */}
                {i % 2 !== 0 && (
                  <div className="absolute top-[60%] -left-[1px] w-[3px] h-6 bg-orange-400 rounded-full"></div>
                )}
                {i === 2 && (
                  <div className="absolute top-[80%] -left-[1px] w-[3px] h-8 bg-orange-400 rounded-full"></div>
                )}
              </div>
            ))}
          </div>

          <div className="relative max-w-[1600px] mx-auto min-h-[500px] lg:min-h-[700px] flex flex-col items-center justify-end px-4 z-10">
            
            {/* Desktop Scattered Grid of Images */}
            <div className="absolute top-0 left-0 w-full h-[500px] hidden lg:block pointer-events-none">
              


              {/* Box/Image 1 */}
              <div className="absolute top-[8%] left-[2%] w-[120px] h-[140px] rounded-[1rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&fit=crop" className="w-full h-full object-cover" alt="User" />
              </div>

              {/* Box/Image 2 */}
              <div className="absolute top-[35%] left-[6%] w-[100px] h-[120px] rounded-[1rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&fit=crop" className="w-full h-full object-cover" alt="User" />
              </div>

              {/* Box/Image 3 (higher up) */}
              <div className="absolute top-[0%] left-[14%] w-[140px] h-[160px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>

              {/* Box/Image 4 */}
              <div className="absolute top-[18%] left-[25%] w-[130px] h-[150px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>

              {/* Box/Image 5 (top middle) */}
              <div className="absolute top-[-3%] left-[36%] w-[120px] h-[140px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&fit=crop" className="w-full h-full object-cover" alt="User" />
              </div>

              {/* Box/Image 6 */}
              <div className="absolute top-[14%] left-[46%] w-[140px] h-[160px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>

              {/* Box/Image 7 */}
              <div className="absolute top-[0%] left-[58%] w-[110px] h-[130px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>

              {/* Box/Image 8 (Lower Right) */}
              <div className="absolute top-[20%] left-[67%] w-[130px] h-[150px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>

              {/* Box/Image 9 - The TILTED 3D one */}
              <div 
                className="absolute top-[30%] left-[78%] w-[150px] h-[170px] rounded-[1rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border-[8px] border-white pointer-events-auto transition-all duration-300 hover:rotate-0"
                style={{ transform: 'perspective(1000px) rotateY(-12deg) rotateX(8deg) rotateZ(-2deg)' }}
              >
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
                {/* 3D reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
              </div>

              {/* Box/Image 10 - Upper Right */}
              <div className="absolute top-[-5%] left-[78%] w-[130px] h-[150px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>

              {/* Box/Image 11 - Right Edge */}
              <div className="absolute top-[12%] left-[89%] w-[110px] h-[130px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1531123897727-8f129e1eb74e?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>

              {/* Box/Image 12 - Far Right Edge (Low) */}
              <div className="absolute top-[37%] left-[91%] w-[120px] h-[140px] rounded-[1.2rem] overflow-hidden shadow-sm border-[4px] border-white pointer-events-auto transition-transform hover:-translate-y-2 hover:shadow-lg">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&fit=crop" className="w-full h-full object-cover object-top" alt="User" />
              </div>
            </div>

            {/* Mobile simplified layout */}
            <div className="grid grid-cols-3 gap-2 mb-12 lg:hidden w-full max-w-sm mx-auto">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&fit=crop" className="w-full h-24 object-cover rounded-xl" alt="User" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&fit=crop" className="w-full h-24 object-cover rounded-xl" alt="User" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&fit=crop" className="w-full h-24 object-cover rounded-xl" alt="User" />
            </div>

            {/* Content Container */}
            <div className="flex flex-col items-center text-center mt-20 lg:mt-56 z-20 w-full relative">
              <span className="bg-[#f8f9fa] border border-gray-200/60 shadow-sm text-[#111] text-[15px] font-bold px-5 py-2 rounded-full mb-6">
                Testimonials
              </span>
              
              <h2 className="text-[42px] md:text-[64px] lg:text-[76px] font-bold text-[#111] leading-[1.05] tracking-[-0.03em] mb-6 max-w-4xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Trusted by leaders <br className="hidden md:block"/>
                <span className="text-[#a1a1aa] block mt-1">from various industries</span>
              </h2>
              
              <p className="text-[#52525b] text-[18px] md:text-[24px] font-medium leading-[1.6] max-w-[700px] mb-12 tracking-[-0.01em]">
                Learn why professionals trust our solutions to complete their customer journeys.
              </p>
              
              <button className="bg-[#111] text-white px-10 py-4 rounded-full font-semibold text-[17px] hover:bg-[#27272a] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg mb-8">
                Read Success Stories
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[1px]"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2B3220] text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <img src="/logo.png" alt="Stenvo" className="h-10 w-auto mx-auto mb-4 brightness-[10]" />
          <p className="text-gray-400 text-sm mb-4">Turn your custom ideas into premium merchandise with zero upfront costs.</p>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Stenvo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
