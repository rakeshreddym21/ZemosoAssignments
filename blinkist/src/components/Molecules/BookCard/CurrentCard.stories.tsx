import { ComponentMeta, ComponentStory } from "@storybook/react";
import CurrentCard from "./CurrentCard";
import image_1 from '../../Atoms/images/1.png';


export default{
    title:'Molecules/NewCard',
    component:CurrentCard
} as ComponentMeta<typeof CurrentCard>;

const Template:ComponentStory<typeof CurrentCard> = (args) =>  <CurrentCard {...args} />

export const Currentlyreadingcard = Template.bind({});
Currentlyreadingcard.args={
    bookName:'Wise and Otherwise',
    author:'Sudha Murthy',
    readTime:'120-minute read',
    reads:'12k reads',
    image:image_1,
    buttonName:'Finished'
}

export const Finishedreadingcard = Template.bind({});
Finishedreadingcard.args={
    bookName:'Wise and Otherwise',
    author:'Sudha Murthy',
    readTime:'120-minute read',
    reads:'12k reads',
    image:image_1,
    buttonName:'Read again'
}