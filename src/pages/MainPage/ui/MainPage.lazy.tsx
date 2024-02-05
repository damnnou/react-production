import { lazy } from 'react';

export const MainPageLazy = lazy(
    () => new Promise((res) => {
        setTimeout(() => {
            // @ts-ignore
            res(import('./MainPage'));
        }, 1500);
    }),
);
