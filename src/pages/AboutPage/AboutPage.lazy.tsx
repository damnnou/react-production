import { lazy } from "react";

export const AboutPageLazy = lazy(
    () =>
        // @ts-ignore
        new Promise((res) => setTimeout(() => res(import("./AboutPage")), 1500))
);
