import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyTabs from "./MyTabs";

export default{
    title:'Atoms/MyTabs',
    component:MyTabs
} as ComponentMeta<typeof MyTabs>;

const Template : ComponentStory<typeof MyTabs> = (args) => <MyTabs {...args} />

export const BasicTabs = Template.bind({});

