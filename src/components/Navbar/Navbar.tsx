import NavLink from "../../data/NavLink";
import { MdOutlineClose } from "react-icons/md";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import K from "../../assets/K.png";
import DarkK from "../../assets/DarkK.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 dark:bg-[#212121e6] backdrop-blur">
      <div className="flex items-center px-8 py-4">
        <div className="flex-1">
          <img
            src={isDarkMode ? DarkK : K}
            className="w-[45px] h-[45px] rounded-full"
            alt="Logo"
          />
        </div>

        <ul className="hidden md:flex gap-8 text-[12px]">
          {NavLink.map((link) => {
            const section = link.href.replace("#", "");

            return (
              <li key={link.id}>
                <div className="relative flex flex-col gap-1 justify-center items-center group cursor-pointer">
                  <div
                    className={`w-[5px] h-[5px] transition-colors rounded-full absolute top-[-10px]
    ${
      activeSection === section
        ? "bg-blue-500"
        : "bg-gray-600 dark:bg-white opacity-0 group-hover:opacity-100 group-hover:bg-blue-500"
    }
  `}
                  ></div>

                  <a
                    href={link.href}
                    className={`uppercase transition-colors hover:font-semibold tracking-wider
    ${
      activeSection === section
        ? "text-blue-500 font-semibold"
        : "text-gray-600 dark:text-white group-hover:text-blue-500"
    }
  `}
                  >
                    {link.title}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex-1 flex md:justify-end justify-between gap-4">
          {isDarkMode ? (
            <button onClick={() => setIsDarkMode(false)}>
              <FaSun className="text-white w-7 h-7" />
            </button>
          ) : (
            <button onClick={() => setIsDarkMode(true)}>
              <FaMoon className=" w-6 h-6" />
            </button>
          )}
          <button
            className="md:hidden text-2xl  dark:text-white"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-0 h-screen w-[85%] bg-white dark:bg-[#252525]"
          >
            <div className="p-6">
              <MdOutlineClose
                onClick={() => setIsOpen(false)}
                className="text-2xl ml-auto cursor-pointer dark:text-white"
              />

              <ul className="flex flex-col gap-6 mt-8">
                {NavLink.map((link) => {
                  const section = link.href.replace("#", "");

                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={() => {
                          setActiveSection(section);
                          setIsOpen(false);
                        }}
                        className={`uppercase
                          ${
                            activeSection === section
                              ? "text-blue-500"
                              : "text-gray-600 dark:text-white"
                          }
                        `}
                      >
                        {link.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
