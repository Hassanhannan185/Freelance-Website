/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-mesh min-h-screen text-slate-100 selection:bg-brand-purple/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-brand-purple via-brand-blue to-brand-pink z-100 origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Portfolio />
        <Skills />
        <Testimonials />
        
        {/* Why Choose Me - Visual layout without a separate file since it's short */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-sm mb-4">The Advantage</h2>
             <h3 className="text-4xl md:text-5xl font-extrabold mb-16">Why Choose <span className="text-gradient">Muhammad?</span></h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { title: 'Creative Mindset', desc: 'Thinking outside the box to deliver unique architectural solutions.' },
                 { title: 'Fast Delivery', desc: 'Optimized workflow ensuring quick turnarounds without losing quality.' },
                 { title: 'Modern Dev Tech', desc: 'Using the latest stack for scalable and high-performing websites.' },
                 { title: 'Market Logic', desc: 'Deep understanding of digital consumer behavior and algorithms.' },
                 { title: 'Global Standard', desc: 'High-end design aesthetics comparable to top global agencies.' },
                 { title: 'Results Driven', desc: 'Focusing on KPIs that actually drive business growth.' },
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   whileHover={{ y: -5 }}
                   className="glass p-8 rounded-3xl border-white/5 text-left group"
                 >
                   <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all">
                     <div className="w-2 h-2 rounded-full bg-current" />
                   </div>
                   <h4 className="text-xl font-bold mb-4 text-white">{item.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white z-40 border-white/10"
      >
        <div className="w-2 h-2 border-t-2 border-l-2 border-current rotate-45 -mb-1" />
      </motion.button>
    </div>
  );
}
