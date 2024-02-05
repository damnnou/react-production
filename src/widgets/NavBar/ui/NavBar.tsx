import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const MAIN_TEXT = 'Главная';
    const ABOUT_TEXT = 'О сайте';
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainlink}
                    to='/'
                >
                    {MAIN_TEXT}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>
                    {ABOUT_TEXT}
                </AppLink>
            </div>
        </div>
    );
};
