import { useSearchParams } from "react-router-dom";
import CostumeButton from "../button";

type ShowMoreProps = {
  limit: number;
  isNext: boolean;
};

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
  const [params, setParams] = useSearchParams();
  const handleNavigate = () => {
    // yeni limiti hesapla
    const newLimit: number = Number(limit) + 5;
    //diğer para<metreleri silmeden yenisni ekler
    params.set("limit", String(newLimit));
    //urleyi günceller
    setParams(params);
  };
  return (
    <div className="w-full flex-center gap-5 my-10">
      {isNext && (
        <CostumeButton
          handleClick={handleNavigate}
          title="Daha Fazla"
          designs="bg-primary-blue rounded-full"
        />
      )}
    </div>
  );
};

export default ShowMore;
