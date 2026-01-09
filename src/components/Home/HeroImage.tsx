import HomeLogo from "../../assets/HomeLogo.png";

const HeroImage = () => {
  return (
    <div className="flex justify-center w-full">
      <img
        src={HomeLogo}
        alt="Home Logo"
        className="w-full max-w-sm md:max-w-md xl11:max-w-lg object-contain"
      />
    </div>
  );
};

export default HeroImage;
