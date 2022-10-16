import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const User: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 8.25C16.5 12 14.25 15 12 15s-4.5-3-4.5-6.75 1.5-6 4.5-6 4.5 2.25 4.5 6ZM3 22.5h18c0-6.75-4.5-7.5-9-7.5s-9 .75-9 7.5Z"></path>
    </svg>
  );
};

export default User;
