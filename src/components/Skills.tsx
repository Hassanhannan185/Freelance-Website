import { motion } from 'motion/react';

export default function Skills() {
  const coreSkills = [
    { name: 'React / Next.js', level: 95 },
    { name: 'WordPress', level: 90 },
    { name: 'SEO Strategy', level: 85 },
    { name: 'Content Marketing', level: 92 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Video Production', level: 80 },
    { name: 'Google & Meta Ads', level: 85 },
    { name: 'Branding', level: 90 },
  ];

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-sm mb-4">Mastery</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Expert <span className="text-gradient">Skillset</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {coreSkills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-lg text-slate-200">{skill.name}</span>
                <span className="text-brand-blue font-mono font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.1 }}
                  className="h-full bg-linear-to-r from-brand-purple to-brand-blue relative"
                >
                   <div className="absolute top-0 right-0 w-2 h-full bg-white blur-[4px] opacity-50" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft Skills Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
           {['Communication', 'Creativity', 'Teamwork', 'Critical Thinking'].map((soft, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="glass px-6 py-8 rounded-2xl flex flex-col items-center justify-center text-center border-white/5"
             >
               <div className="w-2 h-2 rounded-full bg-brand-purple mb-4 shadow-[0_0_10px_#8B5CF6]" />
               <span className="font-bold text-slate-300">{soft}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
