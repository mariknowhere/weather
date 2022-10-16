import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Video: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m16.5 9.75 6-3.75v12l-6-3.75v-4.5ZM1.5 6v12h15V6h-15Z"></path>
    </svg>
  );
};

export default Video;
