import React from "react";
import MainLayout from "../component/main-layout"
import { Parallax, ParallaxLayer, type IParallax } from "@react-spring/parallax";

import herobackgroundxl from "../assets/hero-background-xl.png"
import herobackgroundsm from "../assets/hero-background-sm.png"
import herobackgroundmed from "../assets/hero-background-med.png"

import TitleComponent from "../component/landing/title-component";
import { Microscope, Milestone, ThumbsUp } from "lucide-react";

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
          <div className="w-full h-screen">
            <div className="px-10 py-10 md:px-16 md:py-24 xl:px-24 xl:py-20 w-full h-full flex flex-col items-center justify-center space-y-8">
              <TitleComponent />
              <div className="gap-y-3 flex flex-col items-center">
                <h2 className="md:text-4xl text-2xl font-semibold text-white md:mb-5 mb-1 text-center">
                  Lumbung Mataraman Agrowisata Imogiri Bantul, Sebagai Tempat Edukasi Wisata dan Kuliner
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
        <ParallaxLayer
          offset={1}
          speed={0.2}
        >
          <div className="flex w-full items-start justify-end lg:justify-center mb-10">
            <div className="xl:w-[70vw] lg:w-[80vw] md:w-full w-full p-5">
              <div
                className="flex w-full h-full justify-start items-center"
              >
                <div className="flex flex-col items-start">
                  <div className="p-2 bg-white w-fit border border-gray-300 rounded-md flex items-center space-x-2 text-sm mb-5">
                    <Microscope className="w-5 h-5" />
                    <p>Edukasi dan Penelitian</p>
                  </div>
                  <h1 className="md:text-2xl text-xl font-semibold text-white md:mb-10 mb-5">Sit qui laboris minim dolor ut duis velit enim <br /> quis anim et quis Lorem.</h1>

                  <div className="md:text-[18px] text-[12px] text-white">
                    <p>Incididunt aliqua excepteur qui ex voluptate voluptate ullamco quis commodo.</p>
                    <p>Incididunt mollit amet mollit sint est irure.</p>
                    <p>Non magna reprehenderit duis reprehenderit eu quis dolore ullamco exercitation culpa ipsum.</p>
                  </div>

                  <div className="lg:w-[80%] w-full bg-white lg:h-[25vw] h-[100vw] my-10 rounded-md flex justify-center items-center">Konten</div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* destination section */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
        >
          <div className="flex w-full items-start justify-end lg:justify-center">
            <div className="xl:w-[70vw] lg:w-[80vw] w-full p-5">
              <div
                className="flex w-full h-full justify-end items-center"
              >
                <div className="flex flex-col items-end text-end">
                  <div className="p-2 bg-white w-fit border border-gray-300 rounded-md flex items-center space-x-2 text-sm mb-5">
                    <Milestone className="w-5 h-5" />
                    <p>Destinasi Wisata</p>
                  </div>
                  <h1 className="md:text-2xl text-xl font-semibold text-white md:mb-10 mb-5">Sit qui laboris minim dolor ut duis velit enim <br /> quis anim et quis Lorem.</h1>

                  <div className="md:text-[18px] text-[12px] text-white">
                    <p>Incididunt aliqua excepteur qui ex voluptate voluptate ullamco quis commodo.</p>
                    <p>Incididunt mollit amet mollit sint est irure.</p>
                    <p>Non magna reprehenderit duis reprehenderit eu quis dolore ullamco exercitation culpa ipsum.</p>
                  </div>

                  <div className="lg:w-[80%] w-full bg-white lg:h-[25vw] h-[100vw] my-10 rounded-md flex justify-center items-center">Konten</div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* culinery section */}

        {/* destination overview section */}
        <ParallaxLayer
          offset={3}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="xl:w-[80vw] lg:w-[90vw] md:w-[90vw] w-[90vw] p-5 rounded-md">
            <div
              className="flex w-full h-full justify-center items-center"
            >
              <div className="flex flex-col md:flex-row items-center md:space-x-10">

                <div className="flex flex-col items-start space-y-8">
                  <div className="p-2 bg-white w-fit flex md:items-center items-start rounded-md text-sm space-x-2">
                    <ThumbsUp className="w-5 h-5" />
                    <p className="hidden md:flex">Reputasi Lumbung Mataraman</p>
                    <p className="md:hidden">Reputasi</p>
                  </div>
                  <h1 className="md:text-2xl text-1xl font-semibold text-white md:mb-10 mb-5">
                    Sit qui laboris minim dolor ut duis velit enim <br /> quis anim et quis Lorem.
                  </h1>
                </div>

                <div className="flex flex-col items-start">
                  <div className="space-y-5">
                    <div className="border-b border-white py-2">
                      <h2 className="lg:text-3xl text-2xl text-gray-200 font-bold">205 +</h2>
                      <p className="lg:text-[20px] text-[15px] text-white">Melayani Lebih dari 205 Agensi</p>
                    </div>
                    <div className="border-b border-white py-2">
                      <h2 className="lg:text-3xl text-2xl text-gray-200 font-bold">100k +</h2>
                      <p className="lg:text-[20px] text-[15px] text-white">Incididunt mollit amet mollit sint est irure</p>
                    </div>
                    <div className="border-b border-white py-2">
                      <h2 className="lg:text-3xl text-2xl text-gray-200 font-bold">302 +</h2>
                      <p className="lg:text-[20px] text-[15px] text-white">Incididunt mollit amet mollit sint est irure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        {/* reputation section */}
        {/* call to action section */}

      </Parallax>
    </MainLayout>
  );
}
