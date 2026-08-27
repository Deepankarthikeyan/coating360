 
import  { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
import siteContent from "../../../data/siteContent";

const ProcessThree = () => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = "https://www.youtube.com/embed/Q5PG0rMXgvw";
    }
    setIsActive(true);
    document.body.style.overflow = 'hidden';
  };
  return (
    <>
      <section
        className="process-area-1 space-top bg-attachment process-bg-half"
        data-overlay="title"
        data-opacity="8"
        style={{ backgroundImage: "url('/assets/img/bg/process-bg1-1.png')" }}
      >
        <div className="process_shape_1-1 movingX shape-mockup d-lg-block d-none"></div>
        <div className="process_shape_1-2 moving shape-mockup d-lg-block d-none"></div>
        <div
          className="process_shape_1-3 shape-mockup jump-reverse d-xl-block d-none"
          style={{ bottom: '-50%', right: '0px' }}
        >
          <img src="/assets/img/shape/sec-bg-shape1.png" alt="" loading="lazy" />
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="title-area text-left content-text-extra-style">
                <span className="sub-title text-white">
                  <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
                  {siteContent.process.subtitle}
                </span>
                <h2 className="sec-title text-white">
                  {siteContent.process.title}
                </h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="sec-btn text-center">
                <a onClick={openPopup}
                  className=" play-btn-wrap"
                >
                  Play Video
                  <span className="play-btn style2">
                    <i className="ri-play-fill"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="process-card-wrap">
            <div className="row gy-30 gx-30">
              {siteContent.process.steps.map((step) => (
                <div className="col-xl-3 col-md-6" key={step.number}>
                  <div className="process-card">
                    <div className="process-card-number">
                      <span> {step.number} </span>
                      STEP
                    </div>
                    <h4 className="process-card-title">{step.title}</h4>
                    <p className="process-card-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
    </>
  );
};

export default ProcessThree;
