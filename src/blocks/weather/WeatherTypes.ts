import {IDayCardProps} from "../dayCard/DayCardTypes";

export interface IWeatherProps {
  days: IDayCardProps[];
  onClick?: () => void;
  city?: string;
  title?: string;
}
