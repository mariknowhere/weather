import {DEFAULT_CITY} from "../constant/mainPage";

export const preparedCity = (city: string) => {
  const preparedCity = city.toLowerCase(); // делаем нижний регистр всему city
  let actualResult;

  if (!preparedCity) {
    actualResult = DEFAULT_CITY; // если city не пришел, то город будет по умолчанию
  } else {
    actualResult = preparedCity.charAt(0).toUpperCase() + preparedCity.slice(1); // делаем рефакторинг city по условию (слово с большой буквы, остальные маленькие)
  }

  return actualResult;
}
