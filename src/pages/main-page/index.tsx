import { useEffect, useState } from "react";
import Hero from "../../component/hero";
import { fetchCars } from "../../utils";
import { ICarProps } from "../../types";
import Card from "../../component/card";
import CostumeFilter from "../../component/card/costume-filter";
import SearchBar from "../../component/card/search-bar";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../../component/show";
import { fuels, years } from "../../constants";

const MainPage = () => {
  interface Error {
    error?: string;
  }
  const [cars, setCars] = useState<ICarProps[] | Error>([]);
  const [params, setParams] = useSearchParams();

  // limit parametresi varsa al yoksa 5 olarak ekle
  const limit = Number(params.get("limit")) || 5;

  useEffect(() => {
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj)
      .then((res: ICarProps[] | Error) => setCars(res))
      .catch((err) => console.log(err));
  }, [params]);
  // verinin dolu olmadıüını kontrol etme
  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 paddin-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu </h1>
          <p>Beğenebileceğğin Arabaları Keşfet</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CostumeFilter title="Yakıt Tipi" options={fuels} />
            <CostumeFilter title="Üretim Yılı" options={years} />
          </div>
        </div>
        {isDataEmpty ? (
          // arabalar gelmediyse ekrana uyarı basılır
          <div className="home__error-container">
            <h2>Üzgünüz Veri Bulunamadı</h2>
          </div>
        ) : (
          // arablar geldiyse ekrana kartlar basılır
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}
              </div>
              <ShowMore limit={limit} isNext={limit < 30} />
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
