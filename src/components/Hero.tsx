import { motion } from 'motion/react';
import { Sparkles, Code, Megaphone, Palette, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[15%] glass p-4 rounded-2xl shadow-2xl"
        >
          <Code className="text-brand-blue" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[60%] left-[10%] glass p-4 rounded-2xl shadow-2xl"
        >
          <Megaphone className="text-brand-purple" />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[30%] right-[15%] glass p-4 rounded-2xl shadow-2xl"
        >
          <Palette className="text-brand-pink" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] right-[10%] glass p-4 rounded-2xl shadow-2xl"
        >
          <Play className="text-brand-orange" fill="currentColor" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/20 mb-8 text-sm font-medium text-brand-blue animate-pulse">
            <Sparkles size={16} />
            <span>Available for New Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 flex flex-col items-center">
            <span className="text-white">MUHAMMAD</span>
            <span className="text-gradient">HASSAN</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Crafting Digital Excellence through <span className="text-white font-semibold">Content Creation</span>, <span className="text-white font-semibold">Web Development</span>, and <span className="text-white font-semibold">Marketing Strategy</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-linear-to-r from-brand-purple to-brand-blue text-white font-bold text-lg shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)] hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.8)] transition-all flex items-center gap-3"
            >
              Hire Me <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Portfolio
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom - Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll Down</span>
        <div className="w-px h-12 bg-linear-to-b from-brand-purple to-transparent" />
      </motion.div>
    </section>
  );
}
