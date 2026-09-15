import { Suspense, lazy } from "react";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

const HomeOne = lazy(() => import("./sections/pages/HomeOne"));

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
  { path: "*", element: <Navigate to="/" replace /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
