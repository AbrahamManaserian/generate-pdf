import { Box, Checkbox, Collapse, Grid, List, ListItem, ListItemButton, ListItemText, ListSubheader, Rating, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {  Link, Outlet, useNavigate } from "react-router-dom";
import { doc, setDoc, deleteDoc, getDocs, collection } from "firebase/firestore"; 
import {db} from '../firebas'
import { ExpandLess, ExpandMore } from "@mui/icons-material";


export default function CreateAssessment () {
    const [openListOfQuestions, setopenListOfQuestions] = useState(false)
    const [questions, setQuestions] = useState([])
    const [assessment,setAssessment] = useState({
        name:'',
        questions:[-1],
        questionsAnswers:[],
        
    })

    const handleToggle = (value) => () => {
       const currentIndex = assessment.questions.indexOf(value);
       const newChecked = [...assessment.questions];
    
       if (currentIndex === -1) {
         newChecked.push(value);
       } else {
         newChecked.splice(currentIndex, 1);
       }
       const arr = structuredClone(questions)
       const filteredArr1 = arr.filter(item1=>newChecked.includes(Object.keys(item1)[0]) && !assessment.questions.includes(Object.keys(item1)[0]))
       const filteredArr2 = assessment.questionsAnswers.filter(item=>newChecked.includes(Object.keys(item)[0]))
       setAssessment({...assessment,questions:newChecked,questionsAnswers:[...filteredArr1,...filteredArr2]});
     };

    useEffect(()=>{
        getDocs(collection(db, "questions")).then(result=>{
            result.forEach((doc) => {
                setQuestions((prev)=>[...prev,{[doc.id]:doc.data()}])
              })
        })
    },[])
    const handleChangeRate = (newValue,item1,index,name) => {
        const obj = {...assessment,}
        obj.questionsAnswers[index][name].rate[item1]=newValue
        setAssessment(obj)
    }
    return (
        <div style={{overflow:'hidden',padding:20}}>
        <Grid item container xs={12} justifyContent='center'>
           <Typography sx={{fontWeight:'medium',paddingBottom:2}}>
                Create Assessment
           </Typography>
        </Grid>
        <Grid item xs={12} container direction='row'  padding={2} sx={{border:5,borderColor:'#eeeeee',overflow:'hidden'}} >
            
           <Grid item container sm={12} md={4} direction='column' >
              <TextField 
                 fullWidth
                 // sx={{'& .MuiFormLabel-root':{fontSize:'1vw',},width:300}}
                 // sx={{width:{xs:'auto',sm:500}}}
                 variant="standard"
                 multiline
                 value={assessment.name}
                 //    InputProps={{ sx: {fontSize:'2vw',overflow:'scroll' } }}
                 label="Assessment Name"
                 onChange={(e)=>setAssessment({...assessment,name:e.target.value})}
              />
              <List 
                  sx={{ width: '100%',  bgcolor: 'background.paper',borderBottom:1,marginBottom:2 }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Select questions
                    </ListSubheader>
                  }
               >
                  <ListItemButton onClick={()=>setopenListOfQuestions(!openListOfQuestions)}>
                     <ListItemText primary="Questions" />
                     {openListOfQuestions ? <ExpandLess /> : <ExpandMore />}
                   </ListItemButton>
                   <Collapse in={openListOfQuestions} timeout="auto" unmountOnExit>
                      <List dense sx={{ width: '100%', maxWidth: 360,maxHeight:200,overflow:'scroll', bgcolor: 'background.paper' }}>
                         {questions.map((value) => {
                           const labelId = `checkbox-list-secondary-label-${Object.keys(value)[0]}`;
                           return (
                             <ListItem
                               key={Object.keys(value)[0]}
                               secondaryAction={
                                 <Checkbox
                                   edge="end"
                                   onChange={handleToggle(Object.keys(value)[0])}
                                   checked={assessment.questions.indexOf(Object.keys(value)[0]) !== -1}
                                   inputProps={{ 'aria-labelledby': labelId }}
                                 />
                               }
                               disablePadding
                             >
                               <ListItemButton>
                                 <ListItemText id={labelId} primary={Object.keys(value)[0]} />
                               </ListItemButton>
                             </ListItem>
                           );
                         })}
                       </List>
                   </Collapse>
               </List>

           </Grid>
           <Grid item container sm={12} md={8} sx={{p:1 }} >
             {assessment.questionsAnswers.map((item,index)=> {
                // console.log(item[Object.keys(item)[0]])
               if (item !== -1)   return (
                  <Grid item container xs ={12} key ={index} sx={{p:1,borderBottom:1, }} justifyContent='center' alignItems="flex-start" >
                      {/* <Grid item container xs={12} justifyContent='center' > */}
                       <Typography sx={{borderBottom:1,fontWeight:'medium',fontSize:20}}>
                           {Object.keys(item)[0]} 
                       </Typography>
                      {/* </Grid> */}
                        <Grid item container xs={12} direction='column'  alignItems="center" >
                           {item[Object.keys(item)[0]].answers.map((item1,index1)=> {
                            return (
                                <Box sx={{display:'flex', flexDirection:'row',border:item[Object.keys(item)[0]].correctAnswer === item1 ? 1 : 'none',
                                    borderColor:'green',p:1,borderRadius:2}} key={index1}>
                                   <Typography sx={{paddingRight:2}}>
                                       {item1}
                                   </Typography>
                                   <Rating name="half-rating" 
                                           precision={0.5}
                                           value={item[Object.keys(item)[0]].rate[item1]}
                                           onChange={(event, newValue) => {
                                             handleChangeRate(newValue,item1,index,Object.keys(item)[0]);
                                           }}
                                    />
                                </Box>
                            )
                           })}
                        </Grid>
                    </Grid>    
                )
             })}
           </Grid>
        </Grid>
    </div>
    )
}