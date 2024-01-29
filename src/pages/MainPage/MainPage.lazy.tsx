import { lazy } from "react";

export const MainPageLazy = lazy(
    () =>
        // @ts-ignore
        new Promise((res) => setTimeout(() => res(import("./MainPage")), 1500))
);
