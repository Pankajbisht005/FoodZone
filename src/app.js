import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/about";
import Contact from "./components/contsact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import Cart from "./components/cart";
import Footer from "./components/footer";




const About = lazy(() => import("./components/about"))


const AppLayout = () => {
  const[userName,setUserName] = useState()

  useEffect(() => {
    data = {
      name: "John Doe",
    }
    setUserName(data.name)
  },[]);

  
    return(
     <Provider store={appStore}>
          <div className="app">
        <Header />
        <Outlet />
        <Footer/>
         </div>
     </Provider>
       );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
      path: "/about",
      element: <Suspense fallback={<h1>loading....</h1>}>
        <About />
      </Suspense>,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },
    {
      path: "/cart",
      element: <Cart />,
     }

    ],
    errorElement: <Error />
  },
  
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider  router={appRouter}/>)
