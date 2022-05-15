import { fireEvent, render,screen } from "@testing-library/react";
import { execPath } from "process";
import { BrowserRouter } from "react-router-dom";
import GridOfBooks from "../GridOfBooks"


test("Number of Currently reading books initially should be 9",()=>{

    render(
       <BrowserRouter>
       <GridOfBooks searchTerm={""} />
       </BrowserRouter> 
    );
    const heading=screen.getAllByRole("heading");
    expect(heading.length).toBe(9);
});

test("Images should be rendered properly",()=>{

    render(
        <BrowserRouter>
        <GridOfBooks searchTerm={""} />
        </BrowserRouter> 
     );
     const images=screen.getAllByRole("img");
     expect(images[0]).toHaveAttribute("src","1.png");
});

test("Books should be rendered based on searchTerm",()=>{

    render(
        <BrowserRouter>
        <GridOfBooks searchTerm={"eat"} />
        </BrowserRouter> 
     );
     const book=screen.getByText("Eat Better, Feel Better");
     expect(book).toBeInTheDocument();
});

test("Currently Reading books should have Finished button",()=>{

    render(
        <BrowserRouter>
        <GridOfBooks searchTerm={""} />
        </BrowserRouter> 
     );
     
     const finished=screen.getAllByRole("button",{name:'Finished'});
     expect(finished[0]).toBeInTheDocument();
});
test("Currently Reading books should not have Read again button",()=>{

    render(
        <BrowserRouter>
        <GridOfBooks searchTerm={""} />
        </BrowserRouter> 
     );
     
     const readagain=screen.queryByRole("button",{name:'Read again'});
     expect(readagain).not.toBeInTheDocument();
});

test("When clicked on Finished, the book should disappear",()=>{

    render(
        <BrowserRouter>
        <GridOfBooks searchTerm={""} />
        </BrowserRouter> 
     );

     const finished=screen.getAllByRole("button",{ name :'Finished'});
     fireEvent.click(finished[0]);
     const human=screen.queryByText(/Bring Human To Work/i);
     expect(human).toBeNull();
     
});