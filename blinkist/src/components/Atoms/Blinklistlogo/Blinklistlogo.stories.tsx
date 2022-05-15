import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BlinkListLogo from "./Blinklistlogo";

export default{
    title:'Atoms/Blinklistlogo',
    component:BlinkListLogo
} as ComponentMeta<typeof BlinkListLogo>

const Template:ComponentStory<typeof BlinkListLogo>=(args)=><BlinkListLogo {...args} />;

export const basic= Template.bind({});

