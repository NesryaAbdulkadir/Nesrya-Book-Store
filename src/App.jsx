import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FeaturedBooks from "./components/FeaturedBooks";
import UpComingEvents from "./components/UpComingEvents";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <FeaturedBooks />
      <UpComingEvents />
      <AboutUs />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
