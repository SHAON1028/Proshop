import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomeScreen from "../pages/HomeScreen";
import ProductDetails from "../pages/ProductDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<HomeScreen/>
            },
            {
                path:"/product/:id",
                element:<ProductDetails />
            }
        ]
    }
])
export default router