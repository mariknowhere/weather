import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Volume: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.25 3s2.25 3 2.25 9-2.25 9-2.25 9"></path>
      <path d="M15.75 1.5s3 3 3 10.5-3 10.5-3 10.5"></path>
      <path d="M11.25 1.5S15 6 15 12s-3.75 10.5-3.75 10.5L6 16.5H1.5v-9H6l5.25-6Z"></path>
    </svg>
  );
};

export default Volume;
