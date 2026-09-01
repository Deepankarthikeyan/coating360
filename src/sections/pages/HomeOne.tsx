 
import FooterTwo from "../Common/Footer/FooterTwo";
import SiteHeader from "../Common/Header/SiteHeader";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import About from "../Home-1/About/About";
import Blog from "../Home-1/Blog/Blog";
import Cta from "../Home-1/Cta/Cta";
import Hero from "../Home-1/Hero/Hero";
import Process from "../Home-1/Process/Process";
import Service from "../Home-1/Service/Service";
import WhyChoose from "../Home-1/WhyChoose/WhyChoose";
import Contact from "../home-1-op/Contact/Contact";

const HomeOne = () => {
	return (
		<Wrapper>
			<div style={{ overflow: "hidden" }}>
				<SiteHeader />
				<Hero />
				<About />
				<Service />
				<Cta />
				<WhyChoose />
				<Process />
				<Blog />
				<Contact />
				<FooterTwo />
				<ScrollTopButton />
			</div>
		</Wrapper>
	);
};

export default HomeOne;
