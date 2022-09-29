import { Avatar, Box, Button, Collapse, Grid, Menu, MenuItem, Tab, Tabs, TextField, Typography } from "@mui/material";
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import avatarImage from '../images/Abdul-Qadir.webp'

function QuestionsTab (props) {
  

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  return (
    <Box sx={{px:2, bgcolor: 'background.paper' }}>
      <Tabs
        value={props.value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      > 
        <Tab label="Single Choice" />
        <Tab label="Multiple Choice" />
        <Tab label="Text" />
        <Tab label="Number" />
      </Tabs>
    </Box>
  );
}


function signOutUser (auth,navigate) {
    
    signOut(auth).then(() => {
        navigate('/Assessment-Web-Application')
       
      }).catch((error) => {
        console.log(error)
      });
}


function SingleChoiceQuestion () {
    const [inputs, setInputs] = useState({
        question:'',
        answer:'',
        answers:[],

    })
    const [anchorElAnswer, setAnchorElAnswer] = useState(null);
    console.log(inputs)
    return (
        <Grid item container xs={12} direction='row' margin={5} padding={2} sx={{border:5,borderColor:'#eeeeee',overflow:'scroll'}} >
            <Grid item container xs={8}>
             <Grid item container xs={12} direction='column' alignItems="flex-start">
               <TextField 
                // sx={{'& .MuiFormLabel-root':{fontSize:'1vw',},width:300}}
                sx={{width:{xs:'auto',sm:500}}}
                variant="standard"
                multiline
                value={inputs.question}
                //    InputProps={{ sx: {fontSize:'2vw',overflow:'scroll' } }}
                label="Question"
                onChange={(e)=>setInputs({...inputs,question:e.target.value})}
                />
               <Button
                   id="basic-button"
                   aria-controls={Boolean(anchorElAnswer) ? 'basic-menu-answer' : undefined}
                   aria-haspopup="true"
                   aria-expanded={Boolean(anchorElAnswer) ? 'true' : undefined}
                   onClick={(e)=> setAnchorElAnswer(e.currentTarget)}
                 >
                   + Add Answer
                 </Button>
                 <Menu
                   id="basic-menu-answer"
                   anchorEl={anchorElAnswer}
                   open={Boolean(anchorElAnswer)}
                   onClose={()=>setAnchorElAnswer(null)}
                   MenuListProps={{
                     'aria-labelledby': 'basic-button',
                   }}
                 >
                   <MenuItem sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                    
                     <TextField 
                        id='"basic-menu-answer"'
                       // sx={{'& .MuiFormLabel-root':{fontSize:'1vw',},width:300}}
                       sx={{width:{xs:'auto',sm:500}}}
                       variant="standard"
                       multiline
                       value={inputs.answer}
                       //    InputProps={{ sx: {fontSize:'2vw',overflow:'scroll' } }}
                       label="Question"
                       onChange={(e)=>setInputs({...inputs,answer:e.target.value})}
                       />
                       <Box>
                          <Button onClick={()=>setInputs({...inputs,answers:[...inputs.answers,inputs.answer],answer:''}) } >Add</Button>
                          <Button onClick={()=>setInputs({...inputs,answer:''})}>Clear</Button>
                       </Box>
                   </MenuItem>
                 </Menu>

                 
             </Grid>
             <Grid item container xs={12} marginTop={5} sx={{overflow:'scroll'}}>
                <Typography>
                    - {inputs.question}
                </Typography>
            </Grid>
             <Grid item container xs={12} marginTop={5} sx={{overflow:'scroll'}} direction='column'>
                {inputs.answers.map((item,index)=> {
                    return(
                       <Box sx={{display:'flex',alignItems:'center',borderBottom:1,borderColor:'#e0e0e0',}} key ={index} >
                          <Typography sx={{marginRight:2}}>
                            {index+1}. {item}
                          </Typography>
                          <Button onClick={()=>setInputs({...inputs,answers:inputs.answers.filter((item1,index1)=>index1!==index)})}>
                            Delete
                          </Button>
                       </Box>
                    )
                })}
            </Grid>
            </Grid>
        </Grid>
    )

}

export default function AdminPage () {
    const [tabValue, setTabValue] =useState(0);
    const [openTab, setOpenTab] =useState(false);
    const [admin,setAdmin] = useState(null)
    const auth = getAuth()
    let navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setAdmin(user)
            } else {
              // User is signed out
              // ...
            }
          });
    },[])
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <div>
        {admin && <div>
            <Box sx={{display:'flex',justifyContent:'space-between',p:1, alignItems:'center'}}>
              <Typography sx={{fontSize:16,}}>
                 Create Assessment
              </Typography>
              <Button onClick={()=>setOpenTab(!openTab)}>
                 Create Assessment
              </Button>
              
              <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={{fontSize:16, paddingRight:1,fontWeight:'bold'}}>
                  Abdul Qadir
                </Typography>
                <Avatar alt="Abdul Qadir"
                        id="basic-button"
                        sx={{cursor:'pointer'}}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        src={avatarImage} />
                <Menu
                   id="basic-menu"
                   anchorEl={anchorEl}
                   open={open}
                   onClose={handleClose}
                   MenuListProps={{
                     'aria-labelledby': 'basic-button',
                   }}
                >
                   <MenuItem onClick={handleClose}>Profile</MenuItem>
                   <MenuItem onClick={handleClose}>My account</MenuItem>
                   <MenuItem onClick={handleClose}>Settings</MenuItem>
                   <MenuItem onClick={()=>signOutUser(auth,navigate)} >
                        Logout
                   </MenuItem>
                </Menu>
              </Box>
            </Box>
            <Grid  item container xs={12} justifyContent='center'>
                <Collapse in={openTab} timeout="auto" unmountOnExit>
                   <QuestionsTab value={tabValue} setValue={setTabValue} />
                </Collapse>
                <Grid item container xs={12}>
                   {tabValue===0 && openTab && <SingleChoiceQuestion/>}

                </Grid>


            </Grid>
        </div>}
      </div>
    )
}