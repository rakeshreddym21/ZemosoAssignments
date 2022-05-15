import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GridOfFinishedBooks from "../GridOfFinishedBooks";


test("Number of Finished books initially should be 9",()=>{

    render(
       <BrowserRouter>
       <GridOfFinishedBooks searchTerm={""} />
       </BrowserRouter> 
    );
    const heading=screen.getAllByRole("heading");
    expect(heading.length).toBe(1);
});

test("Images should be rendered properly",()=>{

    render(
        <BrowserRouter>
        <GridOfFinishedBooks searchTerm={""} />
        </BrowserRouter> 
     );
     const images=screen.getAllByRole("img");
     expect(images[0]).toHaveAttribute("src","8.png");
});

test("Books should be rendered based on searchTerm",()=>{

    render(
        <BrowserRouter>
        <GridOfFinishedBooks searchTerm={"eat"} />
        </BrowserRouter> 
     );
     const book=screen.getByText("Eat Better, Feel Better");
     expect(book).toBeInTheDocument();
});

test("Finished Reading books should have Read again button",()=>{

    render(
        <BrowserRouter>
        <GridOfFinishedBooks searchTerm={""} />
        </BrowserRouter> 
     );
     
     const readagain =screen.getAllByRole("button",{name:'Read again'});
     expect(readagain[0]).toBeInTheDocument();
});
test("Finished Reading books should not have Finished button",()=>{

    render(
        <BrowserRouter>
        <GridOfFinishedBooks searchTerm={""} />
        </BrowserRouter> 
     );
     
     const finished=screen.queryByRole("button",{name:'Finished'});
     expect(finished).not.toBeInTheDocument();
});

test("When clicked on Read again, the book should disappear",()=>{

    render(
        <BrowserRouter>
        <GridOfFinishedBooks searchTerm={""} />
        </BrowserRouter> 
     );

     const finished=screen.getAllByRole("button",{ name :'Read again'});
     fireEvent.click(finished[0]);
     const human=screen.queryByText(/Eat Better, Feel Better/i);
     expect(human).toBeNull();
     
});