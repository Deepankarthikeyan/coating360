import { useEffect } from "react"; 
import WOW from "wow.js";  
import BackToTop from "./BackToTop";


const Wrapper = ({ children }: any) => {

  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
    const syncTimer = window.setTimeout(() => wow.sync(), 150);
    return () => window.clearTimeout(syncTimer);
  }, []);
 
  return (
    <>  
      {children}
      <BackToTop /> 
    </>
  );
};

export default Wrapper;
 