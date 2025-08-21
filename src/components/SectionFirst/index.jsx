import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SectionFirst = () => {
  const bottomLines = [
    { text: "A creative ", strong: "CGI studio " },
    { text: "Setting brands ", strong: "in motion" },
  ];

  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const pinSpacerRef = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.set(videoContainerRef.current, {
      position: "realative",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate the video to expand from center to full screen
    tl.to(videoContainerRef.current, {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      height: "100vh",
      zIndex: 100,
      duration: 1,
    });

    // Add text animation
    const inertiaText = document.querySelector(
      ".home-page-hero-line:first-child .home-page-hero-word"
    );
    const studiosText = document.querySelector(
      ".home-page-hero-line:last-child .home-page-hero-word"
    );

    if (inertiaText && studiosText) {
      // Store original positions
      gsap.set([inertiaText, studiosText], { x: 0 });

      // Add text animation to the timeline
      tl.to(
        inertiaText,
        {
          x: 100, // move right
          ease: "power1.out",
        },
        0
      ).to(
        studiosText,
        {
          x: -100, // move left
          ease: "power1.out",
        },
        0
      );
    }

    return () => {
      if (ScrollTrigger.getAll) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-slice-type="home_page_hero"
      data-slice-variation="default"
      className="home-page-container grid-padding"
    >
      <div ref={pinSpacerRef} className="pin-spacer">
        <div className="home-page-container-pin">
          <div className="home-page-content">
            <div className="home-page-top">
              <div className="home-page-top-ctn">
                <div className="home-page-title">
                  <div>
                    <div
                      className="home-page-hero-line md:mb-[100px]"
                      style={{ marginBottom: "100px" }}
                    >
                      <div className="home-page-hero-word">INERTIA</div>
                    </div>
                    <div
                      className="home-page-hero-line"
                      style={{ marginTop: "120px" }}
                    >
                      <div className="home-page-hero-word">STUDIOS</div>
                    </div>
                  </div>
                </div>
                <div ref={videoContainerRef} className="home-page-video-ctn">
                  <video
                    ref={videoRef}
                    src="https://player.vimeo.com/progressive_redirect/playback/1081760237/rendition/1080p/file.mp4?loc=external&log_user=0&signature=741bda2d968294df1e81eb1c5a920f1df0d2562573fde7bd94a28cf97ef1177e"
                    playsInline
                    muted
                    loop
                    data-video="0"
                    autoPlay
                  ></video>
                </div>
              </div>
            </div>
            <div className="home-page-bottom">
              <h1>
                {bottomLines.map((line, index) => (
                  <div key={index} className="home-hero-bottom-line">
                    {line.text}
                    <strong>{line.strong}</strong>
                  </div>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFirst;
