import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import HeroSVGLeft from "../components/SVG/HeroLeft";
import HeroSVGRight from "../components/SVG/HeroRight";
import { scrollIntoView } from "../../src/utils/utils";
import ScrollToTop from "../components/ScrollToTop";
const Hero = () => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView();
  return (
    <>
      <section
        ref={ref}
        id="home"
        className="relative z-10 pt-[120px] pb-[110px] md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] -mt-[100px]"
      >
        <div className="container">
          <div className="mx-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center fadeIn-hidden">
                <div>
                  <h1 className="text-body font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-5">
                    Welcome
                  </h1>
                  <p className="font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-sub mb-12">
                    This is an website used to book your appointments with us.
                  </p>
                </div>

                <div className="flex-center gap-6">
                  <span
                    className="btn"
                    onClick={() => scrollIntoView("features")}
                  >
                    Get Started
                  </span>
                  <span
                    className="btn text-body bg-opacity-20 hover:bg-opacity-30 text-primary-950"
                    onClick={() => scrollIntoView("about")}
                  >
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* background */}
        <div className="absolute -top-[120px] right-0 z-[-1]">
          <HeroSVGRight />
        </div>
        <div className="absolute bottom-0 left-0 z-[-1]">
          <HeroSVGLeft />
        </div>
      </section>
      <ScrollToTop inView={inView} />
    </>
  );
};

export default Hero;
