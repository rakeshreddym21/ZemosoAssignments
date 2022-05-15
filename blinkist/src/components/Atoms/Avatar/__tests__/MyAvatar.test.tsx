import { render,screen } from "@testing-library/react";
import MyAvatar from "../MyAvatar"

test("MyAvatar Alphabet should be A",()=>{

    render(
        <MyAvatar alphabet="A"/>
    );

     const alphabet = screen.getByText('A');
    
     expect(alphabet).toBeInTheDocument();

});

test("MyAvatar Alphabet should be S",()=>{

    render(
        <MyAvatar alphabet="S"/>
    );

     const alphabet = screen.getByText('S');

     expect(alphabet).toBeInTheDocument();

});