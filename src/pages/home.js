import Navbar from "../components/NavBar/Nav";
import HomeHero from "../components/Home/Hero/homeHero";
import HomeCources from "../components/Home/Cources/homeCources";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomeCources />
    </div>
  );
};

export default Home;
