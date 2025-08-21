import React, { useRef, useState } from "react";

const ProjectItem = ({
  imageSrc,
  altText,
  videoSrc,
  title,
  subtitle,
  number,
}) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video play failed:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a className="home-projects-item-ctn">
      <div
        className="home-projects-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="img-ctn" style={{ overflow: "hidden" }}>
          <picture className="resp-img-ctn">
            <source srcSet={imageSrc} media="(min-width: 1920px)" />
            <source srcSet={imageSrc} media="(min-width: 1600px)" />
            <source srcSet={imageSrc} media="(min-width: 1240px)" />
            <source srcSet={imageSrc} media="(min-width: 768px)" />
            <source
              srcSet={imageSrc}
              media="(orientation: portrait) and (min-width: 1240px)"
            />
            <source
              srcSet={imageSrc}
              media="(orientation: portrait) and (min-width: 840px)"
            />
            <source srcSet={imageSrc} media="(min-width: 640px)" />
            <source srcSet={imageSrc} media="(min-width: 450px)" />
            <img
              className="responsive-img-el"
              src={imageSrc}
              alt={altText}
              width="640"
              height="490"
              loading="lazy"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0%, 10%) scale(1.2)",
                opacity: isHovered ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
          </picture>
          <video
            ref={videoRef}
            playsInline
            loop
            muted
            src={videoSrc}
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate(0%, 10%) scale(1.2)",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></video>
        </div>
        <div className="home-projects-info">
          <div className="home-projects-title" nb={number}>
            {title}
          </div>
          <div className="home-projects-subtitle">{subtitle}</div>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
