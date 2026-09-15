 
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import siteContent from "../../../data/siteContent";

const AboutThree = () => {
  const { about, brand } = siteContent;

  return (
    <div className="about-area-2 space-top overflow-hidden">
      <div className="container">
        <div className="row gx-60 align-items-center flex-row-reverse">
          <div className="col-xl-6">
            <div className="about-thumb2 mb-60 mb-xl-0">
              <div className="about-img-1">
                <img src="/assets/img/normal/about_2-1.png" alt={brand.name} loading="lazy" />
              </div>
              <div className="about-counter-wrap style2 jump-reverse">
                <div className="about-counter-wrap-bg">
                  <img src="/assets/img/normal/about_shape_2-2.png" alt="" loading="lazy" />
                </div>
                <div className="about-counter-icon">
                  <img
                    src="/assets/img/hero/hero_experience_wrap_icon_1_1.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <h3 className="about-counter-number">
                  <span className="counter-number"><CountUp start={0} end={360} /></span>°
                </h3>
                <p className="about-counter-text">Complete Coating Solutions</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-25">
              <span className="sub-title">
                <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
                {about.subtitle}
              </span>
              <h2 className="sec-title">{about.title.toUpperCase()}</h2>
              <p className="sec-text">{about.text}</p>
              <p className="sec-text mt-20">{about.approach.text}</p>
            </div>
            <div className="checklist mb-35">
              <ul>
                {about.checklist.map((item) => (
                  <li key={item}>
                    <img src="/assets/img/icon/about-checklsit-icon1-1.svg" alt="" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-grid-wrap">
              <div className="icon">
                <img src="/assets/img/icon/about-grid-icon1-1.svg" alt="" />
              </div>
              <div className="about-grid-details">
                <h4 className="title">{about.mission.title}</h4>
                <p className="text">{about.mission.text}</p>
              </div>
            </div>
            <div className="about-grid-wrap">
              <div className="icon">
                <img src="/assets/img/icon/about-grid-icon1-2.svg" alt="" />
              </div>
              <div className="about-grid-details">
                <h4 className="title">{about.approach.title}</h4>
                <p className="text">{about.approach.text}</p>
              </div>
            </div>
            <div className="btn-group mt-60">
              <Link to="/contact" className="btn style3">
                Contact Us <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
