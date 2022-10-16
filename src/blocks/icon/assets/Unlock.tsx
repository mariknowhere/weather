import React, {FC} from 'react';
import {IIconProps} from "../IconTypes";

const Unlock: FC<IIconProps> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 11.25V22.5h16.5V11.25H3.75Zm0 0V22.5 11.25Z"></path>
      <path d="M12 18.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
      <path d="M12 15v2.25"></path>
      <path d="M6.75 11.25c0-6 0-9 5.25-9s5.25 3.75 5.25 4.5"></path>
    </svg>
  );
};

export default Unlock;
