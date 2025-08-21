import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { clientLogos } from "@/data";

const SectionFourth = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animation
    const ctx = gsap.context(() => {
      // Select all logo elements
      const logos = gsap.utils.toArray(".hero-client-logo");

      // Calculate total width of all logos
      let totalWidth = 0;
      logos.forEach((logo) => {
        totalWidth += logo.offsetWidth + 20; // 20px for gap
      });

      // Set up the animation timeline
      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none",
        },
      });

      // Animate the marquee
      tl.to(".home-client-logos-content", {
        x: -totalWidth / 2, // Move by half the total width (since we duplicated)
        duration: totalWidth / 50, // Adjust speed based on width
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
        },
      });
    }, marqueeRef);

    // Clean up context
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="home-client-logos-section"
      data-slice-type="home_page_clients"
      data-slice-variation="default"
      ref={marqueeRef}
    >
      <div className="home-client-logos">
        <div className="home-client-logos-content">
          {/* First set of logos */}
          {clientLogos.map((logo, index) => (
            <div key={`first-${index}`} className="hero-client-logo">
              <img
                src={logo.src}
                alt={`Logo of ${logo.name}`}
                loading="lazy"
                onError={(e) => {
                  e.target.setAttribute("data-error", 1);
                }}
              />
            </div>
          ))}

          {/* Duplicate set for seamless looping */}
          {clientLogos.map((logo, index) => (
            <div key={`second-${index}`} className="hero-client-logo">
              <img
                src={logo.src}
                alt={`Logo of ${logo.name}`}
                loading="lazy"
                onError={(e) => {
                  e.target.setAttribute("data-error", 1);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFourth;
