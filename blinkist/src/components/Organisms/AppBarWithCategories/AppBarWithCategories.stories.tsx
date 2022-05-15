import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import AppBarWithCategories from "./AppBarWithCategories";

export default{
    title:'Organisms/AppBarWithCategories',
    component:AppBarWithCategories
} as ComponentMeta<typeof AppBarWithCategories>;


const Template:ComponentStory<typeof AppBarWithCategories> = (args) => <BrowserRouter> <AppBarWithCategories {...args} /> </BrowserRouter>;

export const Appbarwithcategories = Template.bind({});