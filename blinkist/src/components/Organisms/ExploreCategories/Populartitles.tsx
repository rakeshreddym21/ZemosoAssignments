import { Grid } from "@mui/material";
import React from "react";
import Category from "../../Molecules/Category/Category";
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

const PopularTitles:React.FunctionComponent = ()=>
{
    return(

        <React.Fragment>

            <Grid container>

                <Grid item>

                    

                    <Grid item >
                        <Category categoryname="Marketing & Sales" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <ShowChartOutlinedIcon /> } />
                    </Grid>

                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Personal Development" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <BarChartOutlinedIcon /> } />
                    </Grid>

                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Communication Skills" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <CommentOutlinedIcon /> } />
                    </Grid>


                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Money & Investments" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <AccountBalanceWalletOutlinedIcon /> } />
                    </Grid>

                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Sex & Relationship" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <FavoriteBorderOutlinedIcon /> } />
                    </Grid>


                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Education" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <SchoolOutlinedIcon /> } />
                    </Grid>



                </Grid>
                
            </Grid>

        </React.Fragment>

    );
}
export default PopularTitles 