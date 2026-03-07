import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, PenTool, CheckCircle, Truck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Printora</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">How it Works</Link>
            <Link href="#products" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Products</Link>
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">About Us</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Start Designing</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-primary border border-green-200 text-sm font-medium mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Now live at Arba Minch University
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
              Create Custom Merch. <br className="hidden md:block" />
              <span className="text-primary">Without the Hassle.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Design your custom t-shirts, hoodies, and mugs. Approve physical mockups before full production. Delivered right to your dorm.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/editor" passHref legacyBehavior>
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-green-500/20 w-full sm:w-auto">
                  <PenTool className="mr-2 h-5 w-5" /> Start Designing Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full w-full sm:w-auto">
                View product catalog
              </Button>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">How Printora Works</h2>
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">The Printora Promise</h2>
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
            <span className="text-2xl font-bold tracking-tight">Printora</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The first print-on-demand marketplace connecting students with local verified print shops.
          </p>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Printora Business. All rights reserved. <br /> Currently serving Arba Minch University.
          </div>
        </div>
      </footer>
    </div>
  );
}
