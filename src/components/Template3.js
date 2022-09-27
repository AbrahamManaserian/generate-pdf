import { Grid } from "@mui/material";
import image3 from '../images/3.webp'



export default function Tempate1 () {
    return (
        <Grid item container xs={12}>
            <Grid item container xs={6}>
                
            </Grid>
            <Grid item container xs={6}>
               <img src={image3} alt='image3' style={{width:'100%',height:'auto'}}/>
            </Grid>
        </Grid>
    )
}