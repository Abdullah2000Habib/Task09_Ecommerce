import { PATH } from "../constants";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

export const router = [ 
    {path:PATH.LOGIN,element:<LoginPage/>},
    {path:PATH.REGISTER,element:<RegisterPage/>},
]