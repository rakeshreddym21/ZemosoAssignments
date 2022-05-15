import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react"
import MyAvatar from "./MyAvatar"

export default{

    title:'Atoms/MyAvatar',
    component:MyAvatar
} as ComponentMeta<typeof MyAvatar>;

const Template:ComponentStory<typeof MyAvatar>= (args) => <MyAvatar {...args} />

export const AvatarWithA= Template.bind({});
AvatarWithA.args={
    alphabet:'A'
};

