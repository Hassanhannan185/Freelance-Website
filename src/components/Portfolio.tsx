import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Filter } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'websites', 'marketing', 'content'];

  const projects = [
    { title: 'Modern Real Estate', category: 'websites', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' },
    { title: 'SaaS Dashboard', category: 'websites', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { title: 'Social Campaign', category: 'marketing', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' },
    { title: 'Brand Identity', category: 'marketing', image: 'https://images.unsplash.com/photo-1635339001026-61973547949b?auto=format&fit=crop&q=80&w=800' },
    { title: 'Cinematic Reel', category: 'content', image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800' },
    { title: 'Tech Podcast', category: 'content', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">
              Visualizing <span className="text-gradient">Impact</span>
            </h3>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                  ? 'bg-linear-to-r from-brand-purple to-brand-blue text-white shadow-lg shadow-brand-purple/20' 
                  : 'glass border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden glass p-2 cursor-pointer border-white/5"
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-2 block">
                          {project.category}
                        </span>
                        <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                      </div>
                      <div className="w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center -translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
