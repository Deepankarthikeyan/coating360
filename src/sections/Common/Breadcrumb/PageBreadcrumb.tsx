import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageBreadcrumbProps {
  title: string;
  items: BreadcrumbItem[];
  compact?: boolean;
}

const PageBreadcrumb = ({ title, items, compact = false }: PageBreadcrumbProps) => {
  return (
    <div
      className={`breadcumb-wrapper${compact ? " breadcumb-compact" : ""}`}
      style={{ backgroundImage: "url('/assets/img/bg/breadcrumb-bg.png')" }}
    >
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite"
        data-top="0"
        style={{ backgroundImage: "url('/assets/img/shape/global-line-shape1.png')" }}
      ></div>
      <div className="container3">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title">{title}</h1>
              <ul className="breadcumb-menu">
                {items.map((item, index) => {
                  const isLast = index === items.length - 1;

                  return (
                    <li key={`${item.label}-${index}`} className={isLast ? "active" : ""}>
                      {item.to ? (
                        <Link to={item.to}>
                          {index === 0 ? (
                            <>
                              <i className="ri-home-4-fill"></i> {item.label}
                            </>
                          ) : (
                            item.label
                          )}
                        </Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBreadcrumb;
