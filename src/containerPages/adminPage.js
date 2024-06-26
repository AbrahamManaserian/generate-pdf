import { Avatar, Box, Button, Checkbox, Collapse, Grid, List, ListItem, ListItemButton, ListItemText, ListSubheader, Menu, MenuItem, Rating, Tab, Tabs, TextField, Typography } from "@mui/material";
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import {  Link, Outlet, useNavigate } from "react-router-dom";
import avatarImage from '../images/Abdul-Qadir.webp'
import { doc, setDoc, deleteDoc, getDocs, collection } from "firebase/firestore"; 
import {db} from '../firebas'
import { ExpandLess, ExpandMore } from "@mui/icons-material";


export  function CheckboxListSecondary() {
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 360,maxHeight:200,overflow:'scroll', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3,4,5,6,7,8].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}



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

function SingleChoiceQuestion (props) {
    
    const [inputs, setInputs] = useState({
        question:'',
        answer:'',
        answers:[],
        correctAnswer:'',
        rate:{

        },

    })
    const [anchorElAnswer, setAnchorElAnswer] = useState(null);
    // console.log(inputs)
    async function handleSaveQustion (num) {
        const questionType = num===0 ? 'Single Choice' : num ===1 ? 'Multiple choice' : 'Text'
        if(inputs.question) {
            const obj ={}
            inputs.answers.forEach(item=>{
                if(item===inputs.correctAnswer) {
                    obj[item] = 5
                }else{
                    obj[item] = 0
                }
            })
            await setDoc(doc(db, "questions", inputs.question), {answers:inputs.answers,
                                                                 type:questionType,
                                                                 correctAnswer:inputs.correctAnswer,
                                                                 rate:obj
                                                                });
            setInputs({
                question:'',
                answer:'',
                answers:[],
                correctAnswer:'',
                rate:{

                }
            })
        }else{

        }
    }
    // console.log(inputs)
    return (
        <Grid item container xs={12} direction='row' margin={5} padding={2} sx={{border:5,borderColor:'#eeeeee',overflow:'scroll'}} >
            <Grid item container xs={12} justifyContent='center'>
                <Typography>
                     Create questions
                </Typography>
            </Grid>
            <Grid item container xs={8}>
             <Grid item container xs={12} direction='column' alignItems="flex-start">
               <TextField 
               fullWidth
                // sx={{'& .MuiFormLabel-root':{fontSize:'1vw',},width:300}}
                // sx={{width:{xs:'auto',sm:500}}}
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
                       id='"basic-menu-answe"'
                       sx={{width:{xs:'auto',sm:500}}}
                       variant="standard"
                       multiline
                       value={inputs.answer}
                       label="Answer"
                       onKeyDown ={ (e) => {
                        e.stopPropagation();
                        }}
                       onChange={(e)=>setInputs({...inputs,answer:e.target.value,})}
                       />
                       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                          <Button onClick={()=>setInputs({...inputs,answers:[...inputs.answers,inputs.answer],answer:''}) } >Add</Button>
                          <Button onClick={()=>setInputs({...inputs,answer:''})}>Clear</Button>
                          <Box sx={{display:'flex',flexDirection:'column',marginLeft:1}}>
                            <Button onClick={()=>setInputs({...inputs,answers:[...inputs.answers,inputs.answer],correctAnswer:inputs.answer ,answer:''}) }
                                sx={{p:0,m:0}}
                            >
                                add/mark
                            </Button>
                            <Typography sx={{fontSize:7,color:'blue'}}>
                                Mark as the correct answer
                            </Typography>

                          </Box>
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
                          <Typography sx={{marginRight:2,color:item===inputs.correctAnswer ? 'green' :'auto'}}>
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
          <Grid item container xs={4} >
            <Button onClick={()=>handleSaveQustion(props.num)}>
                Save
            </Button>
          </Grid>
        </Grid>
    )

}

export default function AdminPage () {
    const [tabValue, setTabValue] =useState(0);
    const [openTab, setOpenTab] =useState(false);
    const [openCreate, setOpenCreate] =useState(false);
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
    // console.log(openTab,tabValue)
    return (
      <div style={{overflow:'hidden'}}>
        {admin && <div style={{width:'100%'}} >
            <Box sx={{display:'flex',justifyContent:'space-between',p:1, alignItems:'center'}}>
              <Link to='/admin/createAssessment' style={{textDecoration:'none'}} >
                 <Button>
                     Create Assessment
                 </Button>
              </Link>
              <Button onClick={()=>{
                setOpenTab(!openTab)
                setOpenCreate(false)
              }}>
                 Create Questions
              </Button>
              <Link to='/admin/questions' style={{textDecoration:'none'}} >
                 <Button >
                    Questions
                 </Button>
              </Link>
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
                <Grid item container xs={12} sx={{display:tabValue===0 && openTab ? 'flex' : 'none'}} >
                     <SingleChoiceQuestion num = {tabValue}/>
                </Grid>
                <Grid item container xs={12} sx={{display:tabValue===1 && openTab ? 'flex' : 'none'}} >
                     <SingleChoiceQuestion num={tabValue} />
                </Grid>
            </Grid>
        </div>}
      </div>
    )
}