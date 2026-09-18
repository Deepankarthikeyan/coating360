import { Navigate, useParams } from "react-router-dom";
import { getServiceBySlug } from "../../data/servicesDetailsData";
import FooterTwo from "../Common/Footer/FooterTwo";
import SubPageHeader from "../Common/Header/SubPageHeader";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbTen from "../Service-Details/BreadcumbTen/BreadcumbTen";
import ServiceContactForm from "../Service-Details/ServiceContact/ServiceContactForm";
import ServiceDetailsArea from "../Service-Details/ServiceDetails/ServiceDetailsArea";

const ServiceDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <Wrapper>
      <div style={{ overflow: "hidden" }}>
        <SubPageHeader />
        <BreadcumbTen title={service.shortTitle} />
        <ServiceDetailsArea service={service} />
        <ServiceContactForm serviceTitle={service.title} />
        <FooterTwo />
        <ScrollTopButton />
      </div>
    </Wrapper>
  );
};

export default ServiceDetailsPage;
