"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ShoppingBag } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/80 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen AI Commerce for India
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[1] md:leading-[0.9]"
        >
          The Future of Commerce is <span className="text-indigo-500">Conversational.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed px-4"
        >
          VYRA is your AI-native commerce assistant. Order food, groceries, and more through natural language on WhatsApp. 
          Powered by advanced LLMs, integrated with India&apos;s leading APIs.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <button className="w-full sm:w-auto group relative bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
            Start Ordering
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-white/10 bg-white/5 font-bold hover:bg-white/10 transition-colors">
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Visual Concept */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 w-full max-w-6xl mx-auto relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl aspect-video md:aspect-[21/9] flex items-center justify-center">
          <div className="flex flex-col items-center gap-8 px-4 text-center">
            <div className="flex items-center gap-12 text-white/20">
              <MessageSquare size={64} />
              <ArrowRight size={32} />
              <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 glow-indigo">
                <span className="text-3xl font-display font-bold text-white">V</span>
              </div>
              <ArrowRight size={32} />
              <ShoppingBag size={64} />
            </div>
            <div className="max-w-md">
              <div className="text-sm font-medium text-indigo-400 mb-2">AI-LAYER PROCESSING</div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-indigo-500"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
