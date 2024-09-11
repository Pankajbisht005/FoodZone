import { render,screen } from "@testing-library/react"
import Header  from "../header"
import { Provider } from "react-redux"
import appStore from "../../utils/appstore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


test("should load header component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
        
})

test("should load header component with a cart 0 ",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
               <Header />
            </Provider>
        </BrowserRouter>
    )

 const cartItems = screen.getByText("Cart (0)")
 expect(cartItems).toBeInTheDocument();
        
})