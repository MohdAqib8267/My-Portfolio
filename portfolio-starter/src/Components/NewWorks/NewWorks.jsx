import { ParallaxProvider } from "react-scroll-parallax";
// import { AdvancedBannerTop } from "./AdvancedBanner";
import "./NewWorks.css";
import { AdvancedBannerTop } from "./AdvancedBannerTop.tsx";

import Works from "../Works/Works.jsx";
import { Works2 } from "../Works/Works2.tsx";
// import Works2 from "../Works/Works2.jsx"

export default function NewWorks() {
  return (
    <div className="NewWorks">
    <ParallaxProvider>
        
      <AdvancedBannerTop />
      <Works2/>
      <div className="center full" settings={{ speed: 0.45 }} >
        {/* <h1 className="headline gray">Goodnight.</h1> */}
        <Works/>
        
      </div>
      
      
    </ParallaxProvider>
    </div>
  );
}