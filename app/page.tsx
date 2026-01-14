"use client"

import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Portfolio from "@/components/sections/Portfolio"
import Experience from "@/components/sections/Experience"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import { useEffect } from "react"

export default function PortfolioApp() {

  useEffect(() => {
    // Smartsupp Chat Integration
    if (document.getElementById("smartsupp-init")) return

    const initScript = document.createElement("script")
    initScript.id = "smartsupp-init"
    initScript.type = "text/javascript"
    initScript.text = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = 'e89083428cb10611a0d4a823a56b601643ed3b3d';
      window.smartsupp || (function(d) {
        var s, c, o = smartsupp = function() { o._.push(arguments) }; o._ = [];
        s = d.getElementsByTagName('script')[0]; c = d.createElement('script');
        c.type = 'text/javascript'; c.charset = 'utf-8'; c.async = true;
        c.src = 'https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c, s);
      })(document);
    `
    document.head.appendChild(initScript)

    return () => {
      // cleanup handled by framework mainly
    }
  }, [])

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
