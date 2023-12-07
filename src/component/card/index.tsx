import { useState } from "react";
import { ICarProps } from "../../types";
import CostumeButton from "../button";
import Carİnfo from "./card-info";
import DetailModal from "./detail-modal";
import { generateImage } from "../../utils";
import { motion } from "framer-motion";

interface ICarCardProps {
  car: ICarProps;
}
const Card = ({ car }: ICarCardProps) => {
  const [isOpen, setİsOpen] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make}
        {car.model}
      </h2>
      <p className="flex mt-6 text-[32px] ">
        <span className="self-start text-[14px] font-semibold">Tl</span>
        {Math.round(Math.random() * 2000)}
        <span className="self-end text-[14px] font-medium">Gün</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
          alt=""
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="mt-2 group-hover:invisible w-full flex justify-between text-gray">
          <Carİnfo
            title={car.transmission === "a" ? "Otomatik" : "Manule"}
            icon="/steering-wheel.svg"
          />
          <Carİnfo
            title={car.drive?.toUpperCase()}
            icon="/steering-wheel.svg"
          />
          <Carİnfo title={car.city_mpg + "Mpg"} icon="/steering-wheel.svg" />
        </div>
        <div className="car-card__btn-container ">
          <CostumeButton
            title="Daha Fazla"
            designs="w-full py-[16px] rounded-full bg-primary-blue text-white"
            rIcon="/right-arrow.svg"
            handleClick={() => setİsOpen(true)}
          />
        </div>
      </div>

      <DetailModal
        isOpen={isOpen}
        closeModal={() => setİsOpen(false)}
        car={car}
      />
    </motion.div>
  );
};

export default Card;
