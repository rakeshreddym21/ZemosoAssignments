import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExploreBooks from "./ExploreBooks";

export default{
    title:'Molecules/Explore Books',
    component:ExploreBooks
} as ComponentMeta<typeof ExploreBooks>;

const Template:ComponentStory<typeof ExploreBooks>= (args)=> <ExploreBooks {...args} />

export const BasicExploreBooks = Template.bind({});