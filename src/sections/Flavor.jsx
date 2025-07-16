import React from "react";
import FlavorTitle from "../components/FlavorTitle";

const Flavor = () => {
  return (
    <section id="flavor" className="min-h-screen bg-milk">
      {/* main container  */}
      <div className="h-screen w-full flex gap-10 items-center my-20 px-9">
        {/* flavor title */}
        <div>
          <FlavorTitle />
        </div>
        {/* flavor slider */}
        <div>Slider</div>
      </div>
    </section>
  );
};

export default Flavor;
