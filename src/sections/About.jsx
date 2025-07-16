import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    // split the headings into words
    const firstSplitHeading = SplitText.create("#first-heading", {
      type: "words",
    });
    const secondSplitHeading = SplitText.create("#second-heading", {
      type: "words",
    });

    // create a timeline
    const tl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom 80%",
        scrub: true,
      },
    });

    // first heading animation
    tl.from(firstSplitHeading.words, {
      opacity: 0.5,
      stagger: 0.2,
      ease: "power1.inOut",
      //   scrollTrigger: {
      //     trigger: "#first-heading",
      //     start: "top center",
      //     end: "bottom center",
      //     scrub: true,
      //   },
    })
      .to("#clip-heading", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      // second heading animation
      .from(secondSplitHeading.words, {
        opacity: 0.5,
        stagger: 0.2,
        ease: "power1.inOut",
        // scrollTrigger: {
        //   trigger: "#second-heading",
        //   start: "top center",
        //   end: "bottom center",
        //   scrub: true,
        // },
      })
      .from("#para", {
        opacity: 0,
        stagger: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section
      id="about"
      className="relative z-40 min-h-screen w-full bg-dark-brown text-milk flex justify-center"
    >
      <div className="flex flex-col h-full items-center justify-center text-center my-auto">
        <h1 id="first-heading" className="w-1/2 text-8xl font-bold">
          STIR UP YOUR FEARLESS PAST AND
        </h1>
        <h1
          id="clip-heading"
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          className="w-fit px-1 py-2 bg-light-brown text-dark-brown border-4 border-dark-brown rotate-2 text-8xl font-bold"
        >
          FUEL UP
        </h1>
        <h1 id="second-heading" className="w-7/12 text-8xl font-bold -mt-5">
          YOUR FUTURE WITH EVERY GULP OF PERFECT Protein
        </h1>
        <p id="para" className="max-w-3/12 text-center font-paragraph mt-20">
          Rev up your rebel spirit and feed the adventure of life with SPYLT,
          where you're one chug away from epic nostalgia and fearless fun.
        </p>
      </div>
    </section>
  );
};

export default About;
