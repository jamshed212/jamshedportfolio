"use client";
import React, { useState } from "react";

export default function Contact() {
  const email = "jamshed0930@gmail.com";
  const linkedInUrl = "https://linkedin.com/in/jamshed-khan-a2a083196";
  const whatsappUrl = "https://wa.me/923172059998";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <section className="bg-black py-32 relative overflow-hidden border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Text & Info */}
          <div>
            <h2 className="text-blue-500 font-mono text-xs tracking-[1em] uppercase mb-8">
              // CONTACT_US
            </h2>
            <h3 className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-12">
              Let's <br /> 
              <span className="text-blue-600">Collaborate.</span>
            </h3>
            
            <div className="space-y-10 mt-16">
              <div>
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Direct Mail</p>
                <button 
                  onClick={copyToClipboard}
                  className="text-white text-xl md:text-2xl font-bold hover:text-blue-500 transition-colors"
                >
                  {email}
                </button>
              </div>

              <div>
                <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Socials</p>
                <div className="flex gap-6 mt-2">
                  <a href={linkedInUrl} target="_blank" className="text-white/60 hover:text-blue-500 font-mono text-xs tracking-widest uppercase">[ LinkedIn ]</a>
                  <a href={whatsappUrl} target="_blank" className="text-white/60 hover:text-blue-500 font-mono text-xs tracking-widest uppercase">[ WhatsApp ]</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-600 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-500 font-mono text-[10px] uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/10 focus:outline-none focus:border-blue-600 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-[0.3em] py-4 rounded-xl transition-all duration-300 mt-4 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}