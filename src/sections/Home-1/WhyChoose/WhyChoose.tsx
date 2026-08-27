 
import siteContent from "../../../data/siteContent";

const whyIcons = [
    "/assets/img/icon/why-icon1-1.svg",
    "/assets/img/icon/why-icon1-2.svg",
    "/assets/img/icon/why-icon1-3.svg",
    "/assets/img/icon/why-icon1-4.svg",
    "/assets/img/icon/why-icon1-5.svg",
    "/assets/img/icon/why-icon1-6.svg",
];

const WhyChoose = () => {
    const leftItems = siteContent.whyChoose.items.slice(0, 3);
    const rightItems = siteContent.whyChoose.items.slice(3, 6);

    return (
        <div className="space-top text-center overflow-hidden shape-mockup-wrap">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" data-bottom="0" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape2.png')", bottom: '0px' }}>
            </div>
            <div className="container">
                <div className="title-area text-center">
                    <div className="shadow-title">{siteContent.whyChoose.subtitle}</div>
                    <span className="sub-title"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="" /> {siteContent.whyChoose.subtitle}</span>
                    <h2 className="sec-title">{siteContent.whyChoose.title}</h2>
                </div>
                <div className="row gy-50 align-items-center">
                    <div className="col-xl-4 col-md-6">
                        <div className="wcu-card-wrap left-align">
                            {leftItems.map((item, index) => (
                                <div className="wcu-card" key={item.title}>
                                    <div className="wcu-card-icon">
                                        <img src={whyIcons[index]} alt="" loading="lazy" />
                                    </div>
                                    <div className="wcu-card-details">
                                        <h4 className="wcu-card-title">{item.title}</h4>
                                        <p className="wcu-card-text">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 order-xl-3">
                        <div className="wcu-card-wrap right-align">
                            {rightItems.map((item, index) => (
                                <div className="wcu-card" key={item.title}>
                                    <div className="wcu-card-icon">
                                        <img src={whyIcons[index + 3]} alt="" loading="lazy" />
                                    </div>
                                    <div className="wcu-card-details">
                                        <h4 className="wcu-card-title">{item.title}</h4>
                                        <p className="wcu-card-text">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="wcu-thumb1-1">
                            <img src="/assets/img/normal/why_1-1.png" alt={siteContent.brand.name} loading="lazy" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
