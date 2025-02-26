import Admin from "./admin/Admin";
import AdminOk from "./admin/page/AdminOk";
import Inquiry from "./admin/page/Inquiry";
import Login from "./admin/page/Login";
import Main from "./admin/page/Main";
import ProductRegistration from "./admin/page/ProductRegistration";
import ProtectedRoute from "./admin/page/ProtectedRoute";
import NotFound from "./common/NotFound";
import Company from "./user/page/Company";
import MainPage from "./user/page/MainPage";
import User from "./user/User";
import CeoGreeting from "./user/component/company/CeoGreeting";
import Vision from "./user/component/company/Vision";
import Overview from "./user/component/company/Overview";
import Direction from "./user/component/company/Direction";
import Products from "./user/page/Products";


export const menu = [
    {
        path:"/",
        element:<User/>,
        errorElement:<NotFound/>,
        children:[
            {index:true, element: <MainPage/> },
            {
                path:"company",
                element:<Company/>,
                children:[
                    {index:true, element:<CeoGreeting/>},
                    {path:"vision", element:<Vision/>},
                    {path:"overview", element:<Overview/>},
                    {path:"direction", element:<Direction/>}
                ]
            },
            {path:"products", element:<Products/>}
        ]

    },
    {   //관리자 페이지
        path:"admin",
        element:<Admin/>,
        errorElement:<NotFound/>,
        children:[
            {path:"login", element: <Login/>},
            {
                path: "", 
                element:
                    <ProtectedRoute>
                         <AdminOk/>
                    </ProtectedRoute>,
                children:[
                    {index:true, element:<Main/>},
                    {path:"inquiry", element:<Inquiry/>},
                    {path:"productRegistration", element:<ProductRegistration/>},
                ]
            }
        ]
    }
]