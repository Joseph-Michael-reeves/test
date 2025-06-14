import React, { useState, useEffect } from "react";
import { Project } from "@/entities/Project";
import { motion, AnimatePresence } from "framer-motion";

export default function TheSpace() {
  const [features, setFeatures] = useState([]);
  const [allFeatures, setAllFeatures] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadFeatures();
  }, []);
  
  useEffect(() => {
    if (filter === "all") {
      setFeatures(allFeatures);
    } else {
      setFeatures(allFeatures.filter(f => f.category === filter));
    }
  }, [filter, allFeatures]);

  const loadFeatures = async () => {
    const data = await Project.list("-created_date");
    setAllFeatures(data);
    setFeatures(data);
  };

  const categories = ["all", "Main Space", "The Bar", "Lighting", "Furniture", "Details", "Exterior"];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#FFFCF2', color: '#252422' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#252422' }}>The Space</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#403D39' }}>
            A visual journey through the design elements of BREWHAUS.
          </p>
        </motion.div>

        <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all mb-2`}
              style={{
                backgroundColor: filter === category ? '#EB5E28' : '#CCC5B9',
                color: filter === category ? '#FFFCF2' : '#252422'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          layout
        >
          <AnimatePresence>
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-w-1 aspect-h-1"
              >
                <img src={feature.image_url} alt={feature.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold" style={{ color: '#FFFCF2' }}>{feature.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {feature.materials?.map(material => (
                      <span key={material} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#CCC5B9', color: '#252422' }}>
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}