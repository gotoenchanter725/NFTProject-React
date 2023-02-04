// import {Counter} from "./features/counter/Counter"
import {Welcome} from "./pages/web/home/Welcome";
import {Index as About} from "./pages/web/about"
import {Index as Mint} from "./pages/web/mint/Mint"
import {Index as Collections} from "./pages/web/collections"

import {WelcomeMobile} from "./pages/mobile/home/Welcome";
import {Index as AboutMobile} from "./pages/mobile/about"
import {Index as CollectionsMobile} from "./pages/mobile/collections"

export const Routes = () => {

}

Routes.webRoute = [
    {title: "Home", path: "/home", Component: Welcome, hidden: true},
    {title: "", path: "/", Component: Welcome, hidden: true},
    {title: "Mint", path: "/mint", Component: Mint},
    {title: "About", path: "/about", Component: About},
    {title: "Collections", path: "/collections", Component: Collections},
];

Routes.mobileRoute = [
    {title: "", path: "/", Component: WelcomeMobile, hidden: true},
    {title: "Home", path: "/home", Component: WelcomeMobile},
    {title: "Collections", path: "/collections", Component: CollectionsMobile},
    {title: "About", path: "/about", Component: AboutMobile},
    {title: "Whalemap", path: "/mint", Component: WelcomeMobile},
];