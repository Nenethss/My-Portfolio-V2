const Hero = () => {
  return (
    <div className="w-full flex justify-center pb-28 pt-0 xl11:pt-28 xl11:justify-start text-center xl11:text-left">
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="md:text-[4.3rem] text-[3.3rem] font-bold leading-none">
          HI, I'M
          <span className="text-blue-500"> KEN</span>
        </h1>

        <p className="dark:text-gray-300 xl11:text-[1.1rem]">
          An aspiring web developer from Binangonan, Rizal, Philippines. I’m
          continuously learning and improving my skills in web development.
        </p>

        <div className="pt-6 xl11:pt-10">
          <a
            href="/Resume-Kenneth-SanPedro.pdf"
            download
            className="inline-block hover:cursor-pointer text-white px-10 py-6 rounded-full bg-blue-500 transition-colors duration-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
