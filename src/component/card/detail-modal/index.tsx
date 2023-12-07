import { AnimatePresence, motion } from "framer-motion";
import { ICarProps } from "../../../types";
import { generateImage } from "../../../utils";

interface IDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
}

const DetailModal = ({ isOpen, closeModal, car }: IDetailProps) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
            >
              {/* kapatma buttonu */}
              <button
                onClick={closeModal}
                className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded full "
              >
                <img src="/close.svg" alt="" />
              </button>
              {/*fotoğraflar alanaı  */}
              <div className="flex-1 flex flex-col gap-3">
                <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                  <img
                    src={generateImage(car, "angle")}
                    alt="carImage"
                    className="h-full mx-auto"
                  />
                </div>

                <div className="flex">
                  {/* küçük foto */}
                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "29")}
                      className="h-full mx-auto object-contain"
                      alt=""
                    />
                  </div>

                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "33")}
                      className="h-full mx-auto object-contain"
                      alt=""
                    />
                  </div>

                  <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100">
                    <img
                      src={generateImage(car, "13")}
                      className="h-full mx-auto object-contain"
                      alt=""
                    />
                  </div>
                </div>
                {/* araba bilgilerini objeden diziye çevirip döndük */}
                {Object.entries(car).map(([key, value]) => (
                  <div className="flex justify-between">
                    <h4 className="capitalize text-gray">
                      {key.split("_").join(" ")}
                    </h4>
                    <p className="text-black-100 font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetailModal;
