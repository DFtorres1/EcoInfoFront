import { lazy } from "react";

type RoutesType = {
  name: string;
  component: any;
  options?: any;
};

export const routesConfig: RoutesType[] = [
  {
    name: "MainPage",
    component: lazy(() => import("src/views/MainPage")),
  },
  {
    name: "ClimateMonitoring",
    component: lazy(() => import("src/views/climateMonitoring/ClimateMonitoring")),
  },
  {
    name: "Directory",
    component: lazy(() => import("src/views/directory/DirectoryList")),
  },
  {
    name: "Products",
    component: lazy(() => import("src/views/products/ProductsList")),
  },
  {
    name: "RequestByPhoto",
    component: lazy(() => import("src/views/requestByPhoto/RequestByPhoto")),
  },
  {
    name: "Suggestions",
    component: lazy(() => import("src/views/suggestions/Suggestions")),
  },
];
