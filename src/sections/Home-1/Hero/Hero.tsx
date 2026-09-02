import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      className={`hero-wrapper hero-1 coating-hero-ship${isLoaded ? " is-loaded" : ""}`}
      id="hero"
    >
      <div className="coating-hero-ship__bg-shape coating-hero-ship__bg-shape--1" aria-hidden="true" />
      <div className="coating-hero-ship__bg-shape coating-hero-ship__bg-shape--2" aria-hidden="true" />
      <div
        className="coating-hero-ship__line-shape coating-hero-ship__line-shape--1 background-image"
        style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}
        aria-hidden="true"
      />
      <div
        className="coating-hero-ship__line-shape coating-hero-ship__line-shape--2 background-image"
        style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}
        aria-hidden="true"
      />

      <div className="container coating-hero-ship__container">
        <div className="coating-hero-ship__grid">
          <div className="coating-hero-ship__content">
            <span className="coating-hero-ship__eyebrow coating-hero-ship__animate" style={{ animationDelay: "0.1s" }}>
              MARINE &amp; INDUSTRIAL SOLUTIONS
            </span>

            <h1 className="coating-hero-ship__title coating-hero-ship__animate" style={{ animationDelay: "0.25s" }}>
              Advanced Marine &amp; Industrial
              <br />
              <span className="text-theme">Surface Solutions</span>
            </h1>

            <p className="coating-hero-ship__text coating-hero-ship__animate" style={{ animationDelay: "0.4s" }}>
              Professional surface preparation, marine coating, blasting and industrial maintenance solutions
              designed for demanding environments.
            </p>

            <div className="coating-hero-ship__actions coating-hero-ship__animate" style={{ animationDelay: "0.55s" }}>
              <a href="#service-sec" className="btn style2 coating-hero-ship__btn">
                OUR SERVICES <i className="ri-arrow-right-up-line" />
              </a>
              <a href="#contact-sec" className="btn style4 coating-hero-ship__btn">
                GET IN TOUCH <i className="ri-arrow-right-up-line" />
              </a>
            </div>

            <div className="coating-hero-ship__trust coating-hero-ship__animate" style={{ animationDelay: "0.7s" }}>
              <span className="coating-hero-ship__trust-value">8+</span>
              <span className="coating-hero-ship__trust-text">Core service categories under one roof</span>
            </div>
          </div>

          <div className="coating-hero-ship__visual">
            <div className="coating-hero-ship__visual-glow" aria-hidden="true" />
            <div className="coating-hero-ship__image-wrap">
              <img
                src="/assets/img/hero/hero_shape_1_1.png"
                alt="Marine vessel"
                className="coating-hero-ship__image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero-experience-wrap"
        style={{
          backgroundImage: "url('/assets/img/hero/hero_experience_wrap_bg_1_1.png')",
        }}
      >
        <span className="shadow-text">Coating Experience</span>
        <div className="hero-experience-icon">
          <img src="/assets/img/hero/hero_experience_wrap_icon_1_1.png" alt="" loading="lazy" />
        </div>
        <h2 className="hero-experience-counter">
          <span className="counter-number">
            <CountUp start={0} end={8} duration={4} />
          </span>
          +
        </h2>
        <p className="hero-experience-text">Core service categories under one roof</p>
        <div className="media">
          <div className="icon">
            <img src="/assets/img/hero/hero_experience_wrap_icon_1_2.png" alt="" loading="lazy" />
          </div>
          <a className="link-btn link-text" href="#contact-sec">
            Let&apos;s protect what you build{" "}
            <img src="/assets/img/icon/long-arrow-right.png" alt="" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
