import { Link } from "react-router-dom";
import CostumeButton from "../button";

const Header = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link to={"/"}>
          <img width={50} src="/bmw.png" alt="" />
        </Link>

        <CostumeButton
          title="Selam"
          btnType="button"
          designs="bg-primary-blue rounded-full min-w-[130px] hover:bg-blue-200 transition"
        />
      </nav>
    </header>
  );
};

export default Header;
