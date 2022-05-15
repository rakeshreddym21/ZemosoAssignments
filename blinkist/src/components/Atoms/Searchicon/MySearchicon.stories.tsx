import { ComponentMeta, ComponentStory } from "@storybook/react";
import MySearchIcon from "./MySearchicon";

export default{
    title:'Atoms/MySearchIcon',
    component:MySearchIcon
} as ComponentMeta<typeof MySearchIcon>;

const Template:ComponentStory<typeof MySearchIcon>= (args)=> <MySearchIcon {...args} />;

export const basicsearchIcon = Template.bind({});

