"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Droplet, Wind, Grip, Fan, Table, Beaker, RefreshCcw, Share2, Leaf, Shield, Settings, BarChart3, Phone, Mail, MapPin, ChevronRight, Target, Sliders, Layers, Briefcase, Factory, LifeBuoy, Globe, Users, FileText, Send, Cloud, FlaskConical, Pill, Car, PaintRoller, Utensils, Cpu, Scissors, Gem, FileSearch, MonitorCog, Wrench, Headset, Building2, Anchor, FileBadge, ArrowRight, Plane } from "lucide-react";
import { Footer } from "@/components/ui/modem-animated-footer";
import ThreeBackground from "@/components/napcen-landing/ThreeBackground";
import LogoTicker from "@/components/napcen-landing/LogoTicker";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function NapcenLandingPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", industry: "", application: "", equipment: "", desc: "",
    country: "", location: "", airflow: "", unit: "", temp: "", timeline: ""
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [productFilter, setProductFilter] = useState("All equipment");

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a design prototype. Connect the form to NAPCEN's email/CRM/WhatsApp workflow before publishing.");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-napcean-blue selection:text-white">
      {/* TOPBAR */}
      <div className="hidden lg:block bg-[#051124] text-slate-300 text-[11.5px] py-2 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <div className="flex items-center gap-1.5 text-emerald-500 font-bold tracking-wide">
              <Globe size={13} /> Global Engineering & Export Hub
            </div>

            <div className="flex items-center gap-1.5 pl-4 font-medium text-slate-300 tracking-wide">
              <Plane size={13} className="text-slate-400" /> Exporting to 30+ Countries
            </div>

            <div className="flex items-center gap-2 pl-4">
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ISO 9001:2015</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">CE MARKED</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ATEX / ASME</span>
            </div>
          </div>

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <a href="mailto:info@napcen.com" className="flex items-center gap-1.5 font-medium hover:text-white transition-colors tracking-wide">
              <Mail size={13} className="text-blue-500" /> info@napcen.com
            </a>

            <a href="tel:+917904469219" className="flex items-center gap-1.5 pl-4 text-white font-bold hover:text-emerald-400 transition-colors tracking-wide">
              <Phone size={13} className="text-emerald-500" /> +91 79044 69219
            </a>
          </div>

        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <a href="#" className="flex items-center gap-3">
            <Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={140} height={50} className="object-contain" />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-700">
            <a href="#applications" className="hover:text-primary-blue transition-colors">Applications</a>
            <a href="#products" className="hover:text-primary-blue transition-colors">Products</a>
            <a href="#engineering" className="hover:text-primary-blue transition-colors">Engineering</a>
            <a href="#industries" className="hover:text-primary-blue transition-colors">Industries</a>
            <a href="#faq" className="hover:text-primary-blue transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary-blue transition-colors">Enquire</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-white overflow-hidden pt-16 pb-12">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-20 right-40 w-64 h-64 border border-blue-100 rounded-full opacity-50" />
            <div className="absolute top-40 right-20 w-[500px] h-[500px] border border-blue-50 rounded-full opacity-50" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 xl:gap-12 items-center md:items-stretch min-h-[480px]">

              {/* LEFT: TEXT & STATS */}
              <div className="w-full md:w-[45%] xl:w-[43%] flex flex-col justify-start pt-5 sm:pt-6 lg:pt-8">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    Custom engineered air pollution control systems · India & export projects
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-6">
                  Industrial air <br />
                  pollution control <br />
                  equipment <br />
                  <span className="text-primary-blue">built for your process.</span>
                </h1>

                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  NAPCEN manufactures wet scrubbers, dry scrubbers, dust collectors, fume extractors and source-capture systems for industrial dust, fumes, gases and odour. Share your operating conditions to request a technical quotation.
                </p>

                <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-slate-200 w-fit">
                  <a href="#contact" className="bg-primary-blue  text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-sm flex items-center gap-2">
                    Request a technical quote <ArrowRight size={16} className="-rotate-45" />
                  </a>
                  <a href="#products" className="bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold py-4 px-8 rounded-full transition-all shadow-sm text-sm flex items-center gap-2">
                    Explore equipment
                  </a>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">Manufacturer-direct enquiry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">Application-led selection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">International project requests</span>
                  </div>
                </div>
              </div>



              {/* RIGHT: FORM */}
              <div className="w-full md:w-[52%] xl:w-[54%] relative z-20 flex flex-col justify-start mt-12 md:mt-0 md:-ml-4 lg:-ml-8 xl:-ml-12" id="contact">
                <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase">
                      {formStep === 1 ? "STEP 1 OF 2 · YOUR APPLICATION" : "STEP 2 OF 2 · CONTACT DETAILS"}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-[#0f1b3a] mb-3">Request an engineered quotation</h3>
                  <p className="text-[14px] text-slate-500 mb-6 font-medium leading-relaxed">Tell us what your process generates. Approximate values are welcome.</p>

                  {formStep === 1 ? (
                    <form onSubmit={(e) => { e.preventDefault(); setFormStep(2); }} className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 xl:gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Equipment required *</label>
                          <select required value={formData.equipment} onChange={(e) => setFormData({ ...formData, equipment: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                            <option value="">Select equipment</option>
                            <option>Wet Scrubber</option>
                            <option>Dry Scrubber</option>
                            <option>Dust Collector</option>
                            <option>Fume Extractor</option>
                            <option>Downdraft Table</option>
                            <option>Fume Hood</option>
                            <option>Industrial Blower / Ducting</option>
                            <option>Complete Air Pollution Control System</option>
                            <option>Not Sure — Recommend</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Pollutant / application *</label>
                          <select required value={formData.application} onChange={(e) => setFormData({ ...formData, application: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                            <option value="">Select pollutant</option>
                            <option>Acid gas / chemical fumes</option>
                            <option>Dust / particulate</option>
                            <option>Welding / solder / laser fumes</option>
                            <option>H2S / VOC / odour</option>
                            <option>Oil mist / coolant aerosol</option>
                            <option>Other process exhaust</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 xl:gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Airflow estimate</label>
                          <input placeholder="e.g. 5,000" value={formData.airflow} onChange={(e) => setFormData({ ...formData, airflow: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Unit</label>
                          <select value={formData.unit} onChange={(e) => setFormData({ ...formData, unit: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                            <option value="">CMH (m³/h)</option>
                            <option>CFM</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 xl:gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Operating temperature (°C)</label>
                          <input placeholder="If known" value={formData.temp} onChange={(e) => setFormData({ ...formData, temp: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Project timeline</label>
                          <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                            <option value="">Planning stage</option>
                            <option>Within 1 month</option>
                            <option>1–3 months</option>
                            <option>3–6 months</option>
                            <option>Later</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Process details</label>
                        <textarea placeholder="Source/process, inlet concentration, target emission, available drawing or site constraints" value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all min-h-[80px] resize-y font-medium text-slate-700 shadow-sm" />
                      </div>

                      <div className="flex justify-end pt-4">
                        <button type="submit" className="w-full sm:w-auto px-8 sm:px-10 bg-[#0a5cbb] text-white font-black py-4 rounded-xl transition-all shadow-md text-sm lg:text-[15px] flex items-center justify-center gap-2 tracking-wide">
                          CONTINUE TO CONTACT DETAILS <ArrowRight size={18} />
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-500 mt-2 font-medium leading-relaxed">
                        Your details remain on this page until you choose WhatsApp or email. Required fields are marked *.
                      </p>
                    </form>
                  ) : (
                    <form onSubmit={handleDemoSubmit} className="space-y-3">
                      <div className="grid grid-cols-2 gap-4 xl:gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Full name *</label>
                          <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Company name *</label>
                          <input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 xl:gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Work email *</label>
                          <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Phone / WhatsApp *</label>
                          <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 xl:gap-5">
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">Country *</label>
                          <input placeholder="e.g. India" required value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[13px] font-bold text-[#0f1b3a]">City / project location *</label>
                          <input required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Industry</label>
                        <select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                          <option>Chemical & petrochemical</option>
                          <option>Pharmaceutical</option>
                          <option>Metal & engineering</option>
                          <option>Automotive</option>
                          <option>Electronics</option>
                          <option>Food processing</option>
                          <option>Textile</option>
                          <option>Water / wastewater</option>
                          <option>Other manufacturing</option>
                        </select>
                      </div>

                      <div className="flex justify-between gap-3 pt-4">
                        <button type="button" onClick={(e) => { e.preventDefault(); setFormStep(1); }} className="px-6 sm:px-8 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-[#0f1b3a] font-black py-4 rounded-xl transition-all shadow-sm text-sm flex items-center justify-center shrink-0">
                          ← Back
                        </button>
                        <button type="submit" className="px-8 sm:px-12 bg-[#0a5cbb] text-white font-black py-4 rounded-xl transition-all shadow-md text-sm lg:text-[15px] flex items-center justify-center gap-2 tracking-wide shrink-0">
                          SUBMIT ENQUIRY <ArrowRight size={18} />
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-500 mt-2 font-medium leading-relaxed">
                        Required fields are marked *.
                      </p>
                    </form>
                  )}

                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 text-[10px] text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5"><Shield size={12} className="text-[#0f1b3a]" /> Quick Response</div>
                    <div className="flex items-center gap-1.5"><Users size={12} className="text-[#0f1b3a]" /> Expert Support</div>
                    <div className="flex items-center gap-1.5"><Settings size={12} className="text-[#0f1b3a]" /> Custom Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURES BAR */}
            <div className="mt-20 border-t border-b border-slate-200 py-8 hidden md:block">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {[
                  { title: "Dust & Particulate", sub: "Collection Solutions", icon: <Wind size={24} className="text-primary-blue" /> },
                  { title: "Industrial Fumes", sub: "Extraction Systems", icon: <Factory size={24} className="text-primary-blue" /> },
                  { title: "Gases & Vapours", sub: "Treatment Solutions", icon: <Cloud size={24} className="text-primary-blue" /> },
                  { title: "Oil Mist", sub: "Filtration Systems", icon: <Droplet size={24} className="text-primary-blue" /> },
                  { title: "Process Exhaust", sub: "Ventilation & Control", icon: <Fan size={24} className="text-primary-blue" /> },
                  { title: "Odour & Vapour", sub: "Application Specific", icon: <Leaf size={24} className="text-primary-green" /> }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <div className="text-xs font-black text-[#0f1b3a]">{feature.title}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{feature.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </section>

        <LogoTicker />

        {/* SOLUTIONS SECTION */}
        <section id="applications" className="py-24 bg-white relative overflow-hidden">
          <div className="w-full px-6 md:px-12 2xl:px-24">

            {/* Header Area */}
            <div className="mb-16 relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-5xl">
                <div className="mb-4">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block">START WITH THE PROBLEM</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  What air pollutant do you<br />
                  <span className="text-primary-blue">need to control?</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                    Equipment selection depends on contaminant properties, exhaust volume, temperature, moisture and the permitted outlet condition. Choose the application closest to your process.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Problem Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-6 xl:gap-8">
              {[
                { title: "Dust & particulate", desc: "Grinding, powder transfer, cement, minerals, woodworking and material handling may need cyclone pre-separation, cartridge filtration, pulse-jet baghouses or wet collection.", icon: Grip, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177034/banner01_oz1rwt.png", linkText: "Explore dust collectors →", linkUrl: "https://napcen-apc-rfq.napcenpondy.chatgpt.site/#products" },
                { title: "Acid gases & chemical fumes", desc: "HCl, NH₃, SO₂ and other soluble or reactive streams call for a pollutant-specific wet scrubber with suitable reagent, contact time, materials and mist elimination.", icon: Share2, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177033/banner3_kwzfrf.png", linkText: "Explore wet scrubbers →", linkUrl: "https://napcen-apc-rfq.napcenpondy.chatgpt.site/#products" },
                { title: "Welding, solder & laser fumes", desc: "Capture at source using extraction arms, hoods, downdraft tables and a filter system sized to the task, workstations and duct losses.", icon: Wind, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177034/banner2_lu8yh2.png", linkText: "Explore fume extraction →", linkUrl: "https://napcen-apc-rfq.napcenpondy.chatgpt.site/#products" },
                { title: "H₂S, VOCs & odour", desc: "Dry media systems and tailored process exhaust treatment may suit wastewater, biogas, chemicals and odorous handling operations after gas characterization.", icon: Leaf, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177177/banner6_powngt.png", linkText: "Discuss gas composition →", linkUrl: "https://napcen-apc-rfq.napcenpondy.chatgpt.site/#contact" },
                { title: "Oil mist & machining aerosol", desc: "Assess coolant type, mist loading, enclosure air changes and maintenance access for CNC machining and industrial mist collection.", icon: Droplet, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177032/banner4_fqpxae.png", linkText: "Discuss mist control →", linkUrl: "https://napcen-apc-rfq.napcenpondy.chatgpt.site/#contact" },
                { title: "Integrated process exhaust", desc: "Capture, ducting, fan, treatment and discharge should be engineered as one system to meet the required airflow and pressure balance.", icon: Fan, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177034/banner5_jf92ee.png", linkText: "Request system review →", linkUrl: "https://napcen-apc-rfq.napcenpondy.chatgpt.site/#contact" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all group overflow-hidden min-h-[280px] flex flex-col">

                    {/* Card Background Image */}
                    <div className="absolute top-0 right-0 bottom-0 w-[55%] z-0 overflow-hidden opacity-90 group-hover:opacity-100 transition-all duration-700">
                      <Image src={item.bgImage} alt={item.title} fill className="object-cover object-right group-hover:scale-105 transition-transform duration-700 origin-right mix-blend-multiply" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
                    </div>

                    {/* Top row: Icon and faint number */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-50/80 flex items-center justify-center text-primary-blue backdrop-blur-sm shadow-sm">
                        <Icon size={22} />
                      </div>
                      <div className="absolute right-0 top-[-10px] text-7xl font-black text-slate-100/60 group-hover:text-primary-blue/10 transition-colors tracking-tighter select-none">
                        0{i + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 flex-1 flex flex-col max-w-[75%]">
                      <h3 className="text-xl font-bold mb-3 text-slate-800">{item.title}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>

                      <div className="mt-auto">
                        <a href={item.linkUrl} className="inline-flex items-center gap-2 text-xs font-bold text-primary-blue hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-300">
                          {item.linkText}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Footer for Solutions Section */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col lg:flex-row justify-center items-center gap-8">

              <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-12 w-full justify-center">
                {[
                  { title: "Improved Air Quality", subtitle: "Healthier People", icon: Shield },
                  { title: "Compliant Operations", subtitle: "Meet Emission Standards", icon: Settings },
                  { title: "Sustainable Growth", subtitle: "Cleaner Tomorrow", icon: Leaf },
                  { title: "Industry Expertise", subtitle: "Proven Solutions", icon: BarChart3 },
                ].map((feature, i) => {
                  const FIcon = feature.icon;
                  return (
                    <div key={i} className="flex items-center gap-4">
                      <div className="text-primary-blue"><FIcon size={28} strokeWidth={1.5} /></div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-700">{feature.title}</span>
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{feature.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ENGINEERING SECTION */}
        <section id="engineering" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

              {/* Left Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full lg:w-1/2">
                <span className="text-primary-blue font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                  TECHNICAL ENQUIRY CHECKLIST
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-6">
                  Help our engineers size the right system.
                </h2>
                <p className="text-slate-500 text-[15px] mb-8 leading-relaxed font-medium">
                  The best quotation defines both the pollutant and the duty. If your figures are estimates, state the basis and we can review the missing values.
                </p>
                <ul className="space-y-4 mb-10 text-[14px] text-slate-600 font-medium">
                  {[
                    "Required exhaust flow in CFM or CMH, plus number of pickup points",
                    "Pollutant species, inlet loading and target outlet or applicable permit condition",
                    "Temperature, humidity, pressure, operating hours and process variation",
                    "Preferred metallurgy, layout, duct route and available utilities",
                    "Installation country, timeline and scope of supply"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f1b3a] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-md text-sm">
                  Start technical RFQ →
                </a>
              </motion.div>

              {/* Right Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full lg:w-1/2">
                <div className="bg-slate-50/70 rounded-3xl p-8 md:p-10 border border-slate-200/60">
                  <span className="text-primary-blue font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                    EQUIPMENT SELECTION EXAMPLE
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0f1b3a] leading-tight mb-4">
                    Acid fume extraction to packed bed scrubbing
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-4">
                    Capture points feed a corrosion-compatible duct and fan. A packed bed scrubber brings the gas into contact with recirculated liquid; the chosen reagent can neutralize a target pollutant. A mist eliminator limits liquid carryover before discharge.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">
                    <strong className="text-[#0f1b3a]">What changes the design:</strong> gas solubility and concentration, liquid chemistry, temperature, required outlet, fan pressure and material compatibility.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { num: "01", label: "Capture & convey" },
                      { num: "02", label: "Treat the exhaust" },
                      { num: "03", label: "Verify the outlet" }
                    ].map((step, i) => (
                      <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col gap-3">
                        <span className="text-[#0f1b3a] font-black text-lg">{step.num}</span>
                        <span className="text-slate-500 text-xs font-medium leading-tight">{step.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* PRODUCTS SECTION */}
        <section id="products" className="py-24 bg-white relative overflow-hidden">
          <div className="w-full px-4 md:px-8 xl:px-12 2xl:px-16">
            {/* Header Area */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center mb-16 relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl">
                <div className="mb-4">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block">Equipment</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  Air pollution control equipment <br className="hidden md:block" />
                  manufacturer for <span className="text-primary-blue">industrial plants</span>
                </h2>
                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  Compare the primary treatment methods, then send the equipment name into your RFQ with one click. Final design and compliance targets are confirmed against your data.
                </p>

              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex justify-center md:justify-end items-center gap-4 md:gap-8 mt-8 md:mt-0">

                <div className="relative">
                  <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-[8px] md:border-[10px] border-white shadow-2xl relative z-10 mx-auto md:mx-0">
                    <Image src="/industrial_plant.jpg" alt="Industrial Plant" fill className="object-cover" />
                  </div>
                  {/* Floating button */}
                  <div className="absolute -bottom-2 -right-4 md:-bottom-4 md:-right-12 z-20 bg-white shadow-xl rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-3 scale-90 md:scale-100">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      🍃
                    </div>
                    <span className="text-sm font-bold text-slate-700">Sustainable<br />Industries</span>
                    <span className="text-primary-blue ml-2">→</span>
                  </div>

                  {/* Decorative faint circles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-slate-200/50 z-0 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-200/50 z-0 pointer-events-none"></div>
                </div>
              </motion.div>
            </div>

            {/* Product Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
              {[
                {
                  category: "GAS & FUME TREATMENT",
                  title: "Industrial wet scrubbers for acid gas and fumes",
                  desc: "Packed bed, spray tower, venturi and emergency chlorine scrubber configurations. Evaluate absorption, neutralization, packing, recirculation and mist elimination for the target gas or particulate.",
                  extraLabel: "Typical materials",
                  extraText: "PP, FRP, SS and lined construction, subject to chemistry and temperature.",
                  btnText: "Enquire about scrubbers →",
                  icon: Droplet,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175868/napcen1-removebg-preview_vwj9wi.png",
                  equipmentSelect: "Wet Scrubber",
                  filterTag: "Scrubbers"
                },
                {
                  category: "ODOUR & GAS ADSORPTION",
                  title: "Industrial dry scrubbers",
                  desc: "Media-based treatment for suitable H₂S, VOC and odour applications in wastewater, biogas and industrial processes. Bed life depends on concentration, humidity and duty.",
                  extraLabel: "Design inputs",
                  extraText: "Gas species, ppm load, flow and media changeout approach.",
                  btnText: "Enquire about dry systems →",
                  icon: Wind,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790691907/5_epgwrw.png",
                  equipmentSelect: "Dry Scrubber",
                  filterTag: "Scrubbers"
                },
                {
                  category: "PROCESS DUST",
                  title: "Pulse-jet baghouse dust collector systems",
                  desc: "Continuous extraction with filter bags and pulse cleaning for process dust in cement, metal, chemical and bulk handling operations.",
                  extraLabel: "Design inputs",
                  extraText: "Dust loading, particle size, moisture, temperature and dust safety review.",
                  btnText: "Enquire about baghouses →",
                  icon: Grip,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790691907/4_wigjre.png",
                  equipmentSelect: "Dust Collector",
                  filterTag: "Dust collection"
                },
                {
                  category: "COMPACT FILTRATION",
                  title: "Cartridge & cyclone dust collectors",
                  desc: "Cartridge systems for suitable fine dry dust; cyclones for coarse pre-separation or as part of a multi-stage dust control system.",
                  extraLabel: "Design inputs",
                  extraText: "Particle properties, airflow, pressure drop and cleaning method.",
                  btnText: "Enquire about dust control →",
                  icon: Fan,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790784408/Cartridge_cyclone_dust_collectors_image_g8cnl9.png",
                  equipmentSelect: "Dust Collector",
                  filterTag: "Dust collection"
                },
                {
                  category: "CAPTURE AT SOURCE",
                  title: "Industrial welding, laser and solder fume extractors",
                  desc: "Welding, laser and solder fume extraction with local hoods or arms, ducting and staged filters chosen for the emission source.",
                  extraLabel: "Design inputs",
                  extraText: "Station count, capture distance, process and operating hours.",
                  btnText: "Enquire about fume systems →",
                  icon: Table,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790784407/Industrial_welding_laser_and_solder_fume_extractors_image_qmmfla.png",
                  equipmentSelect: "Fume Extractor",
                  filterTag: "Fume & source capture"
                },
                {
                  category: "WORKSTATION CONTROL",
                  title: "Industrial downdraft tables",
                  desc: "Downward source capture for grinding, polishing, welding and deburring where table geometry and spark or combustible dust hazards need review.",
                  extraLabel: "Design inputs",
                  extraText: "Workpiece size, task, dust type and operator arrangement.",
                  btnText: "Enquire about tables →",
                  icon: Beaker,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790691907/2_ghh1qy.png",
                  equipmentSelect: "Downdraft Table",
                  filterTag: "Fume & source capture"
                },
                {
                  category: "ENCLOSED EXTRACTION",
                  title: "Fume hoods & CNC mist control",
                  desc: "Industrial capture enclosures and mist filtration concepts for chemical work, machining and aerosol-generating processes.",
                  extraLabel: "Design inputs",
                  extraText: "Opening dimensions, source rate, fluid type and duct routing.",
                  btnText: "Enquire about enclosures →",
                  icon: Fan,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790691907/1_vbu2zw.png",
                  equipmentSelect: "Fume Hood",
                  filterTag: "Fume & source capture"
                },
                {
                  category: "COMPLETE APC SYSTEM",
                  title: "Blowers, ducting & ventilation",
                  desc: "Fans, corrosion-resistant ducting and capture networks engineered with the treatment device to deliver the required volume at the source.",
                  extraLabel: "Design inputs",
                  extraText: "Route length, fittings, static pressure and installation scope.",
                  btnText: "Enquire about full systems →",
                  icon: RefreshCcw,
                  image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175867/napcen7-removebg-preview_tqczhg.png",
                  equipmentSelect: "Complete Air Pollution Control System",
                  filterTag: "System components"
                }
              ]
                .filter(item => productFilter === "All equipment" || item.filterTag === productFilter)
                .map((item, i) => {
                  const Icon = item.icon;
                  const isHighlight = false;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="relative p-6 lg:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden min-h-[420px] flex flex-col">
                      {/* Top row: Number and Icon */}
                      <div className="flex justify-between items-start mb-6 relative z-10">
                        {/* <div className="text-8xl md:text-9xl font-black text-slate-200 group-hover:text-primary-blue/20 transition-colors tracking-tighter">0{i + 1}</div> */}
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isHighlight ? 'bg-primary-blue/10 text-primary-blue' : 'bg-slate-50 text-slate-400'} group-hover:bg-primary-blue group-hover:text-white transition-colors`}>
                          <Icon size={24} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-20 flex-1 flex flex-col">
                        <div className="text-[10px] font-bold text-primary-blue tracking-widest uppercase mb-2">
                          {item.category}
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-slate-800">{item.title}</h3>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4 pr-4 lg:pr-12">{item.desc}</p>

                        <div className="mb-8 pr-4 lg:pr-12">
                          <span className="font-bold text-xs text-slate-700 uppercase">{item.extraLabel}:</span>
                          <span className="text-sm text-slate-500 ml-2">{item.extraText}</span>
                        </div>

                        <div className="mt-auto flex justify-start relative z-30">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setFormData({ ...formData, equipment: item.equipmentSelect || "" });
                              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all
                          ${isHighlight ? 'bg-primary-blue text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600' : 'border border-slate-200 text-slate-700 hover:border-primary-blue hover:text-primary-blue bg-white/80 backdrop-blur-sm'}`}>
                            {item.btnText}
                          </button>
                        </div>
                      </div>

                      {/* Background Equipment Image - Absolute at bottom right */}
                      <div className="absolute -bottom-2 -right-6 lg:-right-8 w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] z-10 group-hover:scale-110 transition-transform duration-500 origin-bottom-right">
                        <Image src={item.image} alt={item.title} fill className="object-contain drop-shadow-2xl" />
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>

            {/* Bottom Footer for Products Section */}
            <div className="mt-16 flex justify-between items-center text-xs text-slate-400 font-bold tracking-widest uppercase">
              <div className="flex items-center gap-4">
                Engineered for a cleaner tomorrow
              </div>
              <div className="hidden md:flex gap-4">
                <span>Air</span>
                <span className="text-slate-300">/</span>
                <span>People</span>
                <span className="text-slate-300">/</span>
                <span>Industry</span>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES SECTION */}
        <section id="industries" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14 max-w-4xl">
              <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                INDUSTRIAL APPLICATIONS
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                Air pollution control systems for
                different industries
              </h2>
              <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                NAPCEN can review applications in chemical processing, pharmaceuticals, metalworking, automotive, electronics, food processing, textile operations and water treatment. The pollutant determines the control approach.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Chemical Processing & Petrochemicals", desc: "Industrial air pollution control systems capture acid gases, VOCs, chemical fumes, HCl, SO₂, H₂S and hazardous emissions from chemical processing, refineries and petrochemical plants.", image: "/INDUSTRIAL/Sunset%20Petrochemical%20Refinery%20Panorama.png" },
                { title: "Metals, Fabrication & Automotive", desc: "Wet scrubbers, dust collectors and fume extraction systems control welding fumes, grinding dust, metal particulates, smoke and process emissions from fabrication, foundries and automotive manufacturing.", image: "/INDUSTRIAL/Steelworks%20to%20Smart%20Automotive%20Assembly.png" },
                { title: "Water, Wastewater Treatment & Biogas", desc: "Odor control and gas treatment systems remove H₂S, ammonia, VOCs and corrosive gases from STP, ETP, wastewater treatment, sewage handling and biogas facilities.", image: "/INDUSTRIAL/Renewable%20Waters_%20Biogas%20Treatment%20Plant%20at%20Sunset.png" },
                { title: "Cement, Mining & Aggregates", desc: "Industrial dust collection systems capture high-volume particulate matter generated during crushing, grinding, screening, conveying, material transfer and cement manufacturing operations.", image: "/INDUSTRIAL/Sunlit%20Aggregate%20Plant%20and%20Quarry.png" },
                { title: "Pharmaceuticals & Fine Chemicals", desc: "Wet scrubbers and dust collection systems control chemical vapors, solvent fumes, acid gases, API dust and fine particulates from pharmaceutical and specialty chemical manufacturing processes.", image: "/INDUSTRIAL/Futuristic%20Pharmaceutical%20Research%20and%20Production%20Facility.png" },
                { title: "Power Generation, Boilers & Thermal Processes", desc: "Flue gas treatment and wet scrubber systems reduce SOx, acid gases, particulate matter, fly ash and combustion emissions from industrial boilers, furnaces, incinerators and thermal processes.", image: "/INDUSTRIAL/Industrial%20Power%20Plant%20at%20Sunset.png" },
                { title: "Food Processing & Agriculture", desc: "Dust and odor control systems manage organic dust, powder particulates, fumes and process odors generated in food manufacturing, grain handling, feed processing and agricultural operations.", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" },
                { title: "Paints, Coatings & Printing", desc: "VOC control, fume extraction and air pollution control systems capture solvent vapors, paint fumes, odors and airborne contaminants from coating, painting and industrial printing processes.", image: "/INDUSTRIAL/Vibrant%20Paint%20and%20Printing%20Factory.png" },
                { title: "Electronics & Semiconductor Manufacturing", desc: "Advanced wet scrubber and exhaust treatment systems control acid fumes, corrosive gases, chemical vapors and hazardous process emissions from electronics and semiconductor manufacturing.", image: "/INDUSTRIAL/High-Tech%20Semiconductor%20Cleanroom%20Montage.png" }
              ].map((ind, i) => {
                const isBlue = i % 2 === 0;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 min-h-[300px] group flex">
                    {/* Background Image */}
                    <div className="absolute inset-0 right-0 w-full h-full z-0">
                      <Image src={ind.image} fill className="object-cover object-right group-hover:scale-105 transition-transform duration-700" alt={ind.title} />
                    </div>

                    {/* White Curved Overlay */}
                    <div className="absolute inset-0 w-[68%] h-full z-10 pointer-events-none">
                      <svg className="w-full h-full drop-shadow-[4px_0_8px_rgba(0,0,0,0.06)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,0 L75,0 C75,35 100,55 100,100 L0,100 Z" fill="white" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 w-[55%] p-5 md:p-7 flex flex-col justify-start">

                      <h3 className="text-[16px] md:text-lg font-black text-[#0f1b3a] mb-3 leading-snug">{ind.title}</h3>
                      <p className="text-[11px] md:text-[12px] text-slate-500 leading-relaxed font-medium">{ind.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-24 border-t border-slate-100 pt-16 w-full max-w-full overflow-hidden">
              {/* Header Section */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center"
              >
                <div className="flex items-center justify-center gap-2 text-primary-gray font-bold text-xs uppercase tracking-widest mb-3">
                  Lifecycle
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0f1b3a] tracking-tight mb-4">
                  Project workflow
                </h3>
                <p className="text-slate-500 font-medium text-sm md:text-base">
                  From process data to commissioning and after-sales support
                </p>

              </motion.div>

              {/* Pipeline Workflow Grid */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="w-full"
              >
                <div className="flex overflow-x-auto lg:overflow-visible pb-12 hide-scrollbar lg:justify-between items-start gap-4 lg:gap-0 snap-x snap-mandatory">
                  {[
                    {
                      step: "01",
                      title: "Define",
                      desc: "Understand process, emission source and site conditions.",
                      color: "text-blue-600", bg: "bg-blue-600", borderColor: "border-blue-600",
                      image: "/INDUSTRIAL/Engineers Inspecting a Modern Chemical Plant.png"
                    },
                    {
                      step: "02",
                      title: "Engineer",
                      desc: "Select technology, size equipment and design the system.",
                      color: "text-sky-500", bg: "bg-sky-500", borderColor: "border-sky-500",
                      image: "/INDUSTRIAL/Industrial%20Process%20Design%20Workstation.png"
                    },
                    {
                      step: "03",
                      title: "Detail Design",
                      desc: "Prepare PFD, P&ID, GA drawings and equipment specifications.",
                      color: "text-teal-400", bg: "bg-teal-400", borderColor: "border-teal-400",
                      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80"
                    },
                    {
                      step: "04",
                      title: "Procure",
                      desc: "Procure raw materials and key components.",
                      color: "text-green-500", bg: "bg-green-500", borderColor: "border-green-500",
                      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=300&q=80"
                    },
                    {
                      step: "05",
                      title: "Manufacture",
                      desc: "Fabricate equipment as per approved drawings.",
                      color: "text-yellow-500", bg: "bg-yellow-500", borderColor: "border-yellow-500",
                      image: "/INDUSTRIAL/Steelworks%20to%20Smart%20Automotive%20Assembly.png"
                    },
                    {
                      step: "06",
                      title: "Inspect & Test",
                      desc: "Perform dimensional inspection, testing and quality checks.",
                      color: "text-orange-500", bg: "bg-orange-500", borderColor: "border-orange-500",
                      image: "/INDUSTRIAL/Precision Inspection of a Stainless Vessel.png"
                    },
                    {
                      step: "07",
                      title: "Dispatch & Install",
                      desc: "Pack, dispatch and coordinate site installation (where in scope).",
                      color: "text-red-500", bg: "bg-red-500", borderColor: "border-red-500",
                      image: "/INDUSTRIAL/Industrial%20Dispatch%20and%20Crane%20Installation.png"
                    },
                    {
                      step: "08",
                      title: "Commission & Support",
                      desc: "Start-up, performance verification and after-sales support.",
                      color: "text-purple-600", bg: "bg-purple-600", borderColor: "border-purple-600",
                      image: "/INDUSTRIAL/Industrial%20Process%20Commissioning%20Team.png"
                    },
                  ].map((item, i, arr) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col items-center text-center relative group w-[220px] lg:w-[11%] shrink-0 snap-center">
                        <div className="relative mb-5 inline-block">
                          <div className={`w-28 h-28 lg:w-32 lg:h-32 rounded-full border-[3px] p-1 lg:p-1.5 transition-colors duration-300 bg-white ${item.borderColor}`}>
                            <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100">
                              <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 112px, 128px" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                          </div>

                          <div className={`absolute -top-1 -left-1 w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center text-white font-bold text-[13px] lg:text-sm border-2 border-white shadow-sm z-10 ${item.bg}`}>
                            {item.step}
                          </div>
                        </div>

                        <h4 className="text-[15px] lg:text-[16px] font-black text-[#0f1b3a] mb-2 leading-tight px-1">{item.title}</h4>
                        <p className="text-[11px] lg:text-[12px] text-slate-500 leading-relaxed font-medium px-1">{item.desc}</p>
                      </div>

                      {i < arr.length - 1 && (
                        <div className="hidden lg:flex flex-1 items-center justify-center relative min-w-[10px]" style={{ height: '128px' }}>
                          <div className={`h-[2px] w-full ${arr[i + 1].bg}`}></div>
                          <div className={`absolute right-0 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-current ${arr[i + 1].color}`} style={{ right: '-3px' }}></div>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROCESS SECTION (Removed as requested) */}


        {/* WHY NAPCEN SECTION (Removed as requested) */}

        {/* GLOBAL PROJECTS SECTION */}
        <section className="relative w-full aspect-[21/9] overflow-hidden bg-[#051124] flex items-center">
          <Image
            src="https://res.cloudinary.com/defqgygsf/image/upload/v1790682032/ChatGPT_Image_Sep_29_2026_05_03_18_PM_indw2c.png"
            alt="Global Projects Background"
            fill
            quality={100}
            priority
            unoptimized
            className="object-cover object-right lg:object-center"
          />

          {/* Subtle gradient overlay to ensure text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051124] via-[#051124]/80 lg:via-[#051124]/60 to-transparent z-0 w-full lg:w-2/3 pointer-events-none" />

          <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl mt-12 md:mt-0">
              <span className="text-gray-400 font-bold text-[11px] sm:text-[13px] tracking-[0.2em] uppercase mb-6 block">
                INDIA-BASED • INTERNATIONAL ENQUIRIES
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                Air pollution control equipment manufacturer and exporter for global projects
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-medium drop-shadow-md">
                From Puducherry, NAPCEN accepts technical enquiries for projects in India, the Middle East, Southeast Asia, Europe and North America. Export documentation, standards, logistics and installation scope should be agreed for each destination.
              </p>

              <div className="flex flex-wrap gap-3 items-center mb-10">
                {['India', 'Middle East', 'Southeast Asia', 'Europe', 'North America'].map(region => (
                  <span key={region} className="px-6 py-2.5 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors backdrop-blur-md shadow-lg">
                    {region}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0f1b3a] font-black py-3.5 px-8 rounded-xl transition-all shadow-xl text-sm lg:text-[15px]">
                Share your project specification &rarr;
              </a>
            </div>
          </div>

          {/* Right Bottom Card */}
          <div className="hidden md:flex absolute bottom-8 right-8 lg:bottom-10 lg:right-12 z-20 max-w-sm lg:max-w-[440px] bg-[#0c1e36]/80 backdrop-blur-xl border border-white/10 p-6 lg:p-7 rounded-3xl items-start gap-5 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1e36] to-cyan-900/40 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
              <FileBadge className="w-7 h-7 text-white opacity-90" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm lg:text-[15px] mb-2.5 leading-snug tracking-wide">Design to the applicable requirement</h4>
              <p className="text-slate-300 text-[11px] lg:text-[12px] leading-[1.6]">
                For an Indian project, provide the relevant CPCB or State Pollution Control Board consent condition and stack limit. For other markets, supply the authority having jurisdiction, emission specification and any equipment standards in the tender. A product is not automatically "EPA approved", "OSHA compliant" or CE marked by virtue of its category.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="sticky top-32">
                <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">
                  QUESTIONS FROM INDUSTRIAL BUYERS
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  Air pollution control<br />equipment FAQs
                </h2>
                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  For a precise answer, share a process description and any emission test or design data in the enquiry form.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col">
                {[
                  {
                    q: "Which air pollution control equipment should we select?",
                    a: "Start with pollutant chemistry and phase, concentration, particle size, exhaust volume, temperature and target outlet. Wet scrubbers, dry media systems, dust collectors and fume extraction systems solve different problems; some sites need a combination."
                  },
                  {
                    q: "What data is needed for a wet scrubber quotation?",
                    a: "Provide gas flow, contaminant species and inlet concentration, temperature, humidity, target emission, available water and reagent, preferred materials and any site layout drawing. The engineer can advise which unknowns need testing."
                  },
                  {
                    q: "Do you provide custom dust collectors and fume extractors?",
                    a: "NAPCEN's range includes industrial dust and fume control equipment. Selection depends on dust loading, capture points, process hazards, duty and pressure drop. Request a technical review for a project-specific configuration."
                  },
                  {
                    q: "Can NAPCEN quote export projects?",
                    a: "Use the RFQ to give the country, city, delivery requirement and applicable standards. The team can review the supply scope and shipping or site-service requirements for that project."
                  },
                  {
                    q: "Can you guarantee a removal efficiency or emission limit?",
                    a: "A performance commitment requires an agreed design basis, inlet conditions, pollutant test method, operation and maintenance assumptions, and contract terms. A generic percentage is not a project guarantee."
                  },
                  {
                    q: "How can I submit the enquiry?",
                    a: "Complete the technical form above, review the generated summary and choose WhatsApp or email. Your messaging app will open with the details; press Send there to deliver the enquiry to NAPCEN."
                  }
                ].map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="border-b border-slate-200 last:border-0 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                      >
                        <h3 className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-primary-blue' : 'text-[#0f1b3a] group-hover:text-primary-blue'}`}>
                          {faq.q}
                        </h3>
                        <div className={`relative shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-primary-blue bg-primary-blue shadow-md' : 'border-slate-200 bg-slate-50 group-hover:border-primary-blue group-hover:bg-blue-50'}`}>
                          <div className={`absolute w-3.5 h-[2px] transition-all duration-300 rounded-full ${isOpen ? 'bg-white' : 'bg-slate-600 group-hover:bg-primary-blue'}`}></div>
                          <div className={`absolute w-[2px] h-3.5 transition-all duration-300 rounded-full ${isOpen ? 'bg-white rotate-90 scale-0' : 'bg-slate-600 group-hover:bg-primary-blue scale-100'}`}></div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="pb-8 pr-12 text-slate-500 text-[15px] font-medium leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMBINED CTA & FOOTER SECTION */}
        <Footer
          className="bg-black pt-24"
          brandName="NAPCEN"
          brandDescription="Industrial Air Pollution Control Equipment & Engineering Solutions. Built around the application, not just the equipment."
          creatorName="NAPCEN Team"
          creatorUrl="#"
          navLinks={[
            { label: "Applications", href: "#applications" },
            { label: "Products", href: "#products" },
            { label: "Engineering", href: "#engineering" },
            { label: "Industries", href: "#industries" },
            { label: "FAQ", href: "#faq" },
            { label: "Enquire", href: "#contact" },
          ]}
          socialLinks={[
            { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" },
            { icon: <Users className="w-5 h-5" />, href: "#", label: "LinkedIn" },
            { icon: <Mail className="w-5 h-5" />, href: "#contact", label: "Email" },
          ]}
          brandIcon={<Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={80} height={80} className="object-contain p-2" />}
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-20 border-b border-white/10 pb-20">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

              {/* Left Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-xl">
                <span className="text-white font-mono text-[11px] tracking-[0.3em] uppercase mb-6 block">
                  Let's Build Together
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Need industrial air <br className="hidden md:block" />
                  pollution control equipment?
                </h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Start a technical discussion with NAPCEN engineers. We analyze your process to provide the most effective pollution control solution.
                </p>

                {/* Contact Minimal Blocks */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Phone className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">SALES INQUIRY</div>
                        <a href="tel:+917904469219" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block">
                          +91 79044 69219
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Mail className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">GENERAL SUPPORT</div>
                        <a href="mailto:info@napcen.com" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block">
                          info@napcen.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0 mt-1">
                      <MapPin className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block leading-relaxed">
                        No. 42, Main Road, Villianur,<br />
                        Puducherry, India - 605110
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column (Dark Sleek Card) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative z-10 overflow-hidden group">
                {/* Glow effect */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

                <h3 className="text-3xl font-bold text-white mb-4 relative z-10 tracking-tight">Request a quotation</h3>
                <p className="text-slate-400 mb-10 font-medium leading-relaxed relative z-10">
                  Provide your process specifications, and our engineers will evaluate the requirements for a customized solution.
                </p>
                <a href="mailto:info@napcen.com" className="relative z-10 flex w-full justify-between items-center bg-white hover:bg-slate-200 text-black font-black py-4 px-8 rounded-full transition-all text-sm tracking-widest uppercase group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span>Get my quotation</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Privacy Disclaimer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <h4 className="text-slate-300 font-bold text-sm mb-2">Enquiry data & privacy</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-4xl">
                This preview processes form values in your browser to prepare a message. It does not upload or store your form entries on this website. If you choose WhatsApp or email, the information you review is passed to that service when you open it and sent to NAPCEN only when you confirm Send. Contact <a href="mailto:info@napcen.com" className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors">info@napcen.com</a> about handling of enquiries. No advertising conversion tag is installed in this preview.
              </p>
            </div>
          </div>
        </Footer>
      </main>
    </div>
  );
}
