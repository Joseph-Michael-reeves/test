import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Thermometer, Building, Users, TrendingUp, ChevronDown } from 'lucide-react';

export default function SiteAnalysis() {
  const climateChartRef = useRef(null);
  const landUseChartRef = useRef(null);
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = () => {
      if (window.Chart) {
        // Destroy existing charts if they exist
        if (window.climateChartInstance) window.climateChartInstance.destroy();
        if (window.landUseChartInstance) window.landUseChartInstance.destroy();

        createClimateChart();
        createLandUseChart();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const createClimateChart = () => {
    const ctx = climateChartRef.current?.getContext('2d');
    if (!ctx) return;
    window.climateChartInstance = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'High Temp (°C)', data: [13, 15, 18, 23, 28, 31, 32, 32, 31, 27, 21, 16],
          borderColor: '#EB5E28', backgroundColor: 'rgba(235, 94, 40, 0.1)', tension: 0.3, fill: true
        }, {
          label: 'Low Temp (°C)', data: [6, 7, 9, 13, 17, 19, 22, 22, 20, 17, 12, 8],
          borderColor: '#403D39', backgroundColor: 'rgba(64, 61, 57, 0.1)', tension: 0.3, fill: true
        }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }
    });
  };

  const createLandUseChart = () => {
    const ctx = landUseChartRef.current?.getContext('2d');
    if (!ctx) return;
    window.landUseChartInstance = new window.Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Commercial', 'Residential', 'Mixed-Use', 'Green Space'],
        datasets: [{ data: [45, 25, 20, 10], backgroundColor: ['#EB5E28', '#403D39', '#CCC5B9', '#8FBC8F'] }]
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } } }
    });
  };
  
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (index) => setActiveAccordion(activeAccordion === index ? null : index);

  const recommendations = [
    { title: "Optimize Natural Light", content: "Large, north-facing windows to capture consistent, soft light. Use skylights to bring light into deeper parts of the space. This reduces energy consumption and enhances the natural material palette." },
    { title: "Enhance Acoustic Comfort", content: "Incorporate sound-absorbing materials like wood panels, heavy drapery, and upholstered furniture. Create distinct acoustic zones for social interaction and quiet reflection to improve user experience." },
    { title: "Promote Indoor-Outdoor Flow", content: "Use large sliding or folding glass doors to connect the main space to an outdoor patio. This expands seating capacity and aligns with the climate, allowing for an open-air experience in warmer months." },
    { title: "Flexible & Modular Layout", content: "Design with modular furniture and movable partitions to accommodate various events and user needs, from solo workers to large groups. This maximizes the space's utility and commercial potential." }
  ];

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#FFFCF2', color: '#252422' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Site Analysis</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#403D39' }}>Insights that shaped the BREWHAUS interior.</p>
        </motion.div>

        <section className="mb-20 grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: '#EB5E28' }} />
                <h3 className="text-xl font-bold mb-2">Urban Context</h3>
                <p style={{ color: '#403D39' }}>Located in a bustling, pedestrian-friendly creative district.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                <Building className="w-10 h-10 mx-auto mb-4" style={{ color: '#EB5E28' }} />
                <h3 className="text-xl font-bold mb-2">Architectural Shell</h3>
                <p style={{ color: '#403D39' }}>A former warehouse with high ceilings and exposed brickwork.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                <Users className="w-10 h-10 mx-auto mb-4" style={{ color: '#EB5E28' }} />
                <h3 className="text-xl font-bold mb-2">Target Audience</h3>
                <p style={{ color: '#403D39' }}>Creative professionals, students, and local residents.</p>
            </motion.div>
        </section>

        <section className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-4">Climate & Light Study</h2>
                <div className="h-80 rounded-lg p-4" style={{ backgroundColor: '#CCC5B9' }}><canvas ref__={climateChartRef}></canvas></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                <h2 className="text-3xl font-bold mb-4">Neighborhood Land Use</h2>
                <div className="h-80 rounded-lg p-4 flex justify-center items-center" style={{ backgroundColor: '#CCC5B9' }}><canvas ref__={landUseChartRef}></canvas></div>
            </motion.div>
        </section>
        
        <section>
          <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl font-bold mb-8 text-center">Design Recommendations</motion.h2>
          <div className="max-w-3xl mx-auto">
            {recommendations.map((item, index) => (
              <motion.div key={index} className="border-b" style={{ borderColor: '#CCC5B9' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                <button onClick={() => toggleAccordion(index)} className="w-full flex justify-between items-center text-left py-6">
                  <span className="text-xl font-semibold">{item.title}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform ${activeAccordion === index ? 'rotate-180' : ''}`} style={{ color: '#EB5E28' }} />
                </button>
                {activeAccordion === index && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="pb-6 pr-8 text-lg" style={{ color: '#403D39' }}>{item.content}</motion.div>}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}