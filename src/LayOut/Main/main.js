import { Outlet } from "react-router-dom";
import Footer from "../../SharedPages/Footer/Footer";
import Header from "../../SharedPages/Header/Header";
import Headroom from "react-headroom";


const main = () => {
    return (
        <div>
            <Headroom><Header></Header></Headroom>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}
export default main;