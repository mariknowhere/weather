import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Play: FC<IIconProps> = ({ className}) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 1.5v21L18 12 7.5 1.5Z"></path>
    </svg>
  );
};

export default Play;
