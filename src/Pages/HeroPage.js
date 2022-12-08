import Hero from "../Subpages/Hero";
import Services from "../Subpages/Services";
import Motto from "../Subpages/Motto";
import About from "../Subpages/About";
import Rewiews from "../Subpages/Rewiews";
import Reservation from "../Subpages/Reservation";
import Footer from "../Components/Footer";


const HeroPage = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <Motto></Motto>
      <About></About>
      <Rewiews></Rewiews>
      <Reservation></Reservation>
      <Footer></Footer>
    </div>
  );
};

export default HeroPage;
