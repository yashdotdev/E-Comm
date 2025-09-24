import HeroImage from "../../assets/Group 493.png";

export const Hero = () => {
  return (
    <div className="w-full">
      <img
        src={HeroImage}
        alt="Hero"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};
