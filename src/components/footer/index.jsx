import React, { useEffect, useRef } from "react";
import { Arrow, Border } from "../icons/headerIcons";
import MainLogo from "@/icons/MainLogo";
import { Bebas_Neue } from "next/font/google";
import { FOOTER_BLOCKS } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  const footerRef = useRef(null);
  const borderArrowRef = useRef(null);
  const arrowRef = useRef(null);
  const ctaContainerRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;
    if (!arrowRef.current) return;

    const ctx = gsap.context(() => {
      // Border animation - small to actual size
      gsap.fromTo(
        ".cta-border-arrow-border",
        {
          scale: 0.8,
          opacity: 0,
          rotation: -10,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".footer-top",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Arrow animation - initial scroll animation
      gsap.fromTo(
        arrowRef.current,
        {
          scale: 0.7,
          opacity: 0,
          rotation: -20,
          x: -20,
          y: 20,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 45, // Ends at 45deg for hover start position
          x: 0,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".footer-top",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Mouse event handlers
      const handleMouseEnter = () => {
        gsap.to(arrowRef.current, {
          rotation: 0,
          duration: 0.6,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(arrowRef.current, {
          rotation: 45,
          duration: 0.4,
          ease: "power2.inOut",
          overwrite: true,
        });
      };

      // Add event listeners to the container element
      const contactLink = ctaContainerRef.current;
      if (contactLink) {
        contactLink.addEventListener("mouseenter", handleMouseEnter);
        contactLink.addEventListener("mouseleave", handleMouseLeave);
      }

      // Additional arrow animations for other arrows in footer
      gsap.fromTo(
        ".footer-contact-subtitle .arrow",
        {
          scale: 0.8,
          opacity: 0,
          rotation: -30,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: ".footer-center-top",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Back to top arrow animation
      gsap.fromTo(
        ".footer-back-to-top .arrow",
        {
          scale: 0,
          opacity: 0,
          rotation: 180,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".footer-bottom",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none none",
          },
        }
      );
    }, footerRef.current);

    return () => {
      ctx.revert();
      // Clean up event listeners
      const contactLink = ctaContainerRef.current;
      if (contactLink) {
        contactLink.removeEventListener("mouseenter", handleMouseEnter);
        contactLink.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="main-footer"
      className={`${bebasNeue.className} grid-padding`}
      data-slice-type="footer"
      data-slice-variation="default"
    >
      <div className="footer-top">
        <div className="footer-contact-text">
          <div className="footer-contact-surtitle">(Contact)</div>
          <div className="footer-contact-title">
            <div className="contact-title-split">
              <span>Ready</span> <span>to</span> <span>discuss</span>
            </div>
            <div className="contact-title-split">
              <span>your</span> <span>next</span> <span>project?</span>
            </div>
          </div>
        </div>
        <a
          href="/contact"
          className="cta-border-arrow footer-top-img"
          ref={ctaContainerRef}
          style={{ cursor: "pointer" }}
        >
          <Border ref={borderArrowRef} className="cta-border-arrow-border" />
          <Arrow
            ref={arrowRef}
            width="154"
            height="150"
            className="cta-border-arrow-arrow arrow"
          />
        </a>
      </div>

      <div className="footer-center" style={{ "--border-width": "100%" }}>
        <div className="footer-center-top">
          <a
            href="/contact"
            className="link-with-arrow footer-contact-subtitle"
          >
            <div className="arrow-link">
              <Border className="border" />
              <Arrow width="154" height="150" className="arrow" />
              <Arrow width="154" height="150" className="arrow arrow-bis" />
            </div>
            <span>Work with us</span>
          </a>
        </div>

        <div className="footer-center-bottom">
          {Object.entries(FOOTER_BLOCKS).map(([key, { title, content }]) => (
            <div key={key} className={`footer-block footer-${key}`}>
              <p>
                {key === "hello" || key === "menu" ? (
                  <strong>{title}</strong>
                ) : (
                  title
                )}
              </p>
              {content}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-top">
          <MainLogo width="167" height="35" />
        </div>

        <div className="footer-bottom-bottom">
          <div className="footer-credits">
            <div className="footer-credits-1">
              <p>
                All content © <br />
                Inertia Studios Ltd 2025
              </p>
            </div>
            <div className="footer-credits-2">
              <p>
                Website by{" "}
                <a
                  href="https://okeystudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Okey Studio
                </a>
              </p>
            </div>
          </div>

          <div className="footer-back-to-top">
            <span className="txt">
              <span className="inner with-data-text">Back to top</span>
              <div className="txt-img">
                <Arrow className="inner-arrow" />
                <Arrow className="inner-arrow inner-arrow-bis" />
              </div>
            </span>
            <span className="picto">
              <Arrow className="arrow" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
