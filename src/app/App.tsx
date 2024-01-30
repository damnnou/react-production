import React from "react";
import AppRouter from "app/providers/router/ui/AppRouter";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";

const App = () => {
    const { theme, handleToggleTheme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <NavBar />
            <button onClick={handleToggleTheme}>TOGGLE THEME</button>
            <AppRouter />
        </div>
    );
};

export default App;
