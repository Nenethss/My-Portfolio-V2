import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full flex justify-center pb-28 pt-0 xl11:pt-16 lg:pr-10 pr-0 xl11:justify-start text-center xl11:text-left">
      <div className="flex flex-col max-w-xl">
        <div className="flex flex-col gap-6">
          <h1 className="text-[25px] font-bold leading-snug">
            I'm an Aspiring Web Developer from Binangonan, Rizal, Philippines.
          </h1>

          <p className="dark:text-white xl11:text-[1.1rem]">
            I have a strong interest in games and programming, which I often
            explore during my free time primarily specialize in front-end web
            development, where I focus on building responsive and user-friendly
            interfaces.
          </p>

          <p className="dark:text-white xl11:text-[1.1rem]">
            My programming journey became more focused this year as a
            fourth-year IT student preparing for my internship. With graduation
            approaching, I am motivated to continuously improve my skills and
            meet the requirements of today’s technology-driven job market.
          </p>

          <h1 className="text-[25px] py-2 font-bold leading-snug">
            Connect with me on:
          </h1>
        </div>

        <div className="flex flex-row justify-center xl11:justify-start w-auto py-2 gap-4">
          <a
            href="https://www.facebook.com/nenethsss"
            target="_blank"
            className="rounded-[100%] h-[30px] w-[30px] hover:text-blue-500"
          >
            <FaSquareFacebook className="w-full h-full" />
          </a>
          <a
            href="https://github.com/Nenethss"
            target="_blank"
            className="rounded-[100%] h-[30px] w-[30px] hover:text-blue-500"
          >
            <FaGithubSquare className="w-full h-full" />
          </a>
          <a
            href="https://www.instagram.com/nenethss"
            target="_blank"
            className="rounded-[100%] h-[30px] w-[30px] hover:text-blue-500"
          >
            <AiFillInstagram className="w-full h-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/san-pedro-kenneth-j-49933329a/"
            target="_blank"
            className="rounded-[100%] h-[30px] w-[30px] hover:text-blue-500"
          >
            <FaLinkedin className="w-full h-full" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
