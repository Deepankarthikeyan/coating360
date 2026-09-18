import { getServiceBySlug } from "../../../data/servicesDetailsData";

interface QuoteServiceBannerProps {
  serviceSlug?: string;
}

const QuoteServiceBanner = ({ serviceSlug }: QuoteServiceBannerProps) => {
  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;

  if (!service) {
    return null;
  }

  return (
    <section className="quote-service-banner-section overflow-hidden">
      <div className="quote-service-banner-inner">
        <img src={service.heroImage} alt={service.title} loading="lazy" />
      </div>
    </section>
  );
};

export default QuoteServiceBanner;
