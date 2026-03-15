/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Bolt, 
  Gauge, 
  Dumbbell, 
  Activity, 
  CheckCircle2, 
  Star, 
  Globe, 
  Video, 
  Mail, 
  Phone,
  Menu
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="border-b border-primary/20 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-50">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
      <div className="flex items-center gap-2 text-primary">
        <Bolt size={32} fill="currentColor" />
        <span className="text-xl font-black tracking-tighter uppercase italic text-white">
          GK <span className="text-primary">Performance</span>
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#programs" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Prógröm</a>
        <a href="#about" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Um mig</a>
        <a href="#testimonials" className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">Umsagnir</a>
        <button className="bg-primary text-bg-dark text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded hover:brightness-110 transition-all">
          Skrá mig
        </button>
      </div>

      <button className="md:hidden text-primary">
        <Menu size={24} />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ 
        backgroundImage: `linear-gradient(rgba(34, 33, 16, 0.7), rgba(34, 33, 16, 0.9)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")` 
      }}
    />
    
    <div className="section-container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl mb-6 text-white leading-none">
          GK <span className="text-primary">Performance</span>
        </h1>
        <p className="text-slate-200 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light">
          Hámarkaðu hraðann þinn, snerpu og styrk með markvissri þjálfun og skotheldu prógrammi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">Skrá mig</button>
          <a href="#programs" className="btn-outline">Prógröm</a>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      title: "Hraða- og sprettþjálfun",
      desc: "Hver sem íþróttin er, þá er hraða- og snerpuþjálfun hornsteinn þess að byggja upp góða íþróttamenn.",
      icon: <Activity className="text-primary" size={24} />,
      img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Kraftur",
      desc: "Markvisst lyftingaprógram tryggir að aukinn kraft og styrk. Ólympískar lyftingar og plyometrics.",
      icon: <Dumbbell className="text-primary" size={24} />,
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Mælingar",
      desc: "Til að tryggja að allt gangi eins og til er ætlast mælum við árangurinn með nýjustu tækni.",
      icon: <Bolt className="text-primary" size={24} />,
      img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="programs" className="section-container">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-1 w-12 bg-primary"></div>
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Mikil reynsla</span>
        </div>
        <h2 className="text-4xl md:text-6xl">Markviss þjálfun</h2>
        <p className="text-slate-400 max-w-2xl mt-4 text-lg">
          Margra ára reynsla af þjálfun íþróttafólks í hinum ýmsu íþróttagreinum. Hvort sem það eru alpagreinar, langhlaup eða boltaíþróttir.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
          >
            <div className="aspect-video overflow-hidden">
              <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                {f.icon}
                <h3 className="text-xl">{f.title}</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProgramDetail = () => (
  <section id="about" className="bg-bg-light text-bg-dark">
    <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-2xl -z-10"></div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop" 
            alt="Training session" 
            className="w-full aspect-square object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-2xl hidden md:block shadow-xl">
          <span className="text-bg-dark font-black text-3xl block leading-none italic uppercase">Skráðu<br />þig</span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-5xl md:text-7xl leading-none">TAKEOFF</h2>
        <h3 className="text-primary bg-bg-dark inline-block self-start px-4 py-1 text-xl">Hraða- og snerpuprógram</h3>
        <p className="text-lg leading-relaxed opacity-80">
          TAKEOFF er hannað til að gera þig að betri íþróttamanni. Við blöndum saman sprettþjálfun, lyftingum, hoppum og plyometrics í réttum skömmtum til að hámarka afkastagetu og gera þig hraðari, sterkari og að betri íþróttamanni.
        </p>
        <p className="text-lg leading-relaxed opacity-80">
          Við tökum hraða- og hoppmælingar í byrjun prógrammsins og svo aftur undir lok þess, til að sjá árangurinn.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            "Hraðamælingar",
            "Sprett- og hoppæfingar",
            "Hoppmælingar",
            "Lyftingaprógram"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="text-primary fill-bg-dark" size={24} />
              <span className="font-bold uppercase text-sm tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Þorsteinn Roy Jóhannsson",
      role: "Utanvegahlaupari",
      text: "Ég hef æft hjá Gumma í mörg ár og hans þjálfun á stóran þátt í mínum framförum sem íþróttamaður. Hún er markviss sökum gríðarlegar þekkingar hans á líkamanum.",
      img: "https://picsum.photos/seed/athlete1/100/100"
    },
    {
      name: "Hólmfríður Dóra",
      role: "Ólympíufari á skíðum",
      text: "The power protocols were game-changing. My vertical leap increased by 4 inches in just one off-season. Highly recommended for any serious athlete.",
      img: "https://picsum.photos/seed/athlete2/100/100"
    },
    {
      name: "David L.",
      role: "MLB Pitcher",
      text: "We don't just train hard; we train smart. The injury resilience program kept me healthy through a grueling 162-game season. Best in the business.",
      img: "https://picsum.photos/seed/athlete3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="section-container">
      <h2 className="text-center text-4xl md:text-5xl mb-16">Umsagnir</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="p-8 bg-white/5 border-l-4 border-primary rounded-r-2xl flex flex-col gap-6">
            <div className="flex gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="italic text-slate-300 leading-relaxed">"{r.text}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-xs text-primary font-bold uppercase">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="px-4 pb-24">
    <div className="max-w-7xl mx-auto bg-primary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-bg-dark">
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl mb-2">Viltu vita meira?</h2>
        <p className="text-xl font-bold opacity-80 uppercase tracking-widest">Takmörkuð pláss í boði</p>
      </div>
      <button className="bg-bg-dark text-primary font-black text-xl uppercase tracking-[0.2em] px-10 py-6 rounded-2xl hover:scale-105 transition-transform shadow-2xl">
        Hafðu samband
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/5 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-12 mb-20">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 text-primary mb-6">
          <Bolt size={32} fill="currentColor" />
          <span className="text-2xl font-black tracking-tighter uppercase italic text-white">
            GK <span className="text-primary">Performance</span>
          </span>
        </div>
        <p className="text-slate-400 max-w-sm mb-8">
          Hraða- og styrktarþjálfun fyrir íþróttafólk sem vill ná hámarksárangri.
        </p>
        <div className="flex gap-4">
          {[Globe, Video, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-bg-dark transition-all">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-primary mb-8 tracking-widest">Flýtileiðir</h4>
        <ul className="flex flex-col gap-4 text-slate-400 font-bold uppercase text-sm">
          <li><a href="#" className="hover:text-primary transition-colors">Heim</a></li>
          <li><a href="#programs" className="hover:text-primary transition-colors">Prógröm</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors">Um mig</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Persónuvernd</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-primary mb-8 tracking-widest">Hafðu samband</h4>
        <ul className="flex flex-col gap-4 text-slate-400 font-bold text-sm">
          <li className="flex items-center gap-3">
            <Phone size={16} className="text-primary" />
            869-0177
          </li>
          <li className="flex items-center gap-3">
            <Mail size={16} className="text-primary" />
            gvudmundur@gmail.com
          </li>
        </ul>
      </div>
    </div>
    
    <div className="text-center text-slate-600 text-xs uppercase tracking-widest">
      © 2024 Athletic Performance Elite Training. All Rights Reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProgramDetail />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
