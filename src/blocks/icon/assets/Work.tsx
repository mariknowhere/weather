import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Work: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 19.5V6v13.5ZM22.5 6h-21v13.5h21V6ZM15 6s0-3-3-3-3 3-3 3h6ZM6 19.5V6v13.5Z"></path>
    </svg>
  );
};

export default Work;
