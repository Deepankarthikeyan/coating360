 
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import siteContent from "../../../data/siteContent";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<any>(null);
  const { images } = siteContent;

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.props.children.length);
    }
  }, []);

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    fade: true,
    waitForAnimate: true,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const isActive = (index: number) => currentSlide === index;

  return (
    <div
      className="hero-wrapper hero-1 shape-mockup-wrap background-image"
      id="hero"
      style={{ backgroundImage: "url('/assets/img/hero/hero_bg_1_1.png')" }}
    >
      <Slider {...settings} ref={sliderRef} className="hero-slider1">
        {siteContent.heroSlides.map((slide, index) => (
          <div className="hero-slide" key={slide.title}>
            <div className={`container${index === 0 ? " larger-no-space" : ""}`}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-style1">
                    <h1
                      className={`hero-title text-white slider-custom-anim-left ${isActive(index) ? "slider-animated" : ""}`}
                      style={{ animationDelay: "0.1s" }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className={`hero-text text-white slider-custom-anim-left ${isActive(index) ? "slider-animated" : ""}`}
                      style={{ animationDelay: "0.3s" }}
                    >
                      {slide.text}
                    </p>
                    <div
                      className={`btn-group slider-custom-anim-left ${isActive(index) ? "slider-animated" : ""}`}
                      style={{ animationDelay: "0.5s" }}
                    >
                      <a href="#about-sec" className="btn style2">
                        Discover More <i className="ri-arrow-right-up-line"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`hero-thumb text-center slideinright ${isActive(index) ? "slider-animated" : ""}`}
              style={{ animationDelay: "0.4s" }}
            >
              <img
                src={images.heroSlides[index]}
                alt={siteContent.brand.name}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </Slider>

      <div className="slider-controller-wrap">
        <div className="slider-btn-wrap">
          <div className="icon-box">
            <button onClick={goToPrev} className="slick-arrow default" aria-label="Previous slide">
              <i className="ri-arrow-left-down-line"></i>
            </button>
            <button onClick={goToNext} className="slick-arrow default" aria-label="Next slide">
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="slides-numbers">
            <span className="active">0{currentSlide + 1}</span> /
            <span className="total">0{totalSlides}</span>
          </div>
        </div>
      </div>

      <div className="hero-bg-shape1-1"></div>
      <div className="hero-bg-shape1-2"></div>
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}
      ></div>
      <div
        className="section-animation-shape1-2 shape-mockup animation-infinite background-image"
        style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}
      ></div>

      <div className="hero-shape1-1 shape-mockup movingX">
        <img src="/assets/img/hero/hero_shape_1_1.png" alt="" loading="lazy" />
      </div>

      <div
        className="hero-experience-wrap hero-experience-wrap--coating"
        style={{
          backgroundImage: `url('${images.heroExperience.background}')`,
        }}
      >
        <span className="shadow-text">Coating Experience</span>
        <div className="hero-experience-icon hero-experience-icon--coating">
          <img src={images.heroExperience.icon} alt="" loading="lazy" />
        </div>
        <h2 className="hero-experience-counter">
          <span className="counter-number">
            <CountUp start={0} end={8} duration={4} />
          </span>
          +
        </h2>
        <p className="hero-experience-text">Core service categories under one roof</p>
        <div className="media">
          <div className="icon hero-experience-media-icon">
            <img src={images.heroExperience.accent} alt="" loading="lazy" />
          </div>
          <a className="link-btn link-text" href="#contact-sec">
            Let&apos;s protect what you build{" "}
            <img src="/assets/img/icon/long-arrow-right.png" alt="" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
