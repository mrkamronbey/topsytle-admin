import { lazy } from "react";
import Cookies from "universal-cookie";

const Login = lazy(() => import("./../pages/login/index"))
const AddAdmin = lazy(() => import("./../pages/add_admin/index"))
const Contact = lazy(() => import("./../pages/contact/index"))
const Projects = lazy(() => import("./../pages/projects/index"))
const cookie = new Cookies();

export const RouterData = [
    {
        id : 1,
        path : "/",
        component :cookie.get("token") ? null : <Login/>
    },
    {
        id : 3,
        path : "/adminadd",
        component : cookie.get("token") ? <AddAdmin/> : null
    },
    {
        id : 5,
        path : "/contact",
        component : cookie.get("token") ? <Contact/> : null
    },
    {
        id : 9,
        path : "/projects",
        component : cookie.get("token") ? <Projects/> : null
    },
]