import { Grid, Typography } from "@mui/material";
import Image1 from '../images/d3React.png'


export default function D3ToReact () {
    return (
        <div>
            <Grid item container xs={12} paddingTop={5} >
                <Grid item container xs={12} alignItems='center' direction='column' >
                    <Typography paddingBottom={2}>
                         "Build out a d3.js line chart utilizing react as show in the following images:" 
                    </Typography>
                    <Typography>
                         Please come back 'Wed Sep 28 2022 22:00:00 GMT+0400 (Armenia Standard Time)'
                    </Typography>
                    <img style={{width:'50%',heigth:'auto'}} alt='image' src={Image1}/>
                </Grid>
            </Grid>
        </div>
    )
}