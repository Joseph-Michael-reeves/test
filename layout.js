import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: "Home", page: "Portfolio" },
    { title: "The Space", page: "TheSpace" },
    { title: "Design Story", page: "DesignStory" },
    { title: "Site Analysis", page: "SiteAnalysis" },
    { title: "Contact", page: "Contact" },
  ];
  
  const pageTitle = navItems.find(item => createPageUrl(item.page) === location.pathname)?.title || "Portfolio";

  return (
    <div style={{ backgroundColor: '#FFFCF2', color: '#252422' }}>
      <style>{`
        body { font-family: 'Inter', sans-serif; }
        .active-link { color: #EB5E28 !important; }
      `}</style>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link to={createPageUrl("Portfolio")} className="text-2xl font-bold" style={{ color: '#403D39' }}>
              BREWHAUS
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`font-medium transition-colors hover:text-orange-500 ${pageTitle === item.title ? 'active-link' : 'text-stone-800'}`}
                  style={{ color: pageTitle === item.title ? '#EB5E28' : '#252422' }}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Nav Trigger */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden z-10"
              style={{ color: '#252422' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/90 backdrop-blur-xl md:hidden"
          >
            <motion.nav 
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {navItems.map(item => (
                <motion.div key={item.page} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                  <Link
                    to={createPageUrl(item.page)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-semibold"
                    style={{ color: pageTitle === item.title ? '#EB5E28' : '#252422' }}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>
    </div>
  );
}