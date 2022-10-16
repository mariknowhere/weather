import { MouseEvent } from 'react'
import {IMainPageProps} from "../../pages/mainPage/MainPageTypes";

export interface IButtonProps {
  buttonText: string;
}

export interface IButtonsProps extends IMainPageProps {
  onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
}
