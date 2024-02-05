import React, { Suspense } from 'react';
import AppRouter from 'app/providers/router/ui/AppRouter';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

const App = () => {
    const { theme } = useTheme();
    const LOADING_TEXT = 'Загрузка...';
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={LOADING_TEXT}>
                <NavBar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
