import Navbar from "../components/NavBar/Nav";
import HomeHero from "../components/Home/Hero/homeHero";
import HomeCources from "../components/Home/Cources/homeCources";
import About from "../components/Home/about/about";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeCources />
      <About />
    </div>
  );
};

export default Home;
