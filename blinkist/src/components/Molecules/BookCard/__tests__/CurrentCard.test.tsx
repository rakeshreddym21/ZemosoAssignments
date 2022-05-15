import { render,screen} from "@testing-library/react";

import React from "react";
import { BrowserRouter } from "react-router-dom";
import CurrentCard from "../CurrentCard";

test('book name should match with "Bring Your Human to Work"',async ()=>{

    render(<BrowserRouter> <CurrentCard bookName="Bring Your Human to Work" author="Erica Keswin" readTime="13-minute read" reads="1.9k reads" image="1.png" buttonName="Finished" id={1} /> </BrowserRouter>);
    const name=screen.getByText(/Bring Your Human to Work/i);
    expect(name).toBeInTheDocument();
});

test('author name should match with "Erica Keswin"',async ()=>{

    render(<BrowserRouter> <CurrentCard bookName="Bring Your Human to Work" author="Erica Keswin" readTime="13-minute read" reads="1.9k reads" image="1.png" buttonName="Finished" id={1} /> </BrowserRouter>);
    const author=screen.getByText(/Erica Keswin/i);
    expect(author).toBeInTheDocument();
});

test('image should be "1.png"',async ()=>{

    render(<BrowserRouter> <CurrentCard bookName="Bring Your Human to Work" author="Erica Keswin" readTime="13-minute read" reads="1.9k reads" image="1.png" buttonName="Finished" id={1} /> </BrowserRouter>);
    const image=screen.getByRole("img");
    expect(image).toHaveAttribute("src","1.png");
});

test('button name should be "Finished"',async ()=>{

    render(<BrowserRouter> <CurrentCard bookName="Bring Your Human to Work" author="Erica Keswin" readTime="13-minute read" reads="1.9k reads" image="1.png" buttonName="Finished" id={1} /> </BrowserRouter>);
    const buttonName=screen.getByText("Finished");
    expect(buttonName).toBeInTheDocument();
});