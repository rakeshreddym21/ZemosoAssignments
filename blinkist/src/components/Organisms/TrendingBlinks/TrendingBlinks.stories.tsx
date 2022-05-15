import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import TrendingBlinks from "./TrendingBlinks";

export default{
    title:'Organisms/Trending Blinks',
    component:TrendingBlinks
} as ComponentMeta<typeof TrendingBlinks>;

const Template:ComponentStory<typeof TrendingBlinks> = (args)=> <BrowserRouter> <TrendingBlinks {...args} /> </BrowserRouter>;

export const TrendingBlinksBasic= Template.bind({});