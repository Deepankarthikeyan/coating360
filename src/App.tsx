import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeOne = lazy(() => import("./sections/pages/HomeOne"));
const HomeTwo = lazy(() => import("./sections/pages/HomeTwo"));
const HomeThree = lazy(() => import("./sections/pages/HomeThree"));
const HomeFour = lazy(() => import("./sections/pages/HomeFour"));
const HomeFive = lazy(() => import("./sections/pages/HomeFive"));
const About = lazy(() => import("./sections/pages/About"));
const Service = lazy(() => import("./sections/pages/Service"));
const ServiceDetails = lazy(() => import("./sections/pages/ServiceDetails"));
const Contact = lazy(() => import("./sections/pages/Contact"));
const Blog = lazy(() => import("./sections/pages/Blog"));
const BlogDetails = lazy(() => import("./sections/pages/BlogDetails"));
const Project = lazy(() => import("./sections/pages/Project"));
const ProjectDetails = lazy(() => import("./sections/pages/ProjectDetails"));
const Team = lazy(() => import("./sections/pages/Team"));
const TeamDetails = lazy(() => import("./sections/pages/TeamDetails"));
const Shop = lazy(() => import("./sections/pages/Shop"));
const ShopDetails = lazy(() => import("./sections/pages/ShopDetails"));
const Cart = lazy(() => import("./sections/pages/Cart"));
const Checkout = lazy(() => import("./sections/pages/Checkout"));
const Wishlist = lazy(() => import("./sections/pages/Wishlist"));
const HomeOneSingle = lazy(() => import("./sections/pages/HomeOneSingle"));
const HomeTwoSignle = lazy(() => import("./sections/pages/HomeTwoSignle"));
const HomeThreeSignle = lazy(() => import("./sections/pages/HomeThreeSignle"));
const HomeFourSignle = lazy(() => import("./sections/pages/HomeFourSignle"));
const HomeFiveSignle = lazy(() => import("./sections/pages/HomeFiveSignle"));

const PageLoader = () => (
  <div style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
    Loading...
  </div>
);

const withSuspense = (element: JSX.Element) => (
  <Suspense fallback={<PageLoader />}>{element}</Suspense>
);

const router = createBrowserRouter([
	{ path: "/", element: withSuspense(<HomeOne />) },
	{ path: "/home-1", element: withSuspense(<HomeOne />) },
	{ path: "/home-2", element: withSuspense(<HomeTwo />) },
	{ path: "/home-3", element: withSuspense(<HomeThree />) },
	{ path: "/home-4", element: withSuspense(<HomeFour />) },
	{ path: "/home-5", element: withSuspense(<HomeFive />) },
	{ path: "/about", element: withSuspense(<About />) },
	{ path: "/service", element: withSuspense(<Service />) },
	{ path: "/service-details", element: withSuspense(<ServiceDetails />) },
	{ path: "/blog", element: withSuspense(<Blog />) },
	{ path: "/blog-details", element: withSuspense(<BlogDetails />) },
	{ path: "/project", element: withSuspense(<Project />) },
	{ path: "/project-details", element: withSuspense(<ProjectDetails />) },
	{ path: "/team", element: withSuspense(<Team />) },
	{ path: "/team-details", element: withSuspense(<TeamDetails />) },
	{ path: "/shop", element: withSuspense(<Shop />) },
	{ path: "/shop-details", element: withSuspense(<ShopDetails />) },
	{ path: "/cart", element: withSuspense(<Cart />) },
	{ path: "/checkout", element: withSuspense(<Checkout />) },
	{ path: "/wishlist", element: withSuspense(<Wishlist />) },
	{ path: "/home-1-op", element: withSuspense(<HomeOneSingle />) },
	{ path: "/home-2-op", element: withSuspense(<HomeTwoSignle />) },
	{ path: "/home-3-op", element: withSuspense(<HomeThreeSignle />) },
	{ path: "/home-4-op", element: withSuspense(<HomeFourSignle />) },
	{ path: "/home-5-op", element: withSuspense(<HomeFiveSignle />) },
	{ path: "/contact", element: withSuspense(<Contact />) },
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
