import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2, Shield, Calendar, Zap, Facebook, Instagram, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter leading-none">VOLT</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Next-Gen Concrete Coatings</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold uppercase tracking-wider hover:text-volt-lime transition-colors">
                {item}
              </a>
            ))}
            <button className="border-2 border-volt-black px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-volt-black hover:text-white transition-all">
              Request a Free Quote
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-black/5 p-4 space-y-4"
        >
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm font-bold uppercase tracking-wider">
              {item}
            </a>
          ))}
          <button className="w-full border-2 border-volt-black px-6 py-3 text-sm font-bold uppercase tracking-wider">
            Request a Free Quote
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-20 min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full md:w-[40%] bg-volt-black text-white p-8 md:p-16 flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl mb-8 leading-none">
            Minnesota's<br />
            <span className="text-white">Epoxy Flooring</span><br />
            Pros!
          </h1>

          <form className="space-y-6 max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 opacity-60">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-volt-lime outline-none transition-all" />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 opacity-60">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-volt-lime outline-none transition-all" />
            </div>
            <button className="w-full bg-volt-lime text-volt-black py-4 font-black uppercase tracking-widest hover:scale-[1.02] transition-transform">
              Request a Free Quote
            </button>
          </form>

          <div className="mt-12">
            <div className="flex space-x-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-volt-lime text-volt-lime" />)}
            </div>
            <p className="text-sm font-bold uppercase tracking-widest">5-Star Reputation</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-[60%] relative min-h-[400px] md:min-h-screen">
        <img 
          src="https://picsum.photos/seed/volt-car/1200/800" 
          alt="Luxury car with custom flooring" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-volt-black/80 to-transparent md:bg-none" />
        
        <div className="absolute bottom-12 left-8 md:left-16 right-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-8xl text-white leading-none">
              Prepare<br />
              To Be Floored
            </h2>
            <div className="h-2 w-32 bg-volt-lime mt-4" />
          </motion.div>
        </div>

        {/* Floating Logo Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
           <div className="bg-volt-lime p-4 rotate-12 shadow-2xl">
              <span className="text-volt-black font-black text-4xl tracking-tighter block leading-none">VO</span>
              <span className="text-volt-black font-black text-4xl tracking-tighter block leading-none">LT</span>
           </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-volt-gray py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
             <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-volt-black text-volt-black" />)}
            </div>
            <p className="text-sm font-bold">4.5/5 | 250 Reviews</p>
            <div className="mt-8 flex items-center space-x-4 opacity-40">
               <Shield size={40} />
               <div className="text-[10px] font-bold uppercase leading-tight">
                 A+ Rating<br />Accredited Business
               </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <span className="text-6xl font-serif opacity-20 block mb-4">"</span>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              Great experience with Blake and Epoxy It Minnesota. 
              <span className="bg-volt-lime px-2 py-1">Prompt, professional and excellent work</span> installing a new epoxy floor in our garage. From preparation to final clean up, the results were well done.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-black uppercase tracking-widest text-sm">Don P. | New Prague, MN</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-4 border border-volt-black/10 hover:bg-volt-black hover:text-white transition-colors">
                  <ArrowRight className="rotate-180" size={20} />
                </button>
                <button className="p-4 border border-volt-black/10 hover:bg-volt-black hover:text-white transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Garage Floor Coatings",
      desc: "Epoxy your garage from the floor up.",
      img: "https://picsum.photos/seed/garage/600/400"
    },
    {
      title: "Commercial Floor Coatings",
      desc: "Concrete coatings formulated for your space.",
      img: "https://picsum.photos/seed/commercial/600/400"
    },
    {
      title: "Patio Floor Coatings",
      desc: "Concrete patio & pool coatings that wow.",
      img: "https://picsum.photos/seed/patio/600/400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-16 border-b-2 border-volt-black pb-4">
          <h2 className="text-2xl tracking-widest">Services</h2>
        </div>

        <div className="space-y-12">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row items-center gap-8 border-b border-black/5 pb-12 last:border-0"
            >
              <div className="w-full md:w-1/3 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-2/3 flex justify-between items-center">
                <div>
                  <h3 className="text-3xl md:text-5xl mb-2">{service.title}</h3>
                  <p className="text-lg opacity-60">{service.desc}</p>
                </div>
                <button className="p-6 border border-volt-black/10 group-hover:bg-volt-lime group-hover:border-volt-lime transition-all">
                  <ArrowRight size={24} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tradition = () => {
  return (
    <section className="bg-volt-black text-white py-32 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span className="text-[40vw] font-black leading-none">VOLT</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="bg-white text-volt-black p-8 md:p-16 relative z-20">
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
                3 Generations<br />
                Of Family<br />
                Tradition.
                <div className="h-1 w-24 bg-volt-lime mt-4" />
              </h2>
              <p className="text-lg leading-relaxed opacity-80 mb-8">
                Concrete has been an art form in the Dungey family for over 40 years. 3rd generation concrete specialist and Epoxy It® founder, Blake Dungey, has watched his father and grandfather build their concrete business into a local powerhouse. Using the same values and principles, Blake and his wife, Meghan, tenaciously continue to expand the family's legacy into concrete coatings.
              </p>
              <div className="flex items-center space-x-4 border border-black/10 p-4 inline-flex">
                <div>
                  <p className="font-black text-xs uppercase tracking-widest">Blake Dungey</p>
                  <p className="text-[10px] uppercase opacity-60">Founder</p>
                </div>
                <div className="h-8 w-[1px] bg-black/10" />
                <span className="font-serif italic text-xl opacity-60">Blake Dungey</span>
              </div>
            </div>
            
            {/* Overlapping Image */}
            <div className="absolute -top-12 -right-12 w-64 h-80 hidden lg:block border-8 border-volt-black z-10">
               <img 
                src="https://picsum.photos/seed/family/400/500" 
                alt="Family" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
               />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src="https://picsum.photos/seed/work/800/600" 
                alt="Working on floor" 
                className="w-full h-full object-cover grayscale brightness-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-volt-lime flex items-center justify-center text-volt-black hover:scale-110 transition-transform">
                  <Zap size={32} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Paper Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-volt-gray torn-paper-top" />
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      id: "01",
      title: "Inspection",
      desc: "Our team of experts will come to your home and do a thorough inspection in order to get the most accurate estimate and timeline for your project.",
      icon: <Star size={32} />
    },
    {
      id: "02",
      title: "Proposal",
      desc: "We'll put together a proposal for what we'll do, why we'll do it, and when it will be done. Once you sign the proposal we can move forward.",
      icon: <CheckCircle2 size={32} />
    },
    {
      id: "03",
      title: "Schedule",
      desc: "We'll get started on your project as soon as possible, especially if you are facing critical floor repairs.",
      icon: <Calendar size={32} />
    },
    {
      id: "04",
      title: "Installation",
      desc: "Our certified technicians will install your high-performance coating with precision and care, ensuring a flawless finish.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <section className="bg-volt-gray py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-6xl">Our Process</h2>
          <div className="flex space-x-2">
            <button className="p-4 border border-volt-black/10 hover:bg-volt-black hover:text-white transition-colors">
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button className="p-4 border border-volt-black/10 hover:bg-volt-black hover:text-white transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 group hover:bg-volt-lime transition-all duration-500"
            >
              <div className="mb-8 flex justify-between items-start">
                <span className="text-xs font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">Step {step.id}</span>
                <div className="opacity-20 group-hover:opacity-100 transition-opacity">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-volt-black">{step.title}</h3>
              <p className="text-sm leading-relaxed opacity-60 group-hover:opacity-100">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="bg-volt-lime py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl leading-none mb-2">Get Started Today!</h2>
          <p className="text-sm font-bold uppercase tracking-widest opacity-60">Request a free quote.</p>
        </div>
        <button className="bg-volt-black text-white px-12 py-6 font-black uppercase tracking-widest hover:scale-105 transition-transform">
          Request a Free Quote
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-volt-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-volt-lime p-4 inline-block mb-6">
               <span className="text-volt-black font-black text-2xl tracking-tighter block leading-none">VO</span>
               <span className="text-volt-black font-black text-2xl tracking-tighter block leading-none">LT</span>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest opacity-60">
              Next-Gen Performance Coatings
            </p>
          </div>

          <div>
            <h4 className="text-volt-lime text-xs font-black uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4 text-xl">
              <li><a href="#" className="hover:text-volt-lime transition-colors">Garage Floor Coatings</a></li>
              <li><a href="#" className="hover:text-volt-lime transition-colors">Commercial Floor Coatings</a></li>
              <li><a href="#" className="hover:text-volt-lime transition-colors">Patio Floor Coatings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-volt-lime text-xs font-black uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4 text-xl">
              <li><a href="#" className="hover:text-volt-lime transition-colors">About</a></li>
              <li><a href="#" className="hover:text-volt-lime transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-volt-lime transition-colors">News</a></li>
              <li><a href="#" className="hover:text-volt-lime transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-volt-lime text-xs font-black uppercase tracking-widest mb-8">Connect</h4>
            <div className="flex space-x-6 mb-12">
              <a href="#" className="hover:text-volt-lime transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-volt-lime transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-volt-lime transition-colors"><Youtube /></a>
            </div>
            <button className="w-full bg-volt-lime text-volt-black py-4 font-black uppercase tracking-widest hover:bg-white transition-colors">
              Request Quote
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">© VOLT 2026 | All Rights Reserved</p>
          <button className="text-[10px] uppercase font-bold tracking-widest opacity-40 hover:opacity-100 flex items-center gap-2" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            To Top <ArrowRight className="-rotate-90" size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonial />
      <Services />
      <Tradition />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
