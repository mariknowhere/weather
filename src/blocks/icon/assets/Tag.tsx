import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Tag: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
      <path d="m1.5 13.5 12-12h9v9l-12 12-9-9Z"></path>
    </svg>
  );
};

export default Tag;
