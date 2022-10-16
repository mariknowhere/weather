import React, {FC} from 'react';
import {TITLE} from "../../constant/mainPage";

const Header: FC = () => {
  return (
    <header>
      <h1 className="text-center cursor-pointer font-bold text-5xl text-gray-500 pt-6 hover:text-green-500">
        {TITLE}
      </h1>
    </header>
  );
};

export default Header;
