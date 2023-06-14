"use client";
import React from "react";

interface Props {
  children: React.ReactNode
}

const Hero = ({ children }: Props): JSX.Element => {

  return (
    <section className="hero">
      <h1 className="hero__title">IP Address Tracker</h1>
      <div className="hero__content">
        {children}
      </div>
    </section>
  );
};

export default Hero;
