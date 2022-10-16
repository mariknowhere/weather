import React, {FC} from 'react';
import DayCard from "../dayCard/DayCard";
import {IWeatherProps} from "./WeatherTypes";

const Weather: FC<IWeatherProps> = ({ onClick, city, days, title }) => {
  return (
    <section className="flex flex-col justify-center max-w-5xl mx-auto py-12">
      <h3 className="flex justify-center font-semibold text-xl">
        {title} <span onClick={onClick} className="cursor-pointer underline ml-1">{city}</span>
      </h3>
      <div className="flex flex-row justify-center flex-wrap mt-6 gap-12">
        {days.map((day) => (
          <DayCard {...day} key={day.day} />
        ))}
      </div>
    </section>
  );
};

export default Weather;
