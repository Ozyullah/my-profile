import { createBrowserRouter } from "react-router-dom";
import Main from "../../../LayOut/Main/main";
import Home from "../../../FixedPages/Home/Home";
import Blog from "../../../FixedPages/Blog/Blog";
import Contact from "../../../FixedPages/ContactPage/Contact";
import Resume from "../../../FixedPages/Resume/Resume";
import Comments from "../../Comments/Comments";
import Projects from "../../ShowProjects/Projects";
import AboutMe from "../../SelfAbout/AboutMe";

const routers =createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/blog",
            element:<Blog></Blog>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        },
        {
            path:"/resume",
            element:<Resume></Resume>
        },
        {
            path:"/ovservation",
            element:<Comments></Comments>
        },
        {
            path:"/projects",
            element:<Projects></Projects>
        },
        {
            path:"/about",
            element:<AboutMe></AboutMe>
        }
    ]
    }
]);

export default routers;