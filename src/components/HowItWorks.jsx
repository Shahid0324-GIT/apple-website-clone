import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      duration: 2,
      ease: "power2.inOut",
      opacity: 0,
      scale: 2,
    });

    gsap.to("#g_fadeIn", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding ">
      <div className="screen-max-width">
        <div className="flex-center w-full my-20" id="chip">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A Monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                autoPlay
                playsInline
                className="pointer-events-none"
                ref={videoRef}
              >
                <source src={frameVideo} type="" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p id="g_fadeIn" className="hiw-text g_fadeIn">
              A17 Pro is an entierly new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphics performance by far
              </span>
            </p>
            <p className="hiw-text g_fadeIn mt-10" id="g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>{" "}
              with incredibly detailed environments and characters.
            </p>
          </div>

          <div
            id="g_fadeIn"
            className="flex-1 flex justify-center flex-col g_fadeIn"
          >
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">With 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
