import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from "./pages/mainPage/MainPage";
import {store} from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Header from "./blocks/header/Header";
import {Routes, Route, Navigate} from 'react-router-dom';
import {CITY_ROUTE, MAIN_ROUTE} from "./constant/routes";
import SecondPage from "./pages/secondPage/SecondPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { mainPageData, secondPageData } = store;

root.render(
  <BrowserRouter>
    <div className="bg-gray-100 h-screen">
      <Header />
      <Routes>
        <Route path={MAIN_ROUTE} element={<MainPage {...mainPageData} />} key={MAIN_ROUTE} />
        <Route path={CITY_ROUTE + '/:city'} element={<SecondPage {...secondPageData} />} key={CITY_ROUTE} />
        <Route path="/*" element={<Navigate to={MAIN_ROUTE} replace />} />
      </Routes>
    </div>
  </BrowserRouter>
);
