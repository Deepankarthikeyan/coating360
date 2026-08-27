 
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import siteContent from "../../../data/siteContent";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.props.children.length);
    }
  }, []);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true, 
    beforeChange: (_current: number, next: number) => setCurrentSlide(next),
  };

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
                    <h1 className="hero-title text-white">{slide.title}</h1>
                    <p className="hero-text text-white">{slide.text}</p>
                    <div className="btn-group">
                      <Link to="/about" className="btn style2">
                        Discover More <i className="ri-arrow-right-up-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-thumb text-center">
              <img src={slide.thumb} alt={siteContent.brand.name} loading={index === 0 ? "eager" : "lazy"} />
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
      <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}>
      </div>
      <div className="section-animation-shape1-2 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}>
      </div>

      <div className="hero-shape1-1 shape-mockup movingX">
        <img src="/assets/img/hero/hero_shape_1_1.png" alt="" loading="lazy" />
      </div>

      <div
        className="hero-experience-wrap"
        style={{
          backgroundImage: "url('/assets/img/hero/hero_experience_wrap_bg_1_1.png')",
        }}
      >
        <span className="shadow-text">Complete Solutions</span>
        <div className="hero-experience-icon">
          <img src="/assets/img/hero/hero_experience_wrap_icon_1_1.png" alt="" loading="lazy" />
        </div>
        <h2 className="hero-experience-counter">
          <span className="counter-number">
            <CountUp start={0} end={8} />
          </span>
          +
        </h2>
        <p className="hero-experience-text">Core service categories under one roof</p>
        <div className="media">
          <div className="icon">
            <img src="/assets/img/hero/hero_experience_wrap_icon_1_2.png" alt="" loading="lazy" />
          </div>
          <Link className="link-btn link-text" to="/contact">
            Let's protect what you build{" "}<img src="/assets/img/icon/long-arrow-right.png" alt="" loading="lazy" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
