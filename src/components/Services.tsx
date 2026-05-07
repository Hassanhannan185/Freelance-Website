import { motion } from 'motion/react';
import { 
  Globe, 
  Layout, 
  Share2, 
  Video, 
  Search, 
  Layers, 
  BarChart3, 
  Palette, 
  Smartphone,
  Facebook
} from 'lucide-react';

export default function Services() {
  const services = [
    { 
      title: 'Website Development', 
      desc: 'Modern, fast, and responsive websites built with React and Next.js.',
      icon: <Globe className="text-brand-blue" />,
      color: 'blue'
    },
    { 
      title: 'WordPress Development', 
      desc: 'Customizable and scalable WordPress solutions for your business.',
      icon: <Layers className="text-brand-purple" />,
      color: 'purple'
    },
    { 
      title: 'Social Media Marketing', 
      desc: 'Data-driven marketing strategies to grow your social presence.',
      icon: <Share2 className="text-brand-pink" />,
      color: 'pink'
    },
    { 
      title: 'Content Creation', 
      desc: 'Engaging visual and written content that tells your brand story.',
      icon: <Video className="text-brand-orange" />,
      color: 'orange'
    },
    { 
      title: 'SEO Optimization', 
      desc: 'Improving your search rankings and driving organic traffic.',
      icon: <Search className="text-emerald-400" />,
      color: 'emerald'
    },
    { 
      title: 'UI/UX Design', 
      desc: 'Intuitive and beautiful user interfaces designed for conversion.',
      icon: <Layout className="text-cyan-400" />,
      color: 'cyan'
    },
    { 
      title: 'Meta & Google Ads', 
      desc: 'High-ROI advertising campaigns across top platforms.',
      icon: <Facebook className="text-blue-500" />,
      color: 'blue'
    },
    { 
      title: 'Branding Strategy', 
      desc: 'Building a consistent and powerful identity for your brand.',
      icon: <BarChart3 className="text-indigo-400" />,
      color: 'indigo'
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-950">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            My Expertize
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Services Offered <span className="text-gradient">Globally</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            I provide a comprehensive suite of digital services designed to help your brand thrive in the digital age.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-3xl group relative overflow-hidden flex flex-col items-center text-center cursor-pointer border-white/5"
            >
              <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-2xl glass-dark flex items-center justify-center mb-6 relative z-10 shadow-xl group-hover:shadow-[0_0_20px_-5px_currentColor] transition-all">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10">{service.desc}</p>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-auto px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all flex items-center gap-2 group-hover:border-brand-purple/50 group-hover:text-white"
              >
                Learn More <Layers size={14} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
