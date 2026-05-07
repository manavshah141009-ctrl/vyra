"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between border border-white/10 shadow-2xl">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold tracking-tighter">VYRA</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">Workflow</Link>
          <Link href="#vision" className="hover:text-white transition-colors">Vision</Link>
        </div>

        <Link 
          href="#waitlist" 
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          Join Waitlist
        </Link>
      </div>
    </motion.nav>
  );
};
