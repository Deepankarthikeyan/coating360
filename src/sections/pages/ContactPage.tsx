import { useSearchParams } from "react-router-dom";
import PageBreadcrumb from "../Common/Breadcrumb/PageBreadcrumb";
import FooterTwo from "../Common/Footer/FooterTwo";
import SubPageHeader from "../Common/Header/SubPageHeader";
import QuoteContactForm from "../Common/QuoteContactForm/QuoteContactForm";
import QuoteServiceBanner from "../Common/QuoteContactForm/QuoteServiceBanner";
import ScrollTopButton from "../Common/Scroll/Scroll";
import Wrapper from "../Common/Wrapper";

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const serviceSlug = searchParams.get("service") ?? undefined;

  return (
    <Wrapper>
      <div className="contact-page" style={{ overflow: "hidden" }}>
        <SubPageHeader />
        <PageBreadcrumb
          title="Contact Us"
          compact
          items={[
            { label: "HOME", to: "/" },
            { label: "Contact Us" },
          ]}
        />
        <QuoteServiceBanner serviceSlug={serviceSlug} />
        <QuoteContactForm serviceSlug={serviceSlug} />
        <FooterTwo />
        <ScrollTopButton />
      </div>
    </Wrapper>
  );
};

export default ContactPage;
