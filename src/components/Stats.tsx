import { motion } from 'motion/react';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Projects Completed', value: '250', suffix: '+', icon: <Briefcase /> },
    { label: 'Happy Clients', value: '180', suffix: '+', icon: <Users /> },
    { label: 'Campaign Reach', value: '50', suffix: 'M+', icon: <TrendingUp /> },
    { label: 'Years Experience', value: '5', suffix: '+', icon: <Award /> },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-purple/5 skew-y-3 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl text-center border-white/5 relative group"
            >
              <div className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center mx-auto mb-6 text-brand-blue group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
