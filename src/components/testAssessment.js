import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from "@mui/material";
import { useState, useMemo, useEffect} from "react";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";





export default function TestAssessment () {
    const auth = getAuth()
    const [user, setUser] = useState(null)
    const [signInInputs,setSignInInputs] = useState({
        password:'',
        email:'',
        showPassword:false,

    })
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              // ...
            }
          });
    },[])
      
    
    function signOutUser () {
        signOut(auth).then(() => {
            // console.log('sign out')
            setUser(null)
          }).catch((error) => {
            console.log(error)
          });
    }
    
    function signInUser (email,password) {
       
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            setSignInInputs({
                password:'',
                email:'',
                showPassword:false,
            })
          })
          .catch((error) => {
            console.log(error)
          });
    
    }
    
    return (
        <div>
          <Box sx={{display:'flex',justifyContent:'flex-end',p:1}}>
            <TextField  sx={{margin:'5px'}}
                id="outlined-basic" 
                value={signInInputs.email}
                onChange={(e)=>setSignInInputs({...signInInputs,email:e.target.value})}
                label="E-mail" 
                variant="outlined"
             />
            <FormControl  variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput sx={{margin:'5px'}}
                id="outlined-adornment-password"
                type={signInInputs.showPassword ? 'text' : 'password'}
                value={signInInputs.password}
                onChange={(e)=>setSignInInputs({...signInInputs,password:e.target.value})}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={()=>setSignInInputs({...signInInputs,showPassword:!signInInputs.showPassword})}
                      onMouseDown={(e)=>e.preventDefault()}
                      edge="end"
                      >
                      {signInInputs.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                />
            </FormControl>
            {!user && 
            <Link to='/admin' style={{textDecoration:'none'}}>
               <Button onClick={()=>signInUser(signInInputs.email,signInInputs.password)} variant='outlined' sx={{margin:'5px'}}>
                   Sign in
               </Button>
            </Link>
            }
            {user && <Button onClick={signOutUser} variant='outlined' sx={{margin:'5px'}}>
                Sign out
            </Button>}
          </Box>
        </div>

    )
}