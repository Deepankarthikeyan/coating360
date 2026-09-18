import { useSearchParams } from "react-router-dom";
import FooterTwo from "../Common/Footer/FooterTwo";
import SubPageHeader from "../Common/Header/SubPageHeader";
import QuoteContactForm from "../Common/QuoteContactForm/QuoteContactForm";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";
import BreadcumbTen from "../Service-Details/BreadcumbTen/BreadcumbTen";

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const serviceSlug = searchParams.get("service") ?? undefined;

  return (
    <Wrapper>
      <div style={{ overflow: "hidden" }}>
        <SubPageHeader />
        <BreadcumbTen title="Contact Us" />
        <QuoteContactForm serviceSlug={serviceSlug} />
        <FooterTwo />
        <ScrollTopButton />
      </div>
    </Wrapper>
  );
};

export default ContactPage;
