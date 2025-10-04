"use client";

import { useEffect, useRef, useState } from "react";

const FooterText = () => {
  const svgRef = useRef(null);
  const textRef = useRef(null);
  const [viewBox, setViewBox] = useState("-0.29 -3.24 283.52 20.37");

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
    <div className="w-full md:mt-[83px] mt-[43px] md:h-[90px] h-[30px] flex items-center justify-center overflow-hidden relative">
      <svg
        ref={svgRef}
        viewBox={viewBox}
        className="w-full fill-[#292929]/10 relative cursor-default"
        stroke={"#fff"}
        strokeWidth={"0.08"}
        preserveAspectRatio="none"
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
          <tspan alignmentBaseline="baseline" className={"font-main-med uppercase"}>
            worth checking out
          </tspan>
        </text>
      </svg>
    </div>
  );
};

export default FooterText;
