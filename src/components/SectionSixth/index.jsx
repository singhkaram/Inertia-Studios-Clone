import React, { useEffect, useRef } from "react";
import { Arrow, Border } from "../icons/headerIcons";
import { insightsData } from "@/data";
import gsap from "gsap";

const SectionSixth = () => {
  const insightTitleRef = useRef(null);

  useEffect(() => {
    if (!insightTitleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate each word from x: -20 to x: 0
      gsap.fromTo(
        ".other-title-word",
        {
          marginLeft: 0,
          x: -20, // Start 20px to the left
          opacity: 0,
        },
        {
          x: 0, // Move to original position (0)
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insight-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, insightTitleRef.current);

    return () => ctx.revert();
  }, []);
  // Data structure for insights items

  // Arrow component for CTA buttons
  const ArrowButton = ({ href, className = "" }) => (
    <a href={href} className={`cta-border-arrow ${className}`}>
      <Arrow width="154" height="150" className="cta-border-arrow-arrow" />
      {/* <Arrow width="154" height="150" className="cta-border-arrow-arrow" /> */}
    </a>
  );

  // Responsive Image component
  const ResponsiveImage = ({ image, className = "" }) => (
    <picture className={`resp-img-ctn ${className}`}>
      {image.sources.map((source, index) => (
        <source key={index} srcSet={source.srcset} media={source.media} />
      ))}
      <img
        className="responsive-img-el"
        src={image.src}
        alt={image.alt}
        width="637"
        height="440"
        loading="lazy"
      />
    </picture>
  );

  // Main Insight Item component
  const InsightItem = ({ item, index, isMobile = false }) => (
    <div className={`perception-item home-project-${index + 1}`}>
      <div className="perception-top">
        <div className="perception-cat">
          <div className="split-overflow">
            <div>{item.category}</div>
          </div>
        </div>
        <div className="perception-date">
          <div className="split-overflow">
            <div>{item.date}</div>
          </div>
        </div>
      </div>

      <div className="perception-center">
        <a href={item.href}>
          <ResponsiveImage image={item.image} />
        </a>
        <div className={`perception-cta ${isMobile ? "" : "left-align"}`}>
          <ArrowButton href={item.href} />
        </div>
      </div>

      {isMobile && (
        <a href={item.href} className="perception-bottom">
          <div className="text-thumbail-line">{item.title}</div>
        </a>
      )}
    </div>
  );

  // Inline Project component for right column
  const InlineProject = ({ item, index }) => (
    <div className={`inline-project inline-project-${index + 1}`}>
      <div className="cat">
        <div className="inner">{item.category}</div>
      </div>
      <a href={item.href} className="name">
        {item.title.split(" - ").map((line, i) => (
          <div key={i} className="name-line">
            <div className="inner">{line}</div>
          </div>
        ))}
      </a>
    </div>
  );

  // See All Link component
  const SeeAllLink = () => (
    <a href="/insights" className="link-with-arrow">
      <div className="arrow-link">
        <Border className="border" />
        <Arrow width="154" height="150" className="arrow" />
        <Arrow width="154" height="150" className="arrow arrow-bis" />
      </div>
      <span>See all Insights</span>
    </a>
  );

  return (
    <section
      data-slice-type="latest_insights"
      data-slice-variation="default"
      className="insights grid-padding"
    >
      {/* Top Section */}
      <div className="insights-top">
        <div className="insights-top-left">
          <div className="insight-title" ref={insightTitleRef}>
            <p>
              <span className="other-title-word">Ideas</span>
              <span className="other-title-word">in</span>
              <span className="other-title-word">motion</span>
            </p>
          </div>
          <div className="insight-desc">
            <p>
              Explore our latest research, creative experiments, and studio
              news.
            </p>
          </div>
        </div>
        <div>
          <div className="insights-surtitle">
            <p>studio insights</p>
          </div>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="insights-content">
        <div className="insights-left">
          {insightsData.map((item, index) => (
            <InsightItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <div className="insights-right">
          <div className="insights-right-inlines">
            {insightsData.map((item, index) => (
              <InlineProject key={item.id} item={item} index={index} />
            ))}
          </div>
          <SeeAllLink />
        </div>
      </div>

      {/* Mobile Content */}
      <div className="insights-content-mobile">
        {insightsData.map((item, index) => (
          <InsightItem
            key={item.id}
            item={item}
            index={index}
            isMobile={true}
          />
        ))}
        <SeeAllLink />
      </div>
    </section>
  );
};

export default SectionSixth;
