"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { svgContainerVariants, tspanVariants } from "@/utils";
import TBOT from "../components/TBOT";

const Header = () => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const firstRender = useRef(true);
  const [viewBox, setViewBox] = useState("0 -3.25 66.91 20.42");
  const [isDrag, setIsDrag] = useState(false);

  useEffect(() => {
    const updateViewBox = () => {
      if (textRef.current) {
        const bbox = textRef.current.getBBox();
        setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      }
    };

    const timeout = setTimeout(() => {
      updateViewBox();
      if (svgRef.current) {
        const observer = new ResizeObserver(updateViewBox);
        observer.observe(svgRef.current);
        return () => observer.disconnect();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-auto relative">
      {/* text */}
      <motion.svg
        ref={svgRef}
        viewBox={viewBox}
        className="w-full fill-[#292929]/10 relative cursor-default"
        initial="hidden"
        animate="visible"
        stroke={"#fff"}
        strokeWidth={"0.08"}
        preserveAspectRatio="none"
        variants={svgContainerVariants}
      >
        {/* shadows XD */}
        <defs>
          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="-79.69"
              dy="79.69"
              stdDeviation="79.69"
              floodColor="white"
              floodOpacity="0.107"
            />
            <feDropShadow
              dx="79.69"
              dy="-79.69"
              stdDeviation="79.69"
              floodColor="#1f1f1f"
              floodOpacity="0.107"
            />
          </filter>
        </defs>

        <text
          ref={textRef}
          x="0"
          y="0"
          textAnchor="start"
          lengthAdjust="spacingAndGlyphs"
          alignmentBaseline="baseline"
          dominantBaseline="hanging"
          filter="url(#innerShadow)"
        >
          {["T", "BOT"].map((text, index) => (
            <motion.tspan
              key={text}
              custom={index}
              variants={tspanVariants}
              initial="hidden"
              alignmentBaseline="baseline"
              animate="visible"
              className={"font-main"}
            >
              {text}
            </motion.tspan>
          ))}
        </text>
      </motion.svg>

      {/* model */}
      <TBOT isDrag={isDrag} setIsDrag={setIsDrag} />

      <AnimatePresence mode="wait">
        {!isDrag && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
              duration: 0.3,
              delay: firstRender.current ? 0.5 : 0.1,
            }}
            onAnimationComplete={() => {
              firstRender.current = false;
            }}
            className="sm:w-auto w-max pointer-events-none sm:py-2.5 py-1.5 sm:px-10 px-4 flex items-center justify-center xl:text-[26px] md:text-lg sm:text-sm text-xs font-medium bg-[#F2F2F2]/1 font-secondary backdrop-blur-lg text-[#323232] absolute left-1/2 xl:top-[96%] md:top-[100%] top-[105%] sm:rounded-[13px] rounded-[9px] sm:border-[2px] border-[1px] border-white -translate-1/2"
          >
            drag to rotate Tbot
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
