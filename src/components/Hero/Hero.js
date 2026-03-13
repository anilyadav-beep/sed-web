// components/Hero.jsx

import React from "react";
import "./hero.css";
import WaveBackground from "../../WaveBackground";

const Hero = () => {
  return (
    <section className="hero">

      {/* <p className="tag">Next generation mobility solutions</p> */}

      <h1>
        Innovative, Reliable Control  <br />
        Products for
      </h1>

      {/* <p className="subtitle">
        We are reimagining mobility for creating a cleaner,
        smarter and safer world.
      </p> */}

      <WaveBackground />
      {/* <WaveBackground />
      <WaveBackground /> */}

    </section>
  );
};

export default Hero;