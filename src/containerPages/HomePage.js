import { Grid, Typography } from '@mui/material'
import image1 from '../images/1.webp'
import image2 from '../images/2.jpeg'
import image3 from '../images/3.webp'
import { Link } from 'react-router-dom'
import {db} from '../firebas'
import { collection, addDoc } from "firebase/firestore";
// import firebase from 'firebase'


export default function HomePage () {
    async function writeData () {
       
          
    }
    writeData()
    return (
        <Grid item container xs ={12} spacing={3}>
            <Grid item container xs={12} justifyContent='center' sx={{marginTop:3}}>
                <Typography>
                    Choose the template
                </Typography>
            </Grid>
            <Grid item container xs={4}>
              <Link to='/createCV/template1'>
                <img src={image1} style={{width:'100%',height:'auto'}}/>
              </Link>
            </Grid>
            <Grid item container xs={4}>
              <Link to='/createCV/template2' >
                <img src={image2} style={{width:'100%',height:'100%'}}/>
              </Link>
            </Grid>
            <Grid item container xs={4}>
              <Link to='/createCV/template3'>
                 <img src={image3} style={{width:'100%',height:'auto'}}/>
              </Link>
            </Grid>
        </Grid>
    )
}