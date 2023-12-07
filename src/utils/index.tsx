import { colors } from "../constants";
import { ICarProps } from "../types";

const headers = {
  "X-RapidAPI-Key": "31813c5257msh28e01fc36580c46p1d37b9jsn21224371fef2",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};
interface fetchParams {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
}
export async function fetchCars(filters: fetchParams) {
  const { make = "", model = "", limit = "5", year = "", fuel = "" } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    {
      headers,
    }
  );
  const data = await res.json();
  // console.log(data);
  return data;
}

// export const generateImage = (car: any, angel?: string) => {
//   const url = new URL("https://www.imagin.studio/getimage");

//   url.searchParams.append("customer", "hrjavascript-mastery");
//   url.searchParams.append("make", car.make);
//   url.searchParams.append("modelFamily", car.model);
//   url.searchParams.append("zoomType", "fullscreen");
//   url.searchParams.append("angle", String(angel));
//   console.log(url);
// };
// generateImage({ make: "bmw", model: "m3", year: 1990 });

export const generateImage = (car: any, angel?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage'");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angle", String(angel));
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append("paintId", colors[i]);
  return String(url);
};
