"use client";

import React from "react";
import { motion } from "framer-motion";

export const WhyVyra = () => {
  return (
    <section className="py-32 px-4 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12">Why Conversational Commerce?</h2>
        <div className="space-y-12 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="text-5xl font-display font-bold text-white/10 shrink-0">01</div>
            <div>
              <h3 className="text-2xl font-bold mb-4">India lives on WhatsApp</h3>
              <p className="text-lg text-white/50 leading-relaxed">
                With over 500 million users, WhatsApp is India&apos;s digital OS. VYRA meets users where they already are, removing the friction of downloading multiple apps.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="text-5xl font-display font-bold text-white/10 shrink-0">02</div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The App Fatigue is Real</h3>
              <p className="text-lg text-white/50 leading-relaxed">
                Users are tired of switching between 10 different apps for food, groceries, pharmacy, and pets. VYRA consolidates the entire commerce ecosystem into a single chat.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="text-5xl font-display font-bold text-white/10 shrink-0">03</div>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI-Native Intelligence</h3>
              <p className="text-lg text-white/50 leading-relaxed">
                Standard bots are rigid. VYRA is fluid. It understands typos, Hinglish, and complex requests like &quot;Need something healthy but spicy for 2 people under 1000 rupees.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const FutureVision = () => {
  return (
    <section id="vision" className="py-40 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/5 blur-[150px] -z-10" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-indigo-500 font-bold tracking-widest uppercase text-sm mb-6 block">The North Star</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-[1.1]">The Operating System for Modern Commerce.</h2>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-16">
            We aren&apos;t just building a bot. We are building the infrastructure that connects every merchant in India to every consumer through a unified AI layer.
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-white/30 font-display text-xl font-bold">
            <span>UNIVERSAL PAYMENTS</span>
            <span>HYPER-LOCAL LOGISTICS</span>
            <span>SENTIENT INVENTORY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
