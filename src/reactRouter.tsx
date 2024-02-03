import { createBrowserRouter, RouterProvider, redirect, Outlet, Link } from "react-router-dom";
import ContainerT from "./components/Container"
import MarketPage from "./pags/Maketpage";
import App from "./pags/ScirePage";
import RegisterPage from "./pags/RegisterPage";
import LoginPage from "./pags/LoginPage";
import BackendApp from "./BackendInterface/BackendPage";
import BDashboard from "./BackendInterface/BackendDashboard";
import ProductPage from "./pags/ProductPage";
import Nopage from "./pags/NoPage";

import CartSlot from "./components/CartSlot";
const Navbar: React.FC = () => {
    return (
        <div style={{ width: "100%", top: "0", zIndex: "9", position: "fixed" }} className=" shadow  border-dark border-b text-dark bg-white">

            <nav style={{ padding: 20 }}>
                <div className="flex gap-3 ">
                    <Link to="/">Home</Link>

                    <Link to="/manage">Manage</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="flex gap-3 ">

                    <Link to="/register">Register</Link>


                    <div className="btn  rounded border-gray flex items-center ">
                        <CartSlot />

                    </div>



                    <Link to="/login">Login</Link>


                </div>
            </nav>


            {/*`<SideMenu />
                < ContactMenu />
    `*/}
            <div className="absolute lg:right-80 lg:block  w-80  hidden ">

                <div className="search-container flex  ">
                    <input type="text" placeholder="ค้นหา..." className="py-2 px-4 border  border-t-gray  focus:outline-none" />
                    <button type="submit" className="py-2 px-4 bg-dark text-white border-t-0  cursor-pointer hover:border-gray focus:outline-none rounded-none">Search</button>
                </div>

            </div>
        </div>
    );
};


const RouteReact = () => {
    const router = createBrowserRouter([
        {

            path: "dashboard",
            element: <BDashboard />,
        },
        {
            path: "/",
            element: <> <Navbar /> <div style={{ paddingTop: " 4rem", }}>  <Outlet /> </div></>,
            loader: ({ request }) => {


                redirect(request.url);
                return null
            },
            children: [

                {
                    index: true,
                    path: "",
                    element: <MarketPage />,

                },
                {

                    path: "product/:productId",
                    element: <ProductPage />,
                },
                {
                    path: "manage",
                    element: <BackendApp />,
                },
                {
                    path: "blogs",
                    element: <ContainerT> {"<Blogs />"}</ContainerT>,
                },
                {
                    path: "example",
                    element: <App />,
                },
                {
                    path: "register",
                    element: <RegisterPage />,
                }, {
                    path: "login",
                    element: <LoginPage />,
                },


                {
                    path: "*",
                    element: <Nopage />,
                },



            ],
        }
    ], {
        future: {
            // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
            v7_normalizeFormMethod: true,
        },
        basename: ""
    });








    return (

        <>


            <RouterProvider router={router} />

        </>
    );
}
export default RouteReact

