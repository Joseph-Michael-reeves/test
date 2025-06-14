import React, { useState, useEffect } from "react";
import { Project } from "../Entities/Project";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    loadFeatures();
  }, []);

  const loadFeatures = async () => {
    const data = await Project.filter({ featured: true }, "-created_date", 9);
    setFeatures(data);
  };

  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#FFFCF2', color: '#252422' }}>
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 252, 242, 0.7)' }}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            style={{ color: '#252422' }}
          >
            BREWHAUS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-serif italic mb-12"
            style={{ color: '#403D39' }}
          >
            Borne of soil, served with soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to={createPageUrl("TheSpace")}
                className="px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center group"
                style={{ backgroundColor: '#EB5E28', color: '#FFFCF2' }}
              >
                Explore The Space
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to={createPageUrl("DesignStory")}
                className="border px-8 py-4 rounded-lg font-semibold hover:opacity-80 transition-opacity block"
                style={{ borderColor: '#CCC5B9', color: '#252422', backgroundColor: 'transparent' }}
              >
                The Design Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#CCC5B9' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p 
            className="text-xl md:text-2xl leading-relaxed" 
            style={{ color: '#403D39' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            An interior design portfolio celebrating the fusion of raw, earthy materials with refined, soulful details. BREWHAUS is more than a coffee shop; it's a sensory experience crafted with intention.
          </motion.p>
        </div>
      </section>

      <motion.section 
        className="py-20" 
        style={{ backgroundColor: '#FFFCF2' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center" 
            style={{ color: '#252422' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Featured Elements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="group relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img src={feature.image_url} alt={feature.title} className="w-full h-80 object-cover" />
                <div 
                  className="absolute bottom-0 left-0 right-0 p-4 text-white" 
                  style={{ background: 'linear-gradient(to top, rgba(37, 36, 34, 0.8), transparent)' }}
                >
                  <h3 className="text-xl font-bold" style={{ color: '#FFFCF2' }}>{feature.title}</h3>
                  <p className="text-sm" style={{ color: '#CCC5B9' }}>{feature.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}