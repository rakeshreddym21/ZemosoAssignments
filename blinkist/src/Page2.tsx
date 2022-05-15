import { StyledEngineProvider } from "@mui/material";
import React, { useState } from "react";
import MyAppBar from "./components/Organisms/AppBar/MyAppBar";
import AppBarWithCategories from "./components/Organisms/AppBarWithCategories/AppBarWithCategories";
import ExploreBooks from "./components/Molecules/ExploreBooks/ExploreBooks";
import { Footer } from "./components/Organisms/Footer/Footer";
import TrendingBlinks from "./components/Organisms/TrendingBlinks/TrendingBlinks";

const Page2 : React.FunctionComponent = () =>
{
    

    const [value,setValue]=useState(0);

    const handleChange=(e:React.MouseEventHandler<SVGSVGElement>,newValue: number)=>{
     setValue(newValue);
     
   }
    return(

        <StyledEngineProvider injectFirst>

            <div id="appbar">
    { value===1 &&  <AppBarWithCategories handleChange={handleChange}/> }
    {value===0 && <MyAppBar handleChange={handleChange} />  }

            </div>

            <div id="explorebooks" style={{marginTop:'72px',marginLeft:'264px'}}>
                <ExploreBooks />
            </div>
           

            <div id="trendingblinks" style={{marginTop:'80px',marginLeft:'264px'}}>
                <TrendingBlinks />
            </div>

    

            <div id="footer">
                <Footer />
            </div>

        </StyledEngineProvider>

    );

}
export default Page2;