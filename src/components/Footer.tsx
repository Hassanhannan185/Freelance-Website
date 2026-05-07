import { Mail, Phone, Instagram, Twitter, Linkedin, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative border-t border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-brand-purple to-brand-blue flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)]">
                M
              </div>
              <span className="font-bold text-xl uppercase tracking-tighter">
                MUHAMMAD <span className="text-brand-blue">HASSAN</span>
              </span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Excellence in content creation, web development, and digital marketing. Helping brands worldwide grow through innovative digital solutions.
            </p>
            <div className="flex gap-4">
               <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-brand-purple transition-colors"><Instagram size={18} /></a>
               <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-brand-blue transition-colors"><Twitter size={18} /></a>
               <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-blue-500 transition-colors"><Linkedin size={18} /></a>
               <a href="#" className="p-2 glass rounded-lg text-slate-400 hover:text-blue-600 transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#services" className="hover:text-brand-purple transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-brand-purple transition-colors">Marketing Strategy</a></li>
              <li><a href="#services" className="hover:text-brand-purple transition-colors">Content Creation</a></li>
              <li><a href="#services" className="hover:text-brand-purple transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-blue"/> hassan.hannan96@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-brand-purple"/> +92 327 8236231
              </li>
              <li><span className="text-brand-pink">Location:</span> Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            &copy; {currentYear} Muhammad Hassan. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Made with <Heart size={10} className="text-brand-pink fill-brand-pink" /> to help brands grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
