import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, PenTool, CheckCircle, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <div className="w-full flex justify-center sticky top-4 lg:top-6 z-50 px-4 lg:px-6">
        <header className="w-full max-w-7xl bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-200/50 rounded-[2rem] h-[76px] lg:h-[84px] flex items-center px-6 lg:px-10 relative">
          
          <div className="flex-1 flex items-center">
            {/* Logo */}
            <img 
              src="/logo.png" 
              alt="Stenvo Logo" 
              className="h-[44px] md:h-[52px] w-auto cursor-pointer object-contain relative z-10 -ml-1 transition-transform hover:scale-105"
            />
          </div>
            
          {/* Centered Nav */}
          <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <Link href="#catalog" className="text-[15px] font-medium text-[#2d3227] hover:text-[#525f48] transition-colors">Catalog</Link>
            <Link href="#pricing" className="text-[15px] font-medium text-[#2d3227] hover:text-[#525f48] transition-colors">Pricing</Link>
            <Link href="#how-it-works" className="flex items-center gap-1.5 text-[15px] font-medium text-[#2d3227] hover:text-[#525f48] transition-colors">
              How it works
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px]"><path d="M6 9l6 6 6-6"/></svg>
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
        <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
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
                  <style dangerouslySetInnerHTML={{__html: `
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

        {/* How it Works */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">How Stenvo Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">A seamless experience from design to delivery, built to guarantee you get exactly what you want.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: "1", title: "Design & Order", desc: "Use our editor to create or upload designs. Pay a 50% deposit.", icon: PenTool },
                { step: "2", title: "Approve Mockup", desc: "We print 1 sample and send you photos. You approve or request changes.", icon: CheckCircle },
                { step: "3", title: "Full Production", desc: "Once approved, the local supplier prints your full order.", icon: ShoppingBag },
                { step: "4", title: "Delivery & Final Pay", desc: "Delivered to your campus pickup point. Pay the remaining 50%.", icon: Truck },
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 relative z-10 text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">The Stenvo Promise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md bg-[#f0fdf4]">
                <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-full mb-4 text-primary shadow-sm"><CheckCircle className="h-6 w-6" /></div>
                  <h3 className="font-semibold text-lg mb-2">Physical Mockups First</h3>
                  <p className="text-gray-600 text-sm">Never guess how it looks. We send a photo of a real printed sample before doing the full batch.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-white">
                <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                  <div className="p-3 bg-green-50 rounded-full mb-4 text-primary shadow-sm"><PenTool className="h-6 w-6" /></div>
                  <h3 className="font-semibold text-lg mb-2">Free Expert Revisions</h3>
                  <p className="text-gray-600 text-sm">Not happy with the mockup? You get up to 2 free design changes before we go into production.</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-[#f0fdf4]">
                <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                  <div className="p-3 bg-white rounded-full mb-4 text-primary shadow-sm"><ShoppingBag className="h-6 w-6" /></div>
                  <h3 className="font-semibold text-lg mb-2">Premium Local Suppliers</h3>
                  <p className="text-gray-600 text-sm">We only partner with the best print shops in Arba Minch to guarantee quality every time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-90">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold tracking-tight">Stenvo</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The first print-on-demand marketplace connecting students with local verified print shops.
          </p>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Stenvo Business. All rights reserved. <br /> Currently serving Arba Minch University.
          </div>
        </div>
      </footer>
    </div>
  );
}
