import React, { useState, useRef } from "react";

const SectionFifth = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section 
      data-slice-type="home_page_showreel" 
      data-slice-variation="default" 
      className="home-page-showreel relative"
    >
      <div className="showreel-container">
        <div className="video-container">
          <video
            ref={videoRef}
            src="https://player.vimeo.com/progressive_redirect/playback/1065815193/rendition/1080p/file.mp4?loc=external&log_user=0&signature=89bb8fec92eecacdcdba2d28127b89c7b4b33e8fc869f2f60a1464b6d4e8f8b6&user_id=308755"
            playsInline
            loop
            muted
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
            className="project-video"
            preload="auto"
            data-video="5"
            onEnded={handleVideoEnd}
          />
        </div>
        
        {!isPlaying && (
          <div className="home-hero-video-cta" onClick={togglePlay}>
            <svg 
              width="10" 
              height="13" 
              viewBox="0 0 10 13" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M0 13L10 6.5L0 0V13Z" fill="white" />
            </svg>
            <span className="video-cta-text">Play Showreel</span>
          </div>
        )}
        
        {isPlaying && (
          <button 
            className="video-pause-button" 
            onClick={togglePlay}
            aria-label="Pause video"
          >
            <svg 
              width="12" 
              height="14" 
              viewBox="0 0 12 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="0" y="0" width="4" height="14" fill="white" />
              <rect x="8" y="0" width="4" height="14" fill="white" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default SectionFifth;