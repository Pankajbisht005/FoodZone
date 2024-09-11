import { act, render } from "@testing-library/react"
import Body from "../body"
import MOCK_DATA from "../mocks/mockrestaurantlisdata.json"



global.fetch=jest.fn (()=> {
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test('should render the body component', () => {
  render (<Body />)
})
