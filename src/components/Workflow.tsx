"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Brain, Zap, Truck, Database } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "WhatsApp",
    desc: "Send a message like you talk to a friend.",
    color: "bg-green-500/20 text-green-400 border-green-500/20"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Layer",
    desc: "Our LLMs understand context, intent, and dietary needs.",
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/20"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "VYRA Engine",
    desc: "Optimizes for price, delivery time, and availability.",
    color: "bg-amber-500/20 text-amber-400 border-amber-500/20"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "API Sync",
    desc: "Seamless integration with Swiggy, Zomato & Blinkit.",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/20"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Order Executed",
    desc: "Confirmation received. Your order is on the way.",
    color: "bg-white/10 text-white border-white/10"
  }
];

export const Workflow = () => {
  return (
    <section id="how-it-works" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How it works</h2>
          <p className="text-white/60 text-lg">A simple message. A complex orchestration.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          {/* Connecting Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 -z-10" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-500 ${step.color}`}>
                {step.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
