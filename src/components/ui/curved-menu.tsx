"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export interface iNavItem {
  heading: string;
  href: string;
  subheading?: string;
  imgSrc?: string;
}

export interface iNavLinkProps extends iNavItem {
  setIsActive: (isActive: boolean) => void;
  index?: number;
}

export interface iCurvedNavbarProps {
  setIsActive: (isActive: boolean) => void;
  navItems: iNavItem[];
  footer?: React.ReactNode;
}

export interface iHeaderProps {
  navItems?: iNavItem[];
  footer?: React.ReactNode;
  mobileOnly?: boolean;
  className?: string;
}

const MENU_SLIDE_ANIMATION: Variants = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
  },
};

export const defaultNavItems: iNavItem[] = [
  {
    heading: "Applications",
    href: "#applications",
    subheading: "Air pollution control systems",
  },
  {
    heading: "Products",
    href: "#products",
    subheading: "Scrubbers & collectors",
  },
  {
    heading: "Engineering",
    href: "#engineering",
    subheading: "Technical specifications",
  },
  {
    heading: "Industries",
    href: "#industries",
    subheading: "Sectors we serve",
  },
  {
    heading: "FAQ",
    href: "#faq",
    subheading: "Frequently asked questions",
  },
  {
    heading: "Enquire",
    href: "#contact",
    subheading: "Request technical quotation",
  },
];



export const CustomFooter: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-6 py-4">

      <div className="flex flex-col gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
        <a
          href="tel:+917904469219"
          className="flex items-center gap-2 hover:text-emerald-600 transition-colors font-medium"
        >
          <Phone size={14} className="text-emerald-500" /> +91 79044 69219
        </a>
        <a
          href="mailto:info@napcen.com"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium"
        >
          <Mail size={14} className="text-blue-500" /> info@napcen.com
        </a>
      </div>
    </div>
  );
};

export const NavLink: React.FC<iNavLinkProps> = ({
  heading,
  href,
  subheading,
  setIsActive,
  index,
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleClick = () => {
    setIsActive(false);
  };

  const isExternalLink = href.startsWith("http");
  const linkProps = isExternalLink
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-black/10 py-3.5 transition-colors duration-300 uppercase cursor-pointer"
    >
      <Link
        ref={ref}
        onMouseMove={handleMouseMove}
        href={href}
        {...linkProps}
        className="w-full block"
      >
        <div className="relative flex flex-col">
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: 8 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.04,
              delayChildren: 0.1,
            }}
            className="relative z-10 block text-2xl sm:text-3xl font-light text-slate-900 group-hover:text-blue-600 transition-colors duration-300"
          >
            {heading.split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 6 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.span>
          {subheading && (
            <span className="text-[11px] normal-case text-slate-400 font-medium tracking-normal mt-0.5">
              {subheading}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export const Curve: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const height =
    windowHeight || (typeof window !== "undefined" ? window.innerHeight : 800);

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2
    } 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2
    } 100 0`;

  const curve: Variants = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
    },
  };

  return (
    <svg
      className="absolute top-0 -left-[99px] w-[100px] stroke-none h-full pointer-events-none"
      style={{ fill: "#ffffff" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

export const CurvedNavbar: React.FC<
  iCurvedNavbarProps & { footer?: React.ReactNode }
> = ({ setIsActive, navItems, footer }) => {
  return (
    <motion.div
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-[100dvh] w-[82vw] max-w-sm fixed right-0 top-0 z-50 bg-white shadow-2xl flex flex-col justify-between"
    >
      <div className="h-full pt-16 pb-6 px-6 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col gap-2">

          <section className="bg-transparent mt-0">
            <div className="mx-auto w-full">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.href + index}
                  {...item}
                  setIsActive={setIsActive}
                  index={index + 1}
                />
              ))}
            </div>
          </section>
        </div>
        <div className="mt-4 pt-2">{footer}</div>
      </div>
      <Curve />
    </motion.div>
  );
};

export const Header: React.FC<iHeaderProps> = ({
  navItems = defaultNavItems,
  footer = <CustomFooter />,
  mobileOnly = true,
  className = "",
}) => {
  const [isActive, setIsActive] = useState(false);
  const openAudioRef = useRef<HTMLAudioElement | null>(null);
  const closeAudioRef = useRef<HTMLAudioElement | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  const handleClick = () => {
    if (isActive) {
      closeAudioRef.current?.play()?.catch(() => { });
    } else {
      openAudioRef.current?.play()?.catch(() => { });
    }
    setIsActive(!isActive);
  };

  return (
    <>
      <audio ref={openAudioRef} preload="none" />
      <audio ref={closeAudioRef} preload="none" />

      {/* Hamburger / Close Button */}
      <div
        className={`relative ${mobileOnly ? "block md:hidden" : "block"
          } ${className}`}
      >
        <button
          type="button"
          onClick={handleClick}
          aria-label={isActive ? "Close menu" : "Open menu"}
          className="fixed right-4 top-4 z-[60] w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md hover:shadow-lg hover:bg-white transition-all active:scale-95"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-center">
            <span
              className={`block h-0.5 w-6 bg-slate-900 rounded-full transition-all duration-300 origin-center ${isActive ? "rotate-45 translate-y-[9px]" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-900 rounded-full transition-opacity duration-300 ${isActive ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-slate-900 rounded-full transition-all duration-300 origin-center ${isActive ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Overlay Backdrop & Animated Curved Menu */}
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <motion.div
              key="curved-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsActive(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40"
            />
            <CurvedNavbar
              key="curved-menu-drawer"
              setIsActive={setIsActive}
              navItems={navItems}
              footer={footer}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const DemoOne: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header mobileOnly={false} />
      <div className="text-white h-screen text-7xl text-center flex justify-center items-center">
        hello<span className="italic">!</span>
      </div>
    </div>
  );
};

export default Header;
