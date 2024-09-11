import { render,screen } from "@testing-library/react";
import RestaurantCard from "../restaurantcard";
import MOCK_DATA from "../mocks/rescardmock.json"
import "@testing-library/jest-dom"



test('should  render restaurantcard components with props data', () => {
   render(<RestaurantCard resData={MOCK_DATA}/>);

   const name = screen.getByText("Burger King")

   expect(name).toBeInTheDocument();
})
