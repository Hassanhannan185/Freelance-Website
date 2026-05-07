import { motion } from 'motion/react';
import { User, Rocket, Target, Heart } from 'lucide-react';

export default function About() {
  const cards = [
    { icon: <Target className="text-brand-purple" />, title: 'Goal Oriented', desc: 'Helping brands grow with data-driven strategies.' },
    { icon: <Rocket className="text-brand-blue" />, title: 'Fast Delivery', desc: 'High-quality work delivered within your deadlines.' },
    { icon: <Heart className="text-brand-pink" />, title: 'Passionate', desc: 'Dedicated to every pixel and word I create.' },
    { icon: <User className="text-brand-orange" />, title: 'Client Focused', desc: 'Your vision is my top priority always.' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass relative z-10 p-2">
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden group">
                 {/* Abstract visual placeholder instead of a person photo */}
                 <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-purple)_0%,_transparent_70%)] opacity-20" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-blue)_0%,_transparent_70%)] opacity-20" />
                 </div>
                 
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center relative"
                 >
                    <div className="w-32 h-32 border border-brand-purple/20 rounded-full flex items-center justify-center">
                       <div className="w-16 h-16 bg-linear-to-tr from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-brand-purple/40">
                         M
                       </div>
                    </div>
                    {/* Orbiting dots */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-pink rounded-full blur-[2px]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-blue rounded-full blur-[2px]" />
                 </motion.div>

                 <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
                 
                 <div className="absolute bottom-8 left-8">
                   <h3 className="text-2xl font-bold text-white tracking-tight leading-none mb-1">MUHAMMAD HASSAN</h3>
                   <p className="text-brand-blue font-bold uppercase tracking-[0.2em] text-[10px]">Strategic Digital Expert</p>
                 </div>
              </div>
            </div>
            
            {/* Background elements for image */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-blue/20 blur-3xl rounded-full" />
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -right-6 top-1/4 z-20 glass-dark p-6 rounded-2xl shadow-2xl border-brand-purple/20"
            >
              <div className="text-3xl font-extrabold text-gradient">5+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Years of<br/>Experience</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-sm mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Experienced <span className="text-gradient">Digital Professional</span> for the Modern Era
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              I am Muhammad Hassan, a versatile digital professional based in Karachi, blending technology with creativity. As a passionate content creator and skilled developer, I help businesses transform their digital presence into high-converting experiences.
            </p>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              My approach combines the analytical mindset of a digital marketer with the creative flair of a content strategist, ensuring your brand doesn't just exist online—it dominates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-2xl border-white/5 hover:border-brand-purple/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl glass-dark flex items-center justify-center mb-4 shadow-lg">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
