import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import BeyondEntrepreneurship from "./BeyondEntrepreneurship";

export default{
    title:'Organisms/BeyondEntrepreneurship',
    component:BeyondEntrepreneurship
} as ComponentMeta<typeof BeyondEntrepreneurship>;


const Template:ComponentStory<typeof BeyondEntrepreneurship> = (args) => <BrowserRouter> <BeyondEntrepreneurship {...args} /> </BrowserRouter> ;

export const aboutBeyond= Template.bind({});