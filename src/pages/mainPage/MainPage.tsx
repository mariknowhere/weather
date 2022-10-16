import {FC, useEffect, useState} from 'react';
import { IMainPageProps } from "./MainPageTypes";
import {useCity} from "../../hooks/useCity";
import Buttons from "../../blocks/buttons/Buttons";
import {useWeather} from "../../hooks/useWeather";
import {IDayCardProps} from "../../blocks/dayCard/DayCardTypes";
import Weather from "../../blocks/weather/Weather";

const MainPage: FC<IMainPageProps> = ({ buttons, title }) => {
  const [daysState, setDaysState] = useState<IDayCardProps[]>([]);
  const weather = useWeather();

  const { cityState: city, onButtonClick, onClickHandler } = useCity();

  useEffect(() => {
    weather
      .then((days: IDayCardProps[]) => setDaysState(days))
      .catch((error: Error) => alert(`Error message: ${error}`));
  }, []);

  return (
    <>
      <Weather city={city} days={daysState.slice(0, 3)} onClick={onClickHandler} title={title} />
      <Buttons
        buttons={buttons}
        onButtonClick={onButtonClick}
      />
    </>
  );
};

export default MainPage;
