import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Create <span className="text-gradient">Something Great</span></h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? I'm just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-3xl border-white/5 space-y-8">
              <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                  <p className="text-lg font-bold text-white hover:text-brand-purple transition-colors">+92 327 8236231</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email</p>
                  <p className="text-lg font-bold text-white hover:text-brand-blue transition-colors">hassan.hannan96@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Location</p>
                  <p className="text-lg font-bold text-white">Karachi, Pakistan (Serving Globally)</p>
                </div>
              </div>
            </div>

            {/* Quick Links / Socials */}
            <div className="glass p-8 rounded-3xl border-white/5">
              <h4 className="font-bold text-white mb-6">Connect With Me</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Instagram />, color: 'hover:bg-pink-600', link: '#' },
                  { icon: <Twitter />, color: 'hover:bg-sky-500', link: '#' },
                  { icon: <Linkedin />, color: 'hover:bg-blue-700', link: '#' },
                  { icon: <Facebook />, color: 'hover:bg-blue-600', link: '#' },
                  { icon: <MessageCircle />, color: 'hover:bg-green-500', link: 'https://wa.me/923278236231', label: 'WhatsApp' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 glass shadow-lg flex items-center justify-center rounded-xl transition-all ${social.color} hover:text-white text-slate-400`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <a 
              href="https://wa.me/923278236231" 
              className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-green-600 text-white font-bold shadow-xl shadow-green-600/20 hover:bg-green-500 transition-all transform hover:-translate-y-1"
            >
              <MessageCircle size={24} /> Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-hidden focus:border-brand-purple transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-hidden focus:border-brand-purple transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Consultation"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-hidden focus:border-brand-purple transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-hidden focus:border-brand-purple transition-colors resize-none"
                />
              </div>

              <button className="w-full py-4 rounded-2xl bg-linear-to-r from-brand-purple to-brand-blue text-white font-bold text-lg shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
