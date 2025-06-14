import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { SendEmail } from "../integrations/Core";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await SendEmail({
        to: "design@brewhaus.com",
        subject: `Design Inquiry from ${formData.name}`,
        body: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      });
      setSubmitted(true);
    } catch (error) { console.error("Error sending email:", error); }
    setIsSubmitting(false);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: '#FFFCF2', color: '#252422' }}>
      <div className="max-w-5xl mx-auto px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact</h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#403D39' }}>Visit us or send an inquiry about the design.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h2 className="text-3xl font-bold mb-8">Our Location</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CCC5B9' }}>
                  <MapPin className="w-6 h-6" style={{ color: '#252422' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">BREWHAUS Roastery</h3>
                  <p style={{ color: '#403D39' }}>123 Design Street<br />Creative District, CD 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#CCC5B9' }}>
                  <Mail className="w-6 h-6" style={{ color: '#252422' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Press & Design Inquiries</h3>
                  <p style={{ color: '#403D39' }}>design@brewhaus.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop" alt="Coffee being poured" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3 p-8 rounded-lg" style={{ backgroundColor: '#CCC5B9' }} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <Send className="w-12 h-12 mb-6" style={{ color: '#EB5E28' }} />
                <h3 className="text-2xl font-bold mb-4">Inquiry Sent!</h3>
                <p style={{ color: '#403D39' }}>Thank you. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">Send an Inquiry</h2>
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white/50 border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-white/50 border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-white/50 border border-transparent rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center" style={{ backgroundColor: '#EB5E28', color: '#FFFCF2' }}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}