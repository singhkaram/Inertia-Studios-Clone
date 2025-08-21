import React, { useEffect, useRef } from "react";
import { Bebas_Neue } from "next/font/google";
import { Arrow, Cross, MenuBorder } from "../icons/headerIcons";
import MainLogo from "@/icons/MainLogo";
import { NAV_ITEMS } from "@/data";
import gsap from "gsap";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const arrow = arrowRef.current;

    if (!arrow) return;

    // Hover animation
    const handleMouseEnter = () => {
      gsap.to(arrow, {
        transform: "rotate(0deg)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(arrow, {
        transform: "rotate(45deg)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners
    const contactLink = document.querySelector(".header-contact");
    if (contactLink) {
      contactLink.addEventListener("mouseenter", handleMouseEnter);
      contactLink.addEventListener("mouseleave", handleMouseLeave);
    }

    // Clean up
    return () => {
      if (contactLink) {
        contactLink.removeEventListener("mouseenter", handleMouseEnter);
        contactLink.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <header
      className={`${bebasNeue.className} grid-padding has-menu`}
      style={{ opacity: 1 }}
    >
      <div className="header-left">
        <a
          aria-current="page"
          href="/"
          className="router-link-active router-link-exact-active"
        >
          <MainLogo />
        </a>
      </div>

      <div className="header-right">
        <nav>
          <ul>
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>
                  <div className="with-data-text">{label}</div>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/contact" className="header-contact gap-1">
          <Arrow
            ref={arrowRef}
            width="15"
            height="15"
            className="img-contact-cta"
            style={{ transform: "rotate(45deg)" }}
          />
          <div className="inner-ctn">
            <div className="inner with-data-text">contact</div>
          </div>
        </a>
      </div>

      <div className="menu">
        <Cross
          className="cross"
          width="24"
          height="20"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            opacity: 0,
            transform: "rotate(90deg) scale(0)",
          }}
        />
        <MenuBorder className="menu-border" width="40" height="42" />
      </div>
    </header>
  );
};

export default Header;
