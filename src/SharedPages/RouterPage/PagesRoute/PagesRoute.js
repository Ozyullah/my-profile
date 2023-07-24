import { createBrowserRouter } from "react-router-dom";
import Main from "../../../LayOut/Main/main";
import Home from "../../../FixedPages/Home/Home";
import Blog from "../../../FixedPages/Blog/Blog";
import Contact from "../../../FixedPages/ContactPage/Contact";
import Resume from "../../../FixedPages/Resume/Resume";

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
        }
    ]
    }
]);

export default routers;