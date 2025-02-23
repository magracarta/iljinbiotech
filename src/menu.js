import Admin from "./admin/Admin";
import AdminOk from "./admin/page/AdminOk";
import Inquiry from "./admin/page/Inquiry";
import Login from "./admin/page/Login";
import Main from "./admin/page/Main";
import ProductRegistration from "./admin/page/ProductRegistration";
import ProtectedRoute from "./admin/page/ProtectedRoute";
import NotFound from "./common/NotFound";
import User from "./user/User";


export const menu = [
    {
        path:"/",
        element:<User/>,
        errorElement:<NotFound/>

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