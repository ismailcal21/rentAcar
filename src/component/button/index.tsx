import { IProp } from "../../types";

const CostumeButton = ({
  btnType,
  disabled,
  title,
  designs,
  handleClick,
  rIcon,
}: IProp) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={`custom-btn ${designs}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>

      {rIcon && (
        <div className="relative w-6 h-6">
          <img src={rIcon} alt="" />
        </div>
      )}
    </button>
  );
};

export default CostumeButton;
