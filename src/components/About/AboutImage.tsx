import AboutImage from "../../assets/AboutImage.png";

const HeroImage = () => {
  return (
    <div className="flex justify-center w-full">
      <img
        src={AboutImage}
        alt="About Image"
        className="w-full max-w-sm md:max-w-md xl11:max-w-lg object-contain"
      />
    </div>
  );
};

export default HeroImage;
