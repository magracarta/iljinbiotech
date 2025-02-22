import Admin from "./admin/Admin";
import Login from "./admin/page/Login";
import Main from "./admin/page/Main";
import NotFound from "./common/NotFound";
import User from "./user/User";


export const menu = [
    {
        path:"/",
        element:<User/>,
        errorElement:<NotFound/>

    },
    {
        path:"admin",
        element:<Admin/>,
        errorElement:<NotFound/>,
        children:[
            {index: true, element: <Main/>},
            {path:"login", element: <Login/>}
        ]
    }
]