import { motion } from "framer-motion";
import CustomeButton from "../button/index";
const Hero = () => {
  const scrollTo = () => {
    const ele = document.getElementById("catalogue");

    ele?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset , Yoculuğu Başlat</h1>
        <p className="hero__subtitle text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          dicta minima corporis, nesciunt earum sed?
        </p>
        <CustomeButton
          title="Arabaları Keşfet"
          designs="bg-primary-blue rounded-full my-5 hover:bg-blue-500 transition"
          handleClick={scrollTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1 }}
          src="/hero.png"
          className="img-fluid object-contain"
          alt="carimage"
        />
      </div>
    </div>
  );
};

export default Hero;
