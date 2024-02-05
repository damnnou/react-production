import { lazy } from 'react';

export const AboutPageLazy = lazy(
    () => new Promise((res) => {
        setTimeout(() => {
            // @ts-ignore
            res(import('./AboutPage'));
        }, 1500);
    }),
);
