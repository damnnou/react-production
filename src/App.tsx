import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Theme, ThemeContext } from "./styles/theme/ThemeContext";
import { useTheme } from "./styles/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
    const { theme, handleToggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={handleToggleTheme}>TOGGLE THEME</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageLazy />} />
                    <Route path={"/"} element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
