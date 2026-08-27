 
import siteContent from "../../../data/siteContent";

const About = () => {
    const { about, brand, images } = siteContent;

    return (
        <div className="about-area-1 space overflow-hidden shape-mockup-wrap" id="about-sec">
            <div
                className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
                data-bottom="0"
                style={{ backgroundImage: "url('/assets/img/shape/global-line-shape2.png')", bottom: '0px' }}
            ></div>
            <div className="container">
                <div className="row gx-60 align-items-center">
                    <div className="col-xl-6">
                        <div className="about-thumb1 mb-40 mb-lg-0">
                            <div className="about-img-1">
                                <img src={images.about} alt={brand.name} loading="lazy" />
                            </div>
                            <div className="about-counter-wrap jump">
                                <h3 className="about-counter-number">
                                    <span className="counter-number">360</span>
                                    °
                                </h3>
                                <p className="about-counter-text">Complete Coating Solutions</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-content-wrap1">
                            <div className="title-area mb-25">
                                <span className="sub-title">
                                    <img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />
                                    {about.subtitle}
                                </span>
                                <h2 className="sec-title">{about.title}</h2>
                                <p className="sec-text">{about.text}</p>
                            </div>
                            <div className="checklist mb-35">
                                <ul>
                                    {about.checklist.map((item) => (
                                        <li key={item}>
                                            <img
                                                src="/assets/img/icon/about-checklsit-icon1-1.svg"
                                                alt=""
                                            />
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
                                    <h4 className="title">{about.vision.title}</h4>
                                    <p className="text">{about.vision.text}</p>
                                </div>
                            </div>
                            <div className="btn-group mt-60">
                                <a href="#service-sec" className="btn style3">
                                    Explore Our Services <i className="ri-arrow-right-up-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
