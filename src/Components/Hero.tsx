import { basicsProps } from "@/interfaces/basicsProps";

const Hero = ({ children }: basicsProps): JSX.Element => {

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
