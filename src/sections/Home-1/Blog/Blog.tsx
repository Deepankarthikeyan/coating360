 
import Slider from "react-slick";
import siteContent from "../../../data/siteContent";

const Blog = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="blog-area-1 space shape-mockup-wrap" id="blog-sec">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')", top: '0px' }}>
            </div>
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <div className="title-area content-text-extra-style">
                            <span className="sub-title"><img src="/assets/img/icon/section-subtitle-icon.svg" alt="" />Latest News</span>
                            <h2 className="sec-title">Industry updates and coating insights</h2>
                        </div>
                    </div>
                </div>

                <Slider {...settings} className="row global-carousel blog-slider slider-shadow slick-initialized slick-slider">
                    {siteContent.news.map((item, index) => (
                        <div className="col-md-6 col-lg-4" key={item.title}>
                            <div className="blog-card slider-padding">
                                <div className="blog-img">
                                    <img src={siteContent.images.news[index]} alt={item.title} loading="lazy" />
                                    <div className="blog-date">
                                        <span>{item.date.split(" ")[0]}</span>
                                        <div className="year">{item.date.split(" ").slice(1).join(" ")}</div>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span>{siteContent.brand.name}</span>
                                        <span>{item.category}</span>
                                    </div>
                                    <h3 className="blog-title">{item.title}</h3>
                                    <p className="blog-text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Blog;
