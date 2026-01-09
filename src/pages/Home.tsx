import Hero from "../components/Home/Hero";
import HeroImage from "../components/Home/HeroImage";
import { Social } from "../components/Social";

const Home = () => {
  return (
    <div>
      <div className="min-h-[100vh] flex w-full overflow-x-hidden">
        <Social />

        <div className="flex flex-col-reverse xl11:flex-row items-center px-16 pt-24 gap-10 mx-auto">
          <Hero />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
