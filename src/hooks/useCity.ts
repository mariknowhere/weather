import {useEffect, useState, MouseEvent} from "react";
import {DEFAULT_CITY} from "../constant/mainPage";
import {preparedCity} from "../utils/preparedCity";
import {CITY_ROUTE} from "../constant/routes";
import {useNavigate} from "react-router-dom";

export const useCity = () => {
  const [cityState, setStateCity] = useState<string>('Minsk');
  const navigate = useNavigate();

  useEffect(() => {
    const city = localStorage.getItem('city')!; // стучимся за городом, который может быть сохранен в localStorage (если пользователь уже заходил к нам)

    // проверяем заходил ли пользователь уже к нам или нет. если нет, то кидаем ему модалку на ввод его города
    if (!city) {
      //setTimeout для того чтобы страница успела подгрузиться и пользователь врубился куда он вообще зашёл
      setTimeout(() => {
        let result = prompt('Enter your city:', DEFAULT_CITY)!; // если пользователь закрыл окно, город будет DEFAULT_CITY (Minsk)
        const newCityState = preparedCity(result);

        localStorage.setItem('city', newCityState);
        setStateCity(newCityState);
      }, 300)
    } else {
      setStateCity(city);
    }
  }, []);

  // меняем город пользователя если он кликнул на кнопку, сам город берём из контента кнопки
  const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    let buttonText = event.currentTarget.textContent!;

    setStateCity(buttonText);
    localStorage.setItem('city', buttonText);
  }

  // при клике на город, будем делать навигацию по указанному URL
  const onClickHandler = () => navigate(`${CITY_ROUTE}/${cityState}`);

  return { cityState, onButtonClick, onClickHandler }
}
