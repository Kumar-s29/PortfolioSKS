"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS">("IDLE");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;

    setStatus("SENDING");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "a173c0b6-4e64-4d35-9112-7e5afe1a4ca5",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("IDLE");
        alert("Command failed to execute. Check your access key.");
      }
    } catch (error) {
      setStatus("IDLE");
      alert("Network error. Please try again.");
    }

    setTimeout(() => setStatus("IDLE"), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24">
          {/* Left Side: Info */}
          <div className="space-y-10 md:space-y-12">
            <div>
              <p className="text-label-md text-primary mb-4 tracking-widest uppercase">/ CONNECTION_MODAL</p>
              <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter leading-tight">
                Get in <br /><span className="text-outline">touch</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-on-surface-variant/60 text-lg md:text-xl font-sans max-w-md leading-relaxed">
                Currently open to internship opportunities and collaborations in Full Stack Development and Data Analytics. 
              </p>
              <div className="flex flex-col gap-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="opacity-40 uppercase">STATUS: AVAILABLE_FOR_HIRE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="opacity-40 uppercase">ZONE: VISAKHAPATNAM, IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-panel p-8 md:p-12 rounded-lg border border-white/5 bg-white/[0.02] relative">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-primary/20">MSG_VERSION_4.0</div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-on-surface-variant/40 group-focus-within:text-primary transition-colors uppercase">01. Identity</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="NAME / ALIAS"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-all font-sans text-lg placeholder:text-white/5"
                  required
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-on-surface-variant/40 group-focus-within:text-primary transition-colors uppercase">02. Protocol</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="EMAIL_ADDRESS"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-all font-sans text-lg placeholder:text-white/5"
                  required
                />
              </div>

              <div className="space-y-2 group">
                <label className="text-[10px] font-mono text-on-surface-variant/40 group-focus-within:text-primary transition-colors uppercase">03. Payload</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="TRANSMIT_MESSAGE..."
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-primary transition-all font-sans text-lg resize-none placeholder:text-white/5"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  disabled={status !== "IDLE"}
                  type="submit"
                  className="w-full relative group bg-primary hover:bg-primary-dim text-on-primary py-5 rounded-md font-sans font-bold transition-all disabled:opacity-50 overflow-hidden"
                >
                  <span className={status === "IDLE" ? "opacity-100" : "opacity-0"}>
                    DISPATCH_COMMAND
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {status === "SENDING" && <span className="font-mono text-xs animate-pulse">ENCRYPTING...</span>}
                    {status === "SUCCESS" && <span className="font-mono text-xs">COMM_SUCCESSFUL</span>}
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-label-md opacity-40">
          <div>© 2026 SWAYAMVARAPU KUMARA SWAMY. ALL RIGHTS RESERVED.</div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="https://github.com/Kumar-s29/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GITHUB</a>
            <a href="https://www.linkedin.com/in/kumara-swamy-swayamvarapu-381587270/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LINKEDIN</a>
            <a href="https://leetcode.com/Kumar_s29" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LEETCODE</a>
            <a href="https://www.codechef.com/users/kumar_s29" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">CODECHEF</a>
          </div>
        </div>
      </div>
    </section>
  );
}
