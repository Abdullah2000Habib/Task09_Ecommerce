import { PATH } from "../constants";
import CartPage from "../pages/CartPage/CartPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainPage from "../pages/MainPage/MainPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const router = [ 
    {path:PATH.LOGIN,element:<LoginPage/>},
    {path:PATH.REGISTER,element:<RegisterPage/>},
    {path:PATH.MAIN,element:<MainPage/>},
    {path:PATH.MAIN,element:<MainPage/>},
    {path:PATH.PRODUCTS,element:<ProductsPage/>},
    {path:PATH.CART,element:<CartPage/>},
]