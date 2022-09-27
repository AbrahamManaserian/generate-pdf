import { Grid } from "@mui/material";
import image2 from '../images/2.jpeg'



export default function Tempate1 () {
    return (
        <Grid item container xs={12}>
            <Grid item container xs={6}>
                
            </Grid>
            <Grid item container xs={6}>
               <img src={image2} alt='image2' style={{width:'100%',height:'auto'}}/>
            </Grid>
        </Grid>
    )
}