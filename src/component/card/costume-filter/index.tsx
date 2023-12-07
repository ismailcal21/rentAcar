import { useEffect, useState } from "react";
import { IOption } from "../../../types";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";
interface IFilterProps {
  title: string;
  options: IOption[];
}

const CostumeFilter = ({ title, options }: IFilterProps) => {
  const [selected, setSelected] = useState<IOption | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // title belirler
    const key = title === "Yakıt Tipi" ? "fuel" : "year";
    // değer seçildiyse parametreye ekşer yoksa kaldırır
    if (selected?.value) {
      //url ekle
      params.set(key, selected.value.toLowerCase());
    } else {
      // urlden kaldır
      params.delete(key);
    }
    // urle güncelleme
    setParams(params);
  }, [selected]);
  return (
    <div className="w-fit">
      <Select
        options={options}
        onChange={(e: IOption | null) => setSelected(e)}
        className="text-black min-w-[100px]"
        placeholder={title}
      />
    </div>
  );
};

export default CostumeFilter;
