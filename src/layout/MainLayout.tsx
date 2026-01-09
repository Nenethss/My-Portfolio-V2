import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

const MainLayout = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />

      <main className="w-full dark:bg-[#212121] dark:text-white">
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
