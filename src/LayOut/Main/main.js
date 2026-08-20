import { Outlet } from "react-router-dom";
import Footer from "../../SharedPages/Footer/Footer";
import Header from "../../SharedPages/Header/Header";
import Headroom from "react-headroom";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Headroom only for desktop navbar */}
      <div className="hidden lg:block">
        <Headroom>
          <Header />
        </Headroom>
      </div>

      {/* Mobile Header (bottom-fixed) */}
      <div className="lg:hidden">
        {/* <Headroom> */}
        <Header />
        {/* </Headroom> */}
      </div>

      {/* Main Page Content */}
      <main className="pb-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;




// import { Outlet } from "react-router-dom";
// import Footer from "../../SharedPages/Footer/Footer";
// import Header from "../../SharedPages/Header/Header";
// import Headroom from "react-headroom";


// const main = () => {
//     return (
//         <div>
//             <Headroom> 
//                 <Header className=' bottom-[50%]'></Header>
//                 </Headroom>
//             <Outlet></Outlet>
//             <Footer></Footer>
//         </div>
//     );
// }
// export default main;