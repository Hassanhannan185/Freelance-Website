import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'CEO, TechFlow',
      content: 'Muhammad is an absolute professional. He transformed our brand identity and built a website that actually converts.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=1'
    },
    {
      name: 'Sarah Smith',
      role: 'Marketing Lead, GreenTree',
      content: 'The content strategy Muhammad developed for us saw a 300% increase in engagement within the first month.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=2'
    },
    {
      name: 'David Lee',
      role: 'Founder, StartupX',
      content: 'Fast, reliable, and highly creative. I couldn\'t recommend a better partner for web development and SEO.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?u=3'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-sm mb-4">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">What <span className="text-gradient">Clients</span> Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 relative group h-full flex flex-col"
            >
              <Quote className="absolute top-6 right-8 text-brand-purple/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-slate-400 italic mb-8 flex-grow leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-blue/30 p-0.5">
                   <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-brand-blue font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
