import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Moon: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 1.5c-3.75 0-8.25 3.75-8.25 9.75s4.5 10.5 10.5 10.5 9.75-4.5 9.75-8.25c-8.25 5.25-17.25-3.75-12-12Z"></path>
    </svg>
  );
};

export default Moon;
