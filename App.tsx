/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, ShoppingBag, Instagram, Twitter, Facebook, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-coke-black text-white py-4 shadow-lg' : 'bg-transparent text-white py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="font-display text-3xl tracking-wider text-coke-red">COCA-COLA</a>
          <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest">
            <a href="#products" className="hover:text-coke-red transition-colors">Products</a>
            <a href="#story" className="hover:text-coke-red transition-colors">Our Story</a>
            <a href="#community" className="hover:text-coke-red transition-colors">Community</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 hover:text-coke-red transition-colors"><ShoppingBag size={20} /></button>
          <button className="bg-coke-red text-white px-6 py-2 rounded-full font-medium uppercase tracking-wider hover:bg-white hover:text-coke-red transition-colors text-sm">Shop Now</button>
        </div>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-coke-black text-white flex flex-col items-center py-8 gap-6 md:hidden"
          >
            <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display">Products</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display">Our Story</a>
            <a href="#community" onClick={() => setMobileMenuOpen(false)} className="text-xl font-display">Community</a>
            <button className="bg-coke-red text-white px-8 py-3 rounded-full font-display text-xl mt-4">Shop Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-coke-black flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000&auto=format&fit=crop" 
          alt="People enjoying Coke" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-display leading-[0.85] mb-6"
        >
          TASTE THE <br/><span className="text-coke-red">FEELING</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto"
        >
          Real magic happens when we come together. Open a bottle of happiness today.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="bg-coke-red text-white px-8 py-4 rounded-full font-display text-xl hover:bg-white hover:text-coke-red transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            Explore Flavors <ArrowRight size={24} />
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-4 rounded-full font-display text-xl hover:bg-white/10 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            <Play size={24} fill="currentColor" /> Watch Campaign
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    { name: "Coca-Cola Classic", desc: "The original, iconic taste.", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop", color: "bg-coke-red" },
    { name: "Coca-Cola Zero Sugar", desc: "Zero sugar, same great taste.", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=800&auto=format&fit=crop", color: "bg-black" },
    { name: "Diet Coke", desc: "Crisp, refreshing, no calories.", img: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?q=80&w=800&auto=format&fit=crop", color: "bg-gray-300" }
  ];

  return (
    <section id="products" className="py-24 bg-white text-coke-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display mb-4">CHOOSE YOUR <span className="text-coke-red">MAGIC</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find the perfect Coca-Cola for your moment. Whether you want the classic taste, zero sugar, or a crisp diet option.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden mb-6 bg-gray-100">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <button className="bg-white text-coke-black w-full py-4 rounded-full font-display text-xl hover:bg-coke-red hover:text-white transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              <h3 className="text-3xl font-display mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="py-24 bg-coke-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display mb-6">MORE THAN A <span className="text-coke-red">DRINK</span></h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Since 1886, Coca-Cola has been a catalyst for connection. From the first pour to the last drop, it's not just about the taste—it's about the moments we share.
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              We believe in the power of bringing people together. Across borders, cultures, and generations, a shared Coke is a universal symbol of happiness.
            </p>
            <button className="border-b-2 border-coke-red pb-1 font-display text-xl hover:text-coke-red transition-colors flex items-center gap-2">
              Read Our History <ArrowRight size={20} />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1000&auto=format&fit=crop" alt="Vintage Coke" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-coke-red/20 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Interactive = () => {
  const [activeFlavor, setActiveFlavor] = useState(0);
  const flavors = [
    { name: "Classic", color: "bg-coke-red" },
    { name: "Vanilla", color: "bg-yellow-500" },
    { name: "Cherry", color: "bg-purple-600" },
    { name: "Lime", color: "bg-green-500" }
  ];

  return (
    <section className="py-24 bg-gray-100 text-coke-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-display mb-6">FIND YOUR <span className="text-coke-red">FLAVOR</span></h2>
        <p className="text-lg text-gray-600 mb-12">What's your vibe today? Select a mood to find your perfect match.</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {flavors.map((flavor, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveFlavor(idx)}
              className={`px-8 py-4 rounded-full font-display text-xl transition-all duration-300 ${activeFlavor === idx ? `${flavor.color} text-white scale-110 shadow-xl` : 'bg-white text-coke-black hover:bg-gray-200'}`}
            >
              {flavor.name}
            </button>
          ))}
        </div>
        
        <motion.div 
          key={activeFlavor}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-12 rounded-3xl shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-4xl font-display mb-4">You got: Coca-Cola {flavors[activeFlavor].name}!</h3>
          <p className="text-gray-600 mb-8">The perfect companion for your current mood. Refreshing, bold, and exactly what you need.</p>
          <button className="bg-coke-black text-white px-8 py-4 rounded-full font-display text-xl hover:bg-coke-red transition-colors">
            Order Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Promo = () => {
  return (
    <section className="relative py-32 bg-coke-red text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 border border-white rounded-full text-sm font-bold tracking-widest uppercase mb-6"
        >
          Limited Edition Drop
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-display mb-6"
        >
          COCA-COLA <br/>STARLIGHT
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto"
        >
          Experience the taste of outer space. Available for a limited time only.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white text-coke-red px-10 py-5 rounded-full font-display text-2xl hover:bg-coke-black hover:text-white transition-colors shadow-2xl"
        >
          Get It Before It's Gone
        </motion.button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-coke-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display text-3xl text-coke-red mb-6">COCA-COLA</h3>
            <p className="text-gray-400 mb-6">Taste the feeling. Open happiness. Share the magic.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coke-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coke-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coke-red transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-xl mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-xl mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-xl mb-6">Stay Connected</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest drops and exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-white/10 px-4 py-3 rounded-l-lg w-full focus:outline-none focus:ring-1 focus:ring-coke-red" />
              <button className="bg-coke-red px-6 py-3 rounded-r-lg font-display hover:bg-white hover:text-coke-red transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} The Coca-Cola Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Do Not Sell My Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-coke-red selection:text-white">
      <Navbar />
      <Hero />
      <Products />
      <Story />
      <Interactive />
      <Promo />
      <Footer />
    </div>
  );
}
