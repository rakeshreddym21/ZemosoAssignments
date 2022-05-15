import {  Grid } from "@mui/material";
import React from "react";
import Category from "../../Molecules/Category/Category";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
const ExploreByCategory:React.FunctionComponent = ()=>
{
    return(

        <React.Fragment>

            <Grid container>

                <Grid item>

                    
                   
                    <Grid item > 
                        <Category categoryname="Entrepreneurship"  sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <NotificationsNoneIcon /> } />
                    </Grid>

                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Science" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <ScienceOutlinedIcon /> } />
                    </Grid>

                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Economics" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <PublicOutlinedIcon /> } />
                    </Grid>


                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Corporate Culture" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <BusinessCenterOutlinedIcon /> } />
                    </Grid>

                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Psychology" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <PsychologyOutlinedIcon /> } />
                    </Grid>


                    <Grid item style={{marginTop:'28px'}}>
                    <Category categoryname="Nature & Environment" sx={{':hover': {color:'#0365F2',backgroundColor:'#F1F6F4'}}} icon={ <SpaOutlinedIcon /> } />
                    </Grid>



                </Grid>
                
            </Grid>

        </React.Fragment>

    );
}
export default ExploreByCategory