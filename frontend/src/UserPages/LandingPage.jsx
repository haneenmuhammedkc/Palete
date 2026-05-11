import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bell,
  Clock3,
  Sparkles,
  Wine,
  ArrowRight,
  MenuSquare,
  ClipboardList,
  Lightbulb,
  Search,
  User
} from "lucide-react"

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* Universal Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-8">
          <div className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-white/90">
            Palate
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <a href="#" className="text-white hover:text-white transition-colors">Menu</a>
            <a href="#" className="hover:text-white transition-colors">Reservations</a>
            <a href="#" className="hover:text-white transition-colors">Our Story</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex p-2 hover:bg-white/5 rounded-full transition-colors">
            <Search size={18} strokeWidth={2} />
          </button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/5 rounded-full border border-white/10 relative"
          >
            <Bell size={18} strokeWidth={2} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full"></span>
          </motion.button>
          <button className="hidden md:flex p-2 hover:bg-white/5 rounded-full transition-colors ml-2">
            <User size={18} strokeWidth={2} />
          </button>
        </div>
      </motion.header>

      {/* Hero Section - Fluid height and responsive text */}
      <section className="relative h-[80vh] md:h-[90vh] w-full flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPcbvFryXUKh7M5G1oGNCfQibBlhqhgN-cVRl59FbDp3MDYo1_LXd-QMCHfkY_lKWgz92XZWkigiWIB6U-cBBJM6Bs892GOpuIG0P4kDYy0gSIFD_XmVz_hWNKCmlfF9y1JQVDR66M1vsqYBlBWSa-y3Yl8Hfwu5V-jgdUkfmw96jSCQ_AX7mwURglti1TfMDwQ7WXjHPXqfq88SavhUPv6L7bFFg2R4BCnlbhARqErXl_akrAuml8afiIterXLJpe3NLwha7ZJPY"
            alt="hero"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-transparent hidden md:block"></div>
        </div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-10 space-y-6 max-w-4xl"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase"
          >
            <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            Table #12
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight"
          >
            Refined <br />
            <span className="text-white/40 italic font-serif">Gastronomy</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-md lg:max-w-xl"
          >
            Experience culinary excellence curated specifically for the discerning palate, now serving in our main gallery and terrace.
          </motion.p>

          <motion.div variants={fadeInUp} className="hidden md:flex gap-4 pt-4">
             <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition-colors">
               Reserve Now
             </button>
             <button className="border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-colors">
               View Gallery
             </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-8 px-6 md:px-12 py-12">
          
          {/* Featured Dishes - Spans 8 columns on large screens */}
          <section className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end"
            >
              <div>
                <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-1">Our Selection</p>
                <h2 className="text-2xl md:text-3xl font-bold">Featured</h2>
              </div>
              <button className="text-xs font-bold text-white/40 hover:text-white transition-colors pb-1 border-b border-white/10">
                View All
              </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  title: "Glazed Atlantic Salmon", 
                  price: "$32", 
                  desc: "Miso glazed, served with seasonal charred greens and a signature citrus reduction.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA30KHb7WvR4GDBOUY8xQjGrSmuIoMxqVWqdJ7Q-UOPM-uK_e_77deTqyrxl7ppp-vRlipXt4_AsOr6XSJOizvDcOoJ6usAOy00z2w-SgrbZj7N7Tf9cMNB31wNT8fGzOqb0lVGYsJnnM9NEkkSDAoGQK2zgpHeAyOopU-vKAzKTjJjb19zwvcSRajw3jxj7HXSJbp-rUshIohvBRfzonJFTC453EuY-BdC3vSX_eB2IGEJi4L31YfeVUwMLjVZghquvgAtGssoDVY"
                },
                { 
                  title: "Truffle Delight", 
                  price: "$45", 
                  desc: "Buffalo mozzarella, fresh black truffle shavings, and a light herb-infused drizzle.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaMEbxUfrG3-PievUEuKGv7AHQux7eIPtWL_V5lMNggo-7B9uQS1GZmpO1OEbwhYEFKYQ2eqsMDQLEFEZFunJSadjPjRTt35lpG9gPGTpscVmftnz8xBNQy83D8hXl5zuFbe2oWTbvdgmDnaKb0pPnx-eZ3u5I-efmXhBtPoFWqrPFW2aRjpOWCUN8M3vT0LGd0jeQksEjJ649IrB_kEWhzbYj_lgS2CbEt4D8CXVq48TZ0QkhLNDuaP6TqB-tLahEIgB4khrrVz0"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-[32px] overflow-hidden bg-[#121212] border border-white/5 group"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold border border-white/10">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="font-bold text-xl tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                      Add to order <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Sidebar Area - Spans 4 columns on large screens */}
          <aside className="space-y-6">
             {/* Kitchen Status */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-[40px] p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase mb-1">Live Update</p>
                  <h3 className="text-2xl font-bold">Kitchen Capacity</h3>
                </div>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="bg-white/10 p-4 rounded-full">
                  <Clock3 size={24} />
                </motion.div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-4xl font-black">~15 <span className="text-sm text-gray-500 uppercase">min</span></span>
                  <span className="text-xs text-green-500 font-bold uppercase px-2 py-1 bg-green-500/10 rounded">Optimal</span>
                </div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "35%" }} className="h-full bg-white"></motion.div>
                </div>
              </div>
            </motion.div>

            {/* Specials Grid - Desktop becomes a stack */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="bg-[#121212] border border-white/5 rounded-[32px] p-6 h-48 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer">
                <div className="bg-green-500/10 w-fit p-3 rounded-2xl text-green-500">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Chef's Choice</h4>
                  <p className="text-xs text-gray-500">Dry-Aged Wagyu Ribeye</p>
                </div>
              </div>
              
              <div className="bg-[#121212] border border-white/5 rounded-[32px] p-6 h-48 flex flex-col justify-between hover:bg-white/5 transition-colors cursor-pointer">
                <div className="bg-blue-500/10 w-fit p-3 rounded-2xl text-blue-500">
                  <Wine size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Sommelier</h4>
                  <p className="text-xs text-gray-500">Bordeaux Vintage 2015</p>
                </div>
              </div>
            </div>

            {/* Mobile-style CTA for all screens */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black font-black py-6 rounded-full flex justify-center items-center gap-3 shadow-2xl shadow-white/5"
            >
              <span className="uppercase tracking-widest text-xs">Start Digital Order</span>
              <ArrowRight size={18} />
            </motion.button>
          </aside>
        </div>
      </div>

      {/* Footer / Mobile Nav */}
      <footer className="mt-20 border-t border-white/5 bg-[#0a0a0a] pb-32 md:pb-12 pt-12 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/40">
            Palate &copy; 2024 Culinary Group
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {/* Mobile-Only Bottom Navigation - Hidden on md and up */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-6 left-6 right-6 h-20 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[35px] flex justify-around items-center z-50 px-6 shadow-2xl"
      >
        <NavButton icon={<MenuSquare size={22} />} label="Menu" active />
        <NavButton icon={<ClipboardList size={22} />} label="Orders" />
        <NavButton icon={<Lightbulb size={22} />} label="Help" />
      </motion.nav>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
        
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        body {
          background-color: #000;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  )
}

const NavButton = ({ icon, label, active = false }) => (
  <motion.button 
    whileTap={{ scale: 0.9 }}
    className={`flex flex-col items-center gap-1 transition-all duration-300 ${
      active ? 'text-white' : 'text-gray-500'
    }`}
  >
    <div className={`${active ? 'scale-110' : 'scale-100'} transition-transform`}>
      {icon}
    </div>
    <span className="text-[8px] font-black uppercase tracking-widest">
      {label}
    </span>
    {active && (
      <motion.div layoutId="active-nav-dot" className="w-1 h-1 bg-white rounded-full mt-0.5" />
    )}
  </motion.button>
)

export default LandingPage