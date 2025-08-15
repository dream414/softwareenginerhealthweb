import Navba from "./Navba";
import ResponsiveHomeHero from './ResponsiveHomeHero.jsx'
import FourBoxes from './FourBoxes.JSX'
import AboutSection from './about.jsx'
import AboutWithImage from './imagetext.jsx'
import RankingBars from './rankinglist.jsx'
import SimpleForm from "./SimpleForm.jsx";
import Footer from "./Foote.jsx";
import SixBoxesSlider from "./SixBoxesSlider.jsx";

export default function App() {
  return (<>
    <Navba/>
    <ResponsiveHomeHero/>
    <FourBoxes/>
    <AboutWithImage/>
    <AboutSection/>
    <RankingBars/>
    <SimpleForm/>
    <SixBoxesSlider/>
    <Footer/>
    </>
  );
}
