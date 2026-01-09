import About from "../components/About/About";
import AboutImage from "../components/About/AboutImage";
import Header from "../components/Header/Header";
import { Social } from "../components/Social";

const Home = () => {
  return (
    <div className="min-h-[100vh] flex w-full overflow-x-hidden">
      <Social />
      <div className="flex flex-col pt-[70px] gap-16 xl11:gap-0 items-center mx-auto">
        <Header
          subtitle="Let me introduce myself"
          initial="About "
          title="Me"
        />
        <div className="flex flex-col xl11:flex-row px-12 gap-10">
          <AboutImage />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
