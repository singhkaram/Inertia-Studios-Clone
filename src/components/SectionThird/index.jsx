import React, { useEffect, useRef, useCallback } from "react";
import { Arrow, Border } from "../icons/headerIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SectionThird = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Animate all text elements with reveal class
      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            y: -20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate the surtitle
      gsap.fromTo(
        ".home-page-about-surtitle",
        {
          y: -15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".home-page-about-surtitle",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate taglines with stagger
      gsap.fromTo(
        ".home-page-about-tagline div",
        {
          y: -15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".home-page-about-tagline",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate CTA button
      gsap.fromTo(
        ".cta",
        {
          y: -10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".cta",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-slice-type="home_page_about"
      data-slice-variation="default"
      className="grid-padding home-page-about"
      style={{ cursor: "none", position: "relative" }}
    >
      <div className="home-page-about-content">
        <div className="home-page-about-surtitle">
          <p>
            we are <strong>inertia</strong>
          </p>
        </div>
        <div className="home-page-about-title" ref={introRef}>
          <h2>
            <div
              style={{
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="reveal">HELPING BRANDS </div>
            </div>
            <div
              style={{
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{ textAlign: "center", position: "relative" }}
                className="reveal"
              >
                MOVE THE WORLD{" "}
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{ textAlign: "center", position: "relative" }}
                className="reveal"
              >
                FORWARD
              </div>
            </div>
          </h2>
        </div>

        <div className="home-page-about-tagline">
          <div>
            <p>
              <strong>CULTURE</strong> IN MOTION
            </p>
          </div>
          <div>
            <p>
              <strong>IMPACT</strong> BY DESIGN
            </p>
          </div>
        </div>
        <a href="/contact" className="link-with-arrow cta">
          <div className="arrow-link undefined">
            <Border className="border" />
            <Arrow width="154" height="150" className="arrow" />
            <Arrow width="154" height="150" className="arrow arrow-bis" />
          </div>
          <span>Let's make something unforgettable</span>
        </a>
      </div>
    </section>
  );
};

export default SectionThird;
