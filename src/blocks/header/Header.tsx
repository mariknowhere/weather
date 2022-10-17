import React, {FC} from 'react';
import {TITLE} from "../../constant/mainPage";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE} from "../../constant/routes";

const Header: FC = () => {
  const navigate = useNavigate();

  const onTitleClick = () => navigate(MAIN_ROUTE);

  return (
    <header>
      <h1 onClick={onTitleClick} className="text-center cursor-pointer font-bold text-5xl text-gray-500 pt-6 hover:text-green-500">
        {TITLE}
      </h1>
    </header>
  );
};

export default Header;
