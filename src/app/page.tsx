"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Droplet, Wind, Grip, Fan, Table, Beaker, RefreshCcw, Share2, Leaf, Shield, Settings, BarChart3, Phone, Mail, MapPin, ChevronRight, Target, Sliders, Layers, Briefcase, Factory, LifeBuoy, Globe, Users, FileText, Send, Cloud, FlaskConical, Pill, Car, PaintRoller, Utensils, Cpu, Scissors, Gem, FileSearch, MonitorCog, Wrench, Headset } from "lucide-react";
import { Footer } from "@/components/ui/modem-animated-footer";
import ThreeBackground from "@/components/napcen-landing/ThreeBackground";

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
    name: "", company: "", email: "", phone: "", industry: "", application: "", equipment: "", desc: ""
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a design prototype. Connect the form to NAPCEN's email/CRM/WhatsApp workflow before publishing.");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-napcean-blue selection:text-white">
      {/* TOPBAR */}
      <div className="hidden md:block bg-[#0f1b3a] text-slate-300 text-xs py-2 border-b border-white/10">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          <span>Industrial Air Pollution Control Equipment & Engineering Solutions</span>
          <span className="font-medium text-napcean-blue">India | Request a Technical Consultation</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <a href="#" className="flex items-center gap-3">
            <Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={140} height={50} className="object-contain" />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
            {['Solutions', 'Products', 'Applications', 'Industries', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-napcean-blue transition-colors">{item}</a>
            ))}
          </nav>

          <a href="#contact" className="hidden md:inline-flex bg-primary-blue hover:bg-blue-700 text-white text-sm font-bold py-3 px-6 rounded-full transition-all shadow-napcean-button hover:shadow-button-blue-hover">
            REQUEST A QUOTE
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-white overflow-hidden pt-28 pb-12">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-20 right-40 w-64 h-64 border border-blue-100 rounded-full opacity-50" />
            <div className="absolute top-40 right-20 w-[500px] h-[500px] border border-blue-50 rounded-full opacity-50" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-center lg:items-stretch min-h-[600px]">

              {/* LEFT: TEXT & STATS */}
              <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center pt-10">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    Industrial Air Pollution Control
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-6">
                  Engineered<br />solutions for <br />
                  <span className="text-primary-blue">cleaner<br />industrial air.</span>
                </h1>

                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  NAPCEN designs and manufactures air pollution control equipment for dust, fumes, gases, vapours and process exhaust applications across industrial environments.
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-16">
                  <a href="#contact" className="bg-primary-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl text-sm flex items-center gap-2">
                    REQUEST A QUOTE <ChevronRight size={16} />
                  </a>
                  <a href="#video" className="bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold py-4 px-8 rounded-full transition-all shadow-sm text-sm flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-800 text-white flex items-center justify-center pl-0.5">
                      <div className="w-2 h-2 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent" />
                    </div>
                    WATCH VIDEO
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-4 border-t border-slate-200 pt-8">
                  <div>
                    <div className="text-2xl font-black text-[#0f1b3a] mb-1">20+</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#0f1b3a] mb-1">500+</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Installations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#0f1b3a] mb-1">30+</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Industries Served</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#0f1b3a] mb-1">100%</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Committed to Cleaner Air</div>
                  </div>
                </div>
              </div>

              {/* CENTER: IMAGE */}
              <div className="w-full lg:w-[25%] xl:w-[30%] relative hidden lg:flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] max-w-[600px] z-10 pointer-events-none">
                  <Image src="https://res.cloudinary.com/defqgygsf/image/upload/v1790179841/0296_rfuykp.png" alt="Industrial Scrubber Equipment" width={600} height={800} className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl" />
                </div>
              </div>

              {/* RIGHT: FORM */}
              <div className="w-full lg:w-[30%] relative z-20 flex flex-col justify-center mt-12 lg:mt-0" id="contact">
                <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-0.5 bg-primary-blue" />
                    <span className="text-slate-500 font-bold text-[10px] tracking-[0.2em] uppercase">LET'S WORK TOGETHER</span>
                  </div>

                  <h3 className="text-2xl font-black text-[#0f1b3a] mb-3">Tell us your requirement</h3>
                  <p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">Share your process or pollution-control requirement. Our team can review the application and contact you.</p>

                  <form onSubmit={handleDemoSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Users size={14} /></div>
                        <input required placeholder="Full Name*" className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" />
                      </div>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Briefcase size={14} /></div>
                        <input required placeholder="Company Name*" className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Mail size={14} /></div>
                        <input required type="email" placeholder="Business Email*" className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" />
                      </div>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Phone size={14} /></div>
                        <input required placeholder="Phone / WhatsApp*" className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Factory size={14} /></div>
                        <select required className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs focus:outline-none focus:border-primary-blue text-slate-500 transition-all appearance-none">
                          <option value="">Industry*</option>
                          <option>Chemical</option><option>Metal & Engineering</option><option>Other</option>
                        </select>
                      </div>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Layers size={14} /></div>
                        <select className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs focus:outline-none focus:border-primary-blue text-slate-500 transition-all appearance-none">
                          <option value="">Application</option>
                          <option>Dust</option><option>Fumes</option><option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Settings size={14} /></div>
                      <select className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-8 py-2.5 text-xs focus:outline-none focus:border-primary-blue text-slate-500 transition-all appearance-none">
                        <option value="">Equipment Required</option>
                        <option>Wet Scrubber</option>
                        <option>Dry Scrubber</option>
                        <option>Dust Collector</option>
                        <option>Fume Extractor</option>
                        <option>Downdraft Table</option>
                        <option>Fume Hood</option>
                        <option>Industrial Blower</option>
                        <option>Ventilation / Ducting</option>
                        <option>Complete APC System</option>
                        <option>Not Sure</option>
                      </select>
                    </div>
                    <div className="relative">
                      <div className="absolute left-3 top-3 text-slate-400"><FileText size={14} /></div>
                      <textarea placeholder="Briefly describe your process, pollutant or requirement" className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-3 text-xs focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all min-h-[80px] resize-none" />
                    </div>

                    <button type="submit" className="w-full bg-[#0a5cbb] hover:bg-primary-blue text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-2 text-xs flex items-center justify-center gap-2">
                      <Send size={14} /> GET MY QUOTATION
                    </button>
                  </form>

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


        {/* SOLUTIONS SECTION */}
        <section id="solutions" className="py-24 bg-white relative overflow-hidden">
          <div className="w-full px-6 md:px-12 2xl:px-24">

            {/* Header Area */}
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center mb-16 relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl">
                <div className="mb-4">
                  <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase">START WITH THE PROBLEM</span>
                </div>
                <h2 className="text-5xl md:text-[4rem] font-black text-slate-800 leading-[1.05] mb-6 tracking-tight">
                  What are you trying <br />
                  <span className="text-primary-blue">to control?</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                  <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                    Industrial buyers often search by the pollution problem first. Guide visitors from their process requirement to the appropriate solution.
                  </p>
                  <div className="flex flex-col gap-2 md:border-l-2 border-slate-200 md:pl-6">
                    <a href="#contact" className="bg-primary-blue text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap">
                      Explore All Solutions →
                    </a>
                    <span className="text-xs text-slate-400 font-bold tracking-wide mt-1">Cleaner Processes.<br />A Safer Tomorrow.</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Problem Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
              {[
                { title: "Dust & Particulate", desc: "Industrial dust collection for manufacturing, grinding, material handling and process operations.", icon: Grip, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177034/banner01_oz1rwt.png" },
                { title: "Industrial Fumes", desc: "Source-capture and extraction systems for welding, fabrication, heating and manufacturing processes.", icon: Wind, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177034/banner2_lu8yh2.png" },
                { title: "Gases & Vapours", desc: "Scrubbing and exhaust-treatment solutions selected according to pollutant and process conditions.", icon: Share2, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177033/banner3_kwzfrf.png" },
                { title: "Oil Mist", desc: "Extraction and collection solutions for machining and metalworking environments.", icon: Droplet, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177032/banner4_fqpxae.png" },
                { title: "Process Exhaust", desc: "Industrial extraction, ventilation and treatment systems for process-generated exhaust.", icon: Fan, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177034/banner5_jf92ee.png" },
                { title: "Odour & Vapour", desc: "Application-specific control solutions based on the characteristics of the exhaust stream.", icon: Leaf, bgImage: "https://res.cloudinary.com/defqgygsf/image/upload/v1790177177/banner6_powngt.png" }
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
                        <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-primary-blue hover:text-blue-700 transition-colors group-hover:translate-x-1 duration-300">
                          Explore solutions →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Footer for Solutions Section */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-8">

              <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-12 w-full lg:w-auto justify-between">
                {[
                  { title: "Improved Air Quality", subtitle: "Healthier People", icon: Shield },
                  { title: "Compliant Operations", subtitle: "Meet Emission Standards", icon: Settings },
                  { title: "Sustainable Growth", subtitle: "Cleaner Tomorrow", icon: Leaf },
                  { title: "Industry Expertise", subtitle: "Proven Solutions", icon: BarChart3 },
                ].map((feature, i) => {
                  const FIcon = feature.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-primary-blue"><FIcon size={24} strokeWidth={1.5} /></div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-700">{feature.title}</span>
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{feature.subtitle}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* APPLICATIONS SECTION */}
        <section id="applications" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
              <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                APPLICATIONS
              </span>
              <h2 className="text-5xl md:text-[4rem] font-black text-slate-800 leading-[1.05] mb-6 tracking-tight">
                Solutions by industrial application
              </h2>
              <p className="text-slate-500 text-lg">
                Build search visibility around real customer problems and process requirements.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Welding Fume Extraction", desc: "Source capture for welding and fabrication operations." },
                { title: "Grinding & Buffing Dust", desc: "Dust capture for grinding, polishing and finishing operations." },
                { title: "Laser & Plasma Fumes", desc: "Extraction for cutting and thermal processing applications." },
                { title: "CNC / Oil Mist", desc: "Oil mist and process-aerosol collection for machining operations." },
                { title: "Chemical Fume Control", desc: "Application-specific treatment for suitable chemical-process exhaust." },
                { title: "Process Exhaust Treatment", desc: "Extraction and treatment systems for industrial exhaust streams." }
              ].map((app, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-[#0f1b3a] mb-3">{app.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{app.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-24 bg-white relative overflow-hidden">
          <div className="w-full px-4 md:px-8 xl:px-12 2xl:px-16">
            {/* Header Area */}
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-center mb-16 relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-3xl">
                <div className="mb-4">
                  <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase">Equipment</span>
                </div>
                <h2 className="text-5xl md:text-[4rem] font-black text-slate-800 leading-[1.05] mb-6 tracking-tight">
                  Air Pollution Control <br />
                  <span className="text-primary-blue">Equipment</span>
                </h2>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
                  A focused product range for industrial dust, fume, gas and process-exhaust control applications.
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
                { title: "Wet Scrubbers", desc: "Wet scrubbing systems for selected particulate, fume and gaseous pollutant-control applications.", icon: Droplet, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175868/napcen1-removebg-preview_vwj9wi.png" },
                { title: "Dry Scrubbers", desc: "Dry treatment systems for suitable industrial gas and particulate applications.", icon: Wind, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175866/napcen2-removebg-preview_x2nmtd.png" },
                { title: "Dust Collectors", desc: "Industrial dust collection systems for process-generated particulate matter.", icon: Grip, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175866/napcen3-removebg-preview_pektvs.png" },
                { title: "Fume Extractors", desc: "Source-capture extraction for welding, fabrication, soldering and industrial processes.", icon: Fan, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175866/napcen4-removebg-preview_kgiu8h.png" },
                { title: "Downdraft Tables", desc: "Workstation extraction for grinding, sanding and other dust- or fume-generating operations.", icon: Table, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175866/napcen5-removebg-preview_af4c6d.png" },
                { title: "Fume Hoods", desc: "Extraction enclosures designed to capture process-generated contaminants at source.", icon: Beaker, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175866/napcen6-removebg-preview_sosenw.png" },
                { title: "Industrial Blowers", desc: "Air-moving equipment selected for required airflow and pressure in extraction systems.", icon: Fan, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175867/napcen7-removebg-preview_tqczhg.png" },
                { title: "Ventilation & Ducting", desc: "Industrial ducting and ventilation solutions for effective air movement and pollutant extraction.", icon: RefreshCcw, image: "https://res.cloudinary.com/defqgygsf/image/upload/v1790175868/napcen8-removebg-preview_fvhqxs.png" }
              ].map((item, i) => {
                const Icon = item.icon;
                const isHighlight = false;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 lg:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden min-h-[420px] flex flex-col">
                    {/* Top row: Number and Icon */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="text-8xl md:text-9xl font-black text-slate-200 group-hover:text-primary-blue/20 transition-colors tracking-tighter">0{i + 1}</div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isHighlight ? 'bg-primary-blue/10 text-primary-blue' : 'bg-slate-50 text-slate-400'} group-hover:bg-primary-blue group-hover:text-white transition-colors`}>
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 flex-1 flex flex-col">
                      <h3 className="text-2xl font-black mb-3 text-slate-800">{item.title}</h3>
                      <p className="text-slate-600 text-base font-medium leading-relaxed mb-12 pr-4 lg:pr-12">{item.desc}</p>

                      <div className="mt-auto">
                        <a href="#contact" className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all
                          ${isHighlight ? 'bg-primary-blue text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600' : 'border border-slate-200 text-slate-700 hover:border-primary-blue hover:text-primary-blue bg-white/80 backdrop-blur-sm'}`}>
                          ENQUIRE →
                        </a>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
              <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                INDUSTRIES
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f1b3a] leading-tight mb-4">
                Industries we serve
              </h2>
              <p className="text-slate-500 text-lg">
                Present NAPCEN as an application-focused engineering partner across industrial sectors.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
              {[
                { title: "Chemical", subtitle: "Fumes • gases • process exhaust", icon: FlaskConical },
                { title: "Pharmaceutical", subtitle: "Dust • process extraction", icon: Pill },
                { title: "Metal & Engineering", subtitle: "Dust • fumes • machining", icon: Settings },
                { title: "Automotive", subtitle: "Welding • machining", icon: Car },
                { title: "Paint & Coatings", subtitle: "Fumes • exhaust", icon: PaintRoller },
                { title: "Food Processing", subtitle: "Dust • exhaust • odour", icon: Utensils },
                { title: "Electronics", subtitle: "Fume • process extraction", icon: Cpu },
                { title: "Textile", subtitle: "Dust • fibre extraction", icon: Scissors },
                { title: "Mining & Minerals", subtitle: "Particulate • dust", icon: Gem },
                { title: "General Manufacturing", subtitle: "Customized APC systems", icon: Factory }
              ].map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary-blue hover:shadow-md transition-all group flex flex-col justify-center cursor-default">
                    <div className="text-slate-400 group-hover:text-primary-blue transition-colors mb-4">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0f1b3a] mb-1.5">{ind.title}</h3>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wide font-medium">{ind.subtitle}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Blueprint Background Grid */}
          <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          {/* Faint industrial background elements (simulated) */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-50 to-transparent z-0"></div>

          <div className="container mx-auto px-6 max-w-[90rem] relative z-10">
            {/* Header Area */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end relative">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase">
                    ENGINEERING
                  </span>
                </div>

                <h2 className="text-5xl md:text-[4rem] font-black text-slate-800 leading-[1.05] mb-6 tracking-tight">
                  From process understanding <br className="hidden lg:block" />
                  to <span className="text-primary-blue">pollution control</span>
                </h2>

                <p className="text-slate-500 text-lg md:text-xl font-medium">
                  Show customers that NAPCEN is more than an equipment catalogue.
                </p>
              </div>
            </motion.div>

            {/* Process Flow Grid */}
            <div className="relative">
              {/* Top labels */}
              <div className="hidden lg:grid grid-cols-6 mb-8 text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase text-center relative z-0">
                <div className="col-span-2 text-left pl-6">PROCESS</div>
                <div className="col-span-1 text-primary-blue text-center">ENGINEERING</div>
                <div className="col-span-1 text-center">FABRICATION</div>
                <div className="col-span-2 text-right pr-6">INSTALLATION</div>
              </div>

              {/* Central Connector Line */}
              <div className="absolute top-[85px] left-0 right-0 h-px bg-blue-100 hidden lg:block z-0"></div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10 pt-6">
                {[
                  { title: "Understand", desc: "Study the process, pollutant and operating conditions.", icon: FileSearch, isActive: false },
                  { title: "Select", desc: "Identify the appropriate control technology.", icon: Sliders, isActive: false },
                  { title: "Engineer", desc: "Develop the equipment and system configuration.", icon: MonitorCog, isActive: true },
                  { title: "Manufacture", desc: "Build the required equipment and components.", icon: Factory, isActive: false },
                  { title: "Install", desc: "Support installation and commissioning as applicable.", icon: Wrench, isActive: false },
                  { title: "Support", desc: "Provide technical and after-sales support.", icon: Headset, isActive: false }
                ].map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="relative h-full">
                      {/* Connector arrow on the line */}
                      {i > 0 && <div className="absolute left-[-15px] top-[30px] w-2 h-2 border-t-2 border-r-2 border-blue-200 rotate-45 hidden lg:block z-20 bg-white shadow-[2px_-2px_0_white]"></div>}

                      <div className={`
                        bg-white rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-500 relative
                        ${step.isActive ? 'border-2 border-primary-blue shadow-[0_10px_40px_rgba(0,102,255,0.15)] lg:scale-[1.08] z-20' : 'border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md z-10'}
                      `}>
                        {/* Number Badge */}
                        <div className={`
                          absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shadow-sm border-4 border-[#f8fbff]
                          ${step.isActive ? 'bg-primary-blue text-white' : 'bg-slate-50 text-primary-blue'}
                        `}>
                          0{i + 1}
                        </div>

                        <div className={`
                          w-14 h-14 rounded-full flex items-center justify-center mb-6 mt-4
                          ${step.isActive ? 'text-primary-blue' : 'text-primary-blue/60'}
                        `}>
                          <Icon size={32} strokeWidth={1.5} />
                        </div>

                        <h3 className={`text-[15px] font-bold mb-3 ${step.isActive ? 'text-[#0f1b3a]' : 'text-slate-800'}`}>
                          {step.title}
                        </h3>

                        <p className={`text-[12px] leading-relaxed ${step.isActive ? 'text-slate-600' : 'text-slate-500'}`}>
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

          </div>
        </section>


        {/* WHY NAPCEN SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left Content */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                  Why NAPCEN
                </span>
                <h2 className="text-5xl md:text-[4rem] font-black text-slate-800 leading-[1.05] mb-6 tracking-tight">
                  Built around the application, <br className="hidden md:block" />
                  not just the equipment.
                </h2>

                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl mb-10 max-w-md">
                  <div className="flex gap-3">
                    <div className="text-primary-blue pt-1">
                      <Settings size={18} />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      <strong className="text-slate-800 block mb-1">Pre-launch note:</strong>
                      Use verified company capabilities, project numbers, and customer evidence here before launch.
                    </p>
                  </div>
                </div>

                <a href="#contact" className="inline-flex items-center justify-center bg-primary-blue text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider hover:bg-blue-600 shadow-md hover:shadow-lg transition-all uppercase">
                  Discuss Your Requirement
                </a>
              </motion.div>

              {/* Right Features Grid */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { title: "Application-focused engineering", icon: Target },
                  { title: "Customized equipment solutions", icon: Sliders },
                  { title: "Multiple APC technologies", icon: Layers },
                  { title: "Industrial project support", icon: Briefcase },
                  { title: "Manufacturing capability", icon: Factory },
                  { title: "Technical & after-sales support", icon: LifeBuoy }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-primary-blue transition-all shrink-0 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:scale-105">
                        <Icon size={20} strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-slate-800 font-bold text-sm leading-snug transition-colors group-hover:text-primary-blue">
                          {item.title}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12">
              <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="text-5xl md:text-[4rem] font-black text-slate-800 leading-[1.05] mb-6 tracking-tight">
                Frequently asked questions
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-3xl space-y-4">
              {[
                {
                  q: "What information is needed for an APC quotation?",
                  a: "To provide an accurate quotation, we typically need details about your manufacturing process, the type of pollutant (dust, fume, gas, etc.), airflow volume requirements, operating temperatures, and any space constraints at your facility."
                },
                {
                  q: "Can NAPCEN provide customized pollution-control equipment?",
                  a: "Yes, we specialize in engineering and manufacturing customized air pollution control systems. We understand that every industrial process is unique, and we tailor our equipment to meet your specific operational requirements and local environmental regulations."
                },
                {
                  q: "Which industries can use air pollution control equipment?",
                  a: "Our equipment serves a wide range of sectors including metalworking, woodworking, chemical processing, pharmaceuticals, food and beverage, cement, mining, and general manufacturing facilities."
                },
                {
                  q: "I am not sure which equipment I need. What should I do?",
                  a: "Don't worry. Simply contact our engineering team with a brief description of your process and the problem you're facing. We will arrange a technical consultation to assess your needs and recommend the most effective and efficient solution."
                }
              ].map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <motion.div key={i} variants={fadeInUp} className={`overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-lg rounded-2xl px-6 lg:px-8 border border-slate-100' : 'bg-transparent border-b border-slate-200 hover:bg-slate-100/50 rounded-2xl px-6 lg:px-8'}`}>
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-6 lg:py-7 text-left focus:outline-none group"
                    >
                      <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary-blue' : 'text-slate-800 group-hover:text-primary-blue'}`}>
                        {faq.q}
                      </h3>
                      <div className={`shrink-0 ml-6 flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isOpen ? 'bg-blue-50 text-primary-blue' : 'text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'}`}>
                        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight className="w-5 h-5 font-black stroke-[3]" />
                        </motion.div>
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
                          <div className="pb-8 pr-4 lg:pr-16 text-slate-500 text-[15px] font-medium leading-relaxed">
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
        </section>

        {/* COMBINED CTA & FOOTER SECTION */}
        <Footer
          className="bg-black pt-24"
          brandName="NAPCEN"
          brandDescription="Industrial Air Pollution Control Equipment & Engineering Solutions. Built around the application, not just the equipment."
          creatorName="NAPCEN Team"
          creatorUrl="#"
          navLinks={[
            { label: "Solutions", href: "#solutions" },
            { label: "Products", href: "#products" },
            { label: "Applications", href: "#applications" },
            { label: "Industries", href: "#industries" },
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
                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tighter">
                  Ready for <br />
                  cleaner air?
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
          </div>
        </Footer>
      </main>
    </div>
  );
}
