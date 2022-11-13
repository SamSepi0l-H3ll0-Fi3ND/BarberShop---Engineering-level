import "./App.css";
import About from "./Pages/About";
import Hero from "./Pages/Hero";
import Motto from "./Pages/Motto";
import Services from "./Pages/Services";
import Rewiews from "./Pages/Rewiews";
import Reservation from "./Pages/Reservation";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Services></Services>
      <Motto></Motto>
      <About></About>
      <Rewiews></Rewiews>
      <Reservation></Reservation>
      <Footer></Footer>
    </div>
  );
}

export default App;
