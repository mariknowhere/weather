import {FC, useEffect, useState} from 'react';
import Weather from "../../blocks/weather/Weather";
import {useWeather} from "../../hooks/useWeather";
import {IDayCardProps} from "../../blocks/dayCard/DayCardTypes";
import {ISecondPageProps} from "./SecondPageTypes";
import {useDetailsCity} from "../../hooks/useDetailsCity";

const SecondPage: FC<ISecondPageProps> = ({ title }) => {
  const [daysState, setDaysState] = useState<IDayCardProps[]>([]);

  const weather = useWeather();
  const { onCityChange, onCityClick, newCityState, inputState } = useDetailsCity();

  useEffect(() => {
    weather
      .then((days: IDayCardProps[]) => setDaysState(days))
      .catch((error: Error) => alert(`Error message: ${error}`));
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-5xl mx-auto">
      <Weather city={newCityState} days={daysState} title={title} />
      <section>
        <h4 className="flex justify-center mb-4">You can change your city:</h4>
        <div className="flex flex-row gap-4 justify-center">
          <input value={inputState} onChange={(event) => onCityChange(event)} placeholder="Enter your city..." className="p-2" type="text" />
          <button onClick={onCityClick} className="bg-fuchsia-800 text-white font-semibold rounded-lg py-2 px-4">Change!</button>
        </div>
      </section>
    </div>
  );
};

export default SecondPage;
