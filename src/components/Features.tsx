"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Repeat, Clock, ShoppingBasket, Utensils, MessageSquareText } from "lucide-react";

const features = [
  {
    icon: <MessageSquareText className="w-6 h-6 text-indigo-400" />,
    title: "Conversational Ordering",
    desc: "Order by saying 'I want a high-protein salad from Blue Tokai'. No menus, no clicks.",
    size: "md:col-span-2"
  },
  {
    icon: <Repeat className="w-6 h-6 text-violet-400" />,
    title: "Order Memory",
    desc: "Vyra remembers your usuals. 'Get me my usual morning coffee' is all it takes.",
    size: "md:col-span-1"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    title: "AI Recommendations",
    desc: "Context-aware suggestions based on your mood, time of day, and location.",
    size: "md:col-span-1"
  },
  {
    icon: <ShoppingBasket className="w-6 h-6 text-green-400" />,
    title: "Full Grocery Support",
    desc: "From milk to masalas, Vyra handles all your grocery needs across multiple platforms.",
    size: "md:col-span-2"
  },
  {
    icon: <Utensils className="w-6 h-6 text-rose-400" />,
    title: "Food Discovery",
    desc: "Finding new favorites is as easy as asking 'What's the best Butter Chicken nearby?'",
    size: "md:col-span-1"
  },
  {
    icon: <Clock className="w-6 h-6 text-sky-400" />,
    title: "Fast Execution",
    desc: "Optimized pipelines ensure your order is placed in seconds, not minutes.",
    size: "md:col-span-2"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 italic">Built for the AI-Native Generation</h2>
          <p className="text-white/60 text-lg">Powerful features wrapped in a simple chat interface.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`glass p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all duration-500 group ${feature.size}`}
            >
              <div>
                <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
