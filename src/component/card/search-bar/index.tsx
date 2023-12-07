import SearchBtn from "./search-area/search-btn";
import Select from "react-select";
import { makes } from "../../../constants";
import { IOption } from "../../../types";
import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [params, setParams] = useSearchParams();
  // useMemo hooku bir değeri hesaplmaja ve bu değeri
  // bir sonraki render sırasında hesaplamadan önce
  // önbellekte saklamak için kullanılır
  // bu işlem performasnsı arttırmasında yardımcı olur
  // maliyetli işlemler yapılıyosa tercih edilmelidir
  // gereksiz yeniden hesaplamaların önüne geçer
  // string dizisi label ve value sahip obje dizisine çevirme
  const options: IOption[] = useMemo(() => {
    return makes.map((item) => ({
      label: item,
      value: item,
    }));
  }, [makes]);

  // marka ve modeli urle ekleme

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make !== "" && model === "") {
      setParams({ make: make.toLowerCase() });
    } else if (make !== "" && model !== "") {
      setParams({ make: make.toLowerCase(), model: model.toLowerCase() });
    } else {
      alert("Lütfen Marka Ve Model Seçiniz");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* marka seçme */}
      <div className="searchbar__item text-black">
        <Select
          className="w-full"
          options={options}
          onChange={(e: IOption | null) => e && setMake(e.value)}
        />
        <SearchBtn styling="sm:hidden" />
      </div>
      {/* model seçme alanı */}
      <div className="searchbar__item">
        <img
          width={25}
          className="absolute ml-4"
          src="/model-icon.png"
          alt=""
        />
        <input
          type="text"
          placeholder="civic"
          className="searchbar__input text-black rounded"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchBtn styling="sm:hidden" />
      </div>
      <SearchBtn styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
