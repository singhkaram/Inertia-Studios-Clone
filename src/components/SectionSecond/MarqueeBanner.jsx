import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const MarqueeBanner = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeContent = marqueeRef.current;
    const contentWidth = marqueeContent.scrollWidth / 2; // Since we duplicated content

    // Create GSAP animation
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
        duration: 20,
      },
    });

    tl.fromTo(marqueeContent, { x: 0 }, { x: -contentWidth, duration: 20 });

    // Clean up animation when component unmounts
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="home-projects-banner">
      <div ref={marqueeRef} className="home-projects-banner-content">
        <span>Case studies</span>
        <span>Featured Projects</span>
        <span>Case studies</span>
        <span>Featured Projects</span>
        <span>Case studies</span>
        <span>Featured Projects</span>
        <span>Case studies</span>
        <span>Featured Projects</span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
