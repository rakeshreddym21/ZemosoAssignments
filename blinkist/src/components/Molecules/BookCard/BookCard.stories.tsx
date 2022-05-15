import { ComponentMeta, ComponentStory } from "@storybook/react"
import image_1 from '../../Atoms/images/1.png';
import { ProgressBar } from "../../Atoms/ProgressBar/ProgressBar";
import CurrentlyReading from "../../Organisms/GridOfBooks/CurrentlyReading";
import BookCard from "./BookCard";
import image_2 from '../../Atoms/images/2.png';
import { Button, Typography } from "@mui/material";
import PlusIcon from "../../Atoms/PlusIcon/PlusIcon";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default{

    title:'Molecules/BookCard',
    component: BookCard
} as ComponentMeta<typeof BookCard>;
const type1 = "Trending Blinks";
  const type2 = "Just Added";
  const type3 = "Featured Audio Blinks";
const handleClick = async(id:number,type:string) =>{

    // CurrentlyReading.filter((book: { id: number ; src: string; name: string; author: string; duration: string; noOfReads: string; })=>book.id===10).length===0 && 
    //     CurrentlyReading.push(
    //     {'id':10,'src':image_2,'name':"Beyond Entrepreneurship", 'author':"JimCollins", 'duration':"15-minute read",'noOfReads':"1.9k reads"}
    // );
    if(type==type1){
    await axios
        .get(`http://localhost:3001/trendingblinks/${id}`)
        .then(async (res) => {
          await axios.post(`http://localhost:3001/currentlyreading`, res.data);
        });
    }
    else if(type==type2){
        await axios
        .get(`http://localhost:3001/justadded/${id}`)
        .then(async (res) => {
          await axios.post(`http://localhost:3001/currentlyreading`, res.data);})
    }
    else{
        await axios
        .get(`http://localhost:3001/featuredaudioblinks/${id}`)
        .then(async (res) => {
          await axios.post(`http://localhost:3001/currentlyreading`, res.data);})
    }
}



const Template : ComponentStory<typeof BookCard> = (args) => 
<BookCard {...args}>
<Link to="/" style={{ textDecoration: "none" }}>

<Button variant="outlined" onClick={()=>handleClick(args.id,args.type)}  style={{
    height: '52px',
    width: '296px',
    borderRadius: '0px',
    padding: '14px, 24px, 14px, 24px'
}} sx={{ ':hover': {  backgroundColor: '#0365F2', color: '#FFFFFF'  } }} > 
        <PlusIcon /> 
        <Typography  variant="body1" style={{
             height: '20px',
             borderRadius: 'nullpx',
             fontFamily: 'Raleway',
             fontStyle: 'normal',
             fontWeight: 'normal',
             fontSize: '16px',
             lineHeight: '20px',
             textTransform:'initial',
             width:'auto',
             paddingLeft:'13px'
        }}> Add To Library  </Typography>
         </Button>
         </Link>
</BookCard> 

export const ExplorePageCard = Template.bind({});
ExplorePageCard.args={
    bookName:'Wise and Otherwise',
    author:'Sudha Murthy',
    readTime:'120-minute read',
    reads:'12k reads',
    id:100,
    image:image_1
};

const Template2 : ComponentStory<typeof BookCard> = (args) => 
<BookCard {...args}>
<ProgressBar />
</BookCard> 

export const HomePageCard = Template2.bind({});
HomePageCard.args={
    bookName:'Wise and Otherwise',
    author:'Sudha Murthy',
    readTime:'120-minute read',
    reads:'12k reads',
    id:200,
    image:image_1
};


  
    
