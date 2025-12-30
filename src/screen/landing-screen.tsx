import React from "react";
import MainLayout from "../component/main-layout"
import { Parallax, ParallaxLayer, type IParallax } from "@react-spring/parallax";

import herobackground from "../assets/hero-background.jpg"
import herobackgroundsm from "../assets/hero-background-sm.png"
import herobackgroundmed from "../assets/hero-background-med.png"

import TitleComponent from "../component/landing/title-component";

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
          <img src={herobackground} alt="hero background" className="object-cover hidden md:hidden xl:flex" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
        >
          <div className="flex w-full bg-linear-to-b from-[#e8d6382a] via-[#ada23e9d] to-[#143a1def] lg:via-[#ada23eab] lg:to-[#143a1def] h-[120vw] lg:h-[55vw]" />
          <div className="flex w-full bg-linear-to-b from-[#143a1def] bg-[#246132] h-[1960vw]" />
        </ParallaxLayer>

        {/* hero section */}
        <ParallaxLayer
          offset={0}
          speed={1.2}
        >
          <div className="w-full h-screen">
            <div className="px-10 py-10 md:px-16 md:py-24 xl:px-24 xl:py-20 w-full h-full flex flex-col items-center justify-center space-y-8">
              <TitleComponent />
              <div className="gap-y-3 flex flex-col items-center">
                <h2 className="md:text-3xl text-2xl font-semibold text-white md:mb-5 mb-1 text-center">
                  Pusat Edukasi, Wisata, dan Kuliner Berbasis Penelitian
                </h2>

                <div className="md:text-[15px] text-[10px] text-white text-center">
                  <p>Pengalaman agrowisata, paket wisata penelitian, dan angkringan sebagai</p>
                  <p>hasil dari proses edukasi dan wisata.</p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>


        {/* education section */}
        {/* destination section */}
        {/* culinery section */}
        {/* destination overview section */}
        {/* reputation section */}
        {/* call to action section */}

      </Parallax>
    </MainLayout>
  );
}
