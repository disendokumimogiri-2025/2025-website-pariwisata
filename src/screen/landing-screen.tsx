import React from "react";
import MainLayout from "../component/main-layout"
import { Parallax, ParallaxLayer, type IParallax } from "@react-spring/parallax";

import herobackgroundxl from "../assets/hero-background-xl.png"
import herobackgroundsm from "../assets/hero-background-sm.png"
import herobackgroundmed from "../assets/hero-background-med.png"

import HeroSection from "../component/landing/hero-section";
import DestinationSection from "../component/landing/destination-section";
import ReputationSection from "../component/landing/reputation-section";
import EducationSection from "../component/landing/education-section";
import DestinationOverviewSection from "../component/landing/destinationoverview-section";
import CTASection from "../component/landing/cta-section";

export default function LandingScreen() {
  const parallaxRef = React.useRef<IParallax>(null!);
  return (
    <MainLayout>
      <Parallax ref={parallaxRef} pages={6}>

        <ParallaxLayer
          offset={0}
          speed={0}
        >
          <img src={herobackgroundsm} alt="hero background" className="object-cover flex md:hidden xl:hidden" />
          <img src={herobackgroundmed} alt="hero background" className="object-cover hidden md:flex xl:hidden" />
          <img src={herobackgroundxl} alt="hero background" className="object-cover hidden md:hidden xl:flex" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
        >
          <div className="flex w-full bg-linear-to-b from-[#e8d6382a] via-[#ada23e9d] to-[#143a1def] lg:via-[#ada23eab] lg:to-[#143a1def] h-[200vw] sm:h-[170vw] md:h-[120vw] xl:h-[42vw]" />
          <div className="flex w-full bg-linear-to-b from-[#143a1def] bg-[#246132] h-[1920vw]" />
        </ParallaxLayer>

        {/* hero section */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
        >
          <HeroSection />
        </ParallaxLayer>

        {/* education section */}
        <ParallaxLayer
          offset={1}
          speed={0.2}
        >
          <EducationSection />
        </ParallaxLayer>

        {/* destination section */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
        >
          <DestinationSection />
        </ParallaxLayer>

        {/* destination overview section */}
        <ParallaxLayer
          offset={3}
          speed={0.2}
        >
          <DestinationOverviewSection />
        </ParallaxLayer>

        {/* reputation section */}
        <ParallaxLayer
          offset={4}
          speed={0.2}
        >
          <ReputationSection />
        </ParallaxLayer>

        {/* call to action section */}
        <ParallaxLayer
          offset={5}
          speed={0.2}
        >
          <CTASection />
        </ParallaxLayer>

      </Parallax>
    </MainLayout>
  );
}
