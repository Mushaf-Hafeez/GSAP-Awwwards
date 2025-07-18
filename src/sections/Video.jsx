import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Video = () => {
  const videoRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#video-container",
        start: "top top",
        end: "bottom center",
        scrub: true,
        pin: true,
      },
    });

    tl.to("#btns", {
      opacity: 0,
      ease: "power1.inOut",
    }).to(videoRef.current, {
      clipPath: "circle(70.3% at 50% 50%)",
      onStart: () => videoRef.current.play(),
      duration: 1,
      ease: "circ.inOut",
    });
  });

  return (
    <section
      id="video-container"
      className="h-screen w-full bg-black text-white"
    >
      <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          id="video"
          muted
          loop
          playsInline="true"
          className="w-full object-cover"
          style={{
            clipPath: "circle(4.5% at 50% 50%)",
          }}
        >
          <source src="/videos/pin-video.mp4" />
        </video>

        <div
          id="btns"
          className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <img
              src="/images/circle-text.svg"
              alt="circle-text"
              className="animate-spin [animation-duration:10s]"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-600/30 size-24 flex items-center justify-center rounded-full backdrop-blur-2xl">
              <img src="/images/play.svg" alt="play icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
