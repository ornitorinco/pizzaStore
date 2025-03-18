import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";
  
  export default [
    index("../pages/Home.tsx"),
    route("about", "../pages/About.tsx"),
  
    layout("../components/Layout.tsx", [
      route("login", "../pages/Login.tsx"),
      route("register", "../pages/Register.tsx"),
    ]),
  
    ...prefix("pizza", [
      route(":id", "../pages/PizzaDetails.tsx"),
    ]),
  ] satisfies RouteConfig;