"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-32 px-4">
      <div className="max-w-4xl mx-auto glass p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[80px] -z-10 group-hover:bg-indigo-600/20 transition-colors duration-1000" />
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-8">Ready to skip the apps?</h2>
          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-xl mx-auto">
            Join 10,000+ early adopters and be the first to experience the future of commerce in India.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500/50 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95"
              >
                Join Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 text-indigo-400"
            >
              <CheckCircle2 className="w-16 h-16" />
              <div className="text-2xl font-bold text-white">You&apos;re on the list!</div>
              <p className="text-white/50">We&apos;ll reach out soon with your early access invite.</p>
            </motion.div>
          )}
          
          <p className="mt-8 text-xs text-white/30 tracking-widest uppercase">Investors: Sequoia • Accel • Lightspeed (Waitlist only)</p>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-2xl font-display font-bold tracking-tighter">VYRA</span>
          <p className="text-white/40 text-sm">© 2026 Vyra AI Technologies Inc. Built in Bengaluru.</p>
        </div>
        
        <div className="flex gap-12 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
