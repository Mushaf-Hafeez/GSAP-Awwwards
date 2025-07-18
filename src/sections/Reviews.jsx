import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cards } from "../constants";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  //   handle mouse enter function
  const handleMouseEnter = (index) => {
    setCurrentIndex(index);
    document.querySelectorAll(".card video")[index].play();
  };

  //   handle mouse leave function
  const handleMouseLeave = (index) => {
    document.querySelectorAll(".card video")[index].pause();
    setCurrentIndex(null);
  };

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#reviews",
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      })
      .to(
        "#first-heading",
        {
          xPercent: 10,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        "#second-heading",
        {
          xPercent: 10,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        "#third-heading",
        {
          xPercent: -10,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "<"
      )
      .from(
        ".card",
        {
          scale: 0.5,
          yPercent: 200,
          stagger: 0.2,
          ease: "bounce.in",
        },
        "-=1"
      );
  }, []);

  //   useEffect(() => {
  //     if (currentIndex) {
  //       document.querySelectorAll(".card video")[currentIndex].play();
  //     }
  //   }, [currentIndex]);

  return (
    <section id="reviews" className="h-screen w-full overflow-hidden">
      {/* wrapper */}
      <div className="relative w-full h-full">
        {/* text container */}
        <div className="text-[10vw] font-bold text-black flex flex-col">
          <h1 id="first-heading" className="self-end pe-20">
            WHAT'S
          </h1>
          <h1 id="second-heading" className="self-end text-light-brown pe-20">
            EVERYONE
          </h1>
          <h1 id="third-heading" className="ps-40">
            TALKING
          </h1>
        </div>

        {/* cards container */}
        <div className="absolute inset-0 h-full w-full flex items-center">
          {cards.map((card, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={index}
              className={`card h-[56vh] ${card.rotation} ${card.translation} object-contain relative border-4 border-milk rounded-2xl overflow-hidden`}
            >
              <div className="absolute bottom-0 flex items-center gap-2 ms-2 mb-2">
                <img
                  src={card.img}
                  alt="card-img"
                  className="size-10 rounded-full"
                />
                <p className="text-milk">{card.name}</p>
              </div>
              <video
                muted
                playsInLine
                loop
                className="rounded-2xl h-full w-full"
              >
                <source src={card.src} />
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
