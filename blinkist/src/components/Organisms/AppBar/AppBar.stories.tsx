import { ComponentMeta, ComponentStory } from "@storybook/react"
import { BrowserRouter } from "react-router-dom";
import MyAppBar from "./MyAppBar";
export default{

    title:'Organisms/NavBar',
    component:MyAppBar
} as ComponentMeta<typeof MyAppBar>;

const Template : ComponentStory<typeof MyAppBar> = (args) => <BrowserRouter> <MyAppBar {...args} /> </BrowserRouter>

export const BasicAppBar = Template.bind({});