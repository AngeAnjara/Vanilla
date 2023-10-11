import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Page/Home";

import NavBar from "./Components/NavBar";
import Apropos from "./Page/Apropos";
import FicheProduits from "./Page/FicheProduits";
import Contact from "./Page/Contact";

function App() {
  const Layout =()=>{
    return <div>
        <NavBar/>
        <Outlet/>
    </div>
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/apropos",
          element:<Apropos/>
        },
        {
          path: "/ficheProduits",
          element:<FicheProduits/>
        },
        {
          path: "/contact",
          element:<Contact/>
        }
      ]
      
    },
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
