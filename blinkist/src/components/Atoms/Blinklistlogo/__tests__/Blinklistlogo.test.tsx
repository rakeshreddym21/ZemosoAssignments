import { render,screen } from "@testing-library/react";
import BlinkListLogo from '../Blinklistlogo';


test("Blinklist image should be Blinklistlogo.png",()=>{

    render(
        <BlinkListLogo />
    );
    const image=screen.getByRole("img");
    expect(image).toHaveAttribute("src","Blinklistlogo.png");

});

test("Blinklist alt should be BlinkList",()=>{

    render(
        <BlinkListLogo />
    );

    const image=screen.getByRole("img");
    expect(image).toHaveAttribute("alt","BlinkList");

});