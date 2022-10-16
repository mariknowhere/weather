import {ChangeEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {preparedCity} from "../utils/preparedCity";
import {CITY_ROUTE} from "../constant/routes";

export const useDetailsCity = () => {
  const [cityState, setCityState] = useState<string>('');
  // создаём state для двухстороннего связывания со значением которое находится в input
  const [inputState, setInputState] = useState<string>('');


  const navigate = useNavigate();
  const { city } = useParams();
  const newCityState = preparedCity(cityState);
  localStorage.setItem('city', newCityState);
  const newInputState = preparedCity(inputState);


  useEffect(() => {
    if (city) {
      setCityState(city);
    }
  }, [city]);

  // делаем input управляемым и вносим его изменения в созданный нами state
  const onCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  }

  // при клике на кнопку, будет навигация к URL который берется из значения input`a, также сохраняем его в localStorage
  const onCityClick = () => {
    navigate(`${CITY_ROUTE}/${newInputState}`);
    setCityState(newInputState);
    localStorage.setItem('city', newInputState);
  }

  return { onCityChange, onCityClick, newCityState, inputState }
}