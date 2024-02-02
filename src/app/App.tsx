import React, { Suspense } from "react";
import AppRouter from "app/providers/router/ui/AppRouter";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/NavBar";
import { SideBar } from "widgets/SideBar";
import { useTranslation } from "react-i18next";

const Component = () => {
    const { t, i18n } = useTranslation();

    return <div>{t("Главная страница")}</div>;
};

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="Loading...">
                <NavBar />
                <Component />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
