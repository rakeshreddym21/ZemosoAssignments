import { render ,screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyTabs from "../MyTabs";


test("Testing if currentlyReading is the active tab",()=>{

    render(
      <BrowserRouter>  <MyTabs searchTerm="" /> </BrowserRouter>
    );

    const tabName=screen.getByText("Currently Reading");
    expect(tabName).toBeInTheDocument();
   
});

test("Book should match with filter human",()=>{

    render(
        <BrowserRouter>  <MyTabs searchTerm="human" /> </BrowserRouter>
      );

      const bookName = screen.getByText(/Bring Your Human to Work/i);
      expect(bookName).toBeInTheDocument();

});

test("Book should match with filter eat",()=>{

    render(
        <BrowserRouter>  <MyTabs searchTerm="eat" /> </BrowserRouter>
      );
      const bookName = screen.getByText(/Eat Better, Feel Better/i);
      expect(bookName).toBeInTheDocument();

});

test("Currently reading books should be 9 initially",()=>{

    render(

        <BrowserRouter>  <MyTabs searchTerm="" /> </BrowserRouter>
    );

    const headings=screen.getAllByRole('heading');
    expect(headings.length).toBe(9);

});