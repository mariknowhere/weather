import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Gift: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.75S10.5 0 6 2.25s6 4.5 6 4.5Zm0 0s1.5-6.75 6-4.5-6 4.5-6 4.5Zm0 0V22.5 6.75ZM3 10.5v12h18v-12H3ZM1.5 6.75v3.75h21V6.75h-21Z"></path>
    </svg>
  );
};

export default Gift;
