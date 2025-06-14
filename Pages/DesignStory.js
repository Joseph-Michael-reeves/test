import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Box, Sun } from 'lucide-react';

export default function DesignStory() {
  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#FFFCF2', color: '#252422' }}>
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#252422' }}>The Design Story</h1>
          <p className="text-2xl font-serif italic" style={{ color: '#403D39' }}>
            Borne of soil, served with soul.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{ color: '#403D39' }}>
                <Feather style={{ color: '#EB5E28' }} /> Borne of Soil
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#252422' }}>
                The design philosophy of BREWHAUS begins with the earth. We chose a palette of raw, honest materials that speak to their origins. Weathered wood, hand-troweled concrete, and oxidized metals create a foundation that is both rugged and grounding. Every texture tells a story of time and nature, inviting a sense of calm and connection to the world outside.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1552529221-259c5d77457a?q=80&w=800&auto=format&fit=crop" alt="Earthy materials" className="rounded-lg shadow-xl" />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row-reverse items-center gap-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{ color: '#403D39' }}>
                <Box style={{ color: '#EB5E28' }} /> Served with Soul
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#252422' }}>
                Against the raw backdrop, we layered elements of warmth and refinement. Custom-crafted furniture, soft textiles, and brass accents introduce a human touch. The layout is designed to foster both quiet moments of solitude and lively community interaction. Each piece is placed with intention, contributing to a space that feels curated yet comfortable, sophisticated yet soulful.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1511920183353-3c7c4210a4da?q=80&w=800&auto=format&fit=crop" alt="Soulful furniture" className="rounded-lg shadow-xl" />
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3" style={{ color: '#403D39' }}>
                <Sun style={{ color: '#EB5E28' }} /> The Play of Light
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#252422' }}>
                Natural light was a key material in our design. Large windows flood the space during the day, creating dynamic shadows that dance across the textured surfaces. In the evening, a carefully considered lighting scheme creates pockets of warmth and intimacy. Pendant lights highlight key areas like the bar, while ambient lighting ensures the entire space feels welcoming and serene.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" alt="Light in the space" className="rounded-lg shadow-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}