import { Button, Grid, TextField } from "@mui/material";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useMemo, useState } from "react";


export default function GeneratePdf () {
    // const [state,setState] = useState(async()=>{
    //     return await pdf(PdfPreview).toBlob()
    // })
    const [state,setState] = useState({
        address:'',
        size:'',
        price:'',
        year:'',
        name:'',

    })
    const [inputs,setInputs] = useState({
        address:'',
        size:'',
        price:'',
        year:'',
        name:'',

    })
    console.log(inputs)
    function PdfPreview () {
        return(
            <Document>
                <Page size="A4">
                    <View style={{flexDirection:'column',justifyContent:'center', }}>
                        <Text style={{padding:'10px'}}>
                            Name - {state.name}
                        </Text>
                        <Text style={{padding:'10px'}}>
                           Address - {state.address}
                        </Text>
                        <Text style={{padding:'10px'}}>
                            Size - {state.size}
                        </Text>
                        <Text style={{padding:'10px'}}>
                            Price - {state.price}
                        </Text>
                        <Text style={{padding:'10px'}}>
                            Year - {state.year}
                        </Text>
                    </View>
                </Page>
            </Document>
        )
    }
    const doc = useMemo(()=> <PdfPreview/>,[state])
    return (
        <div>
            <Grid item container xs={12}>
              <Grid item container xs={3} direction='column' alignContent='center' >
                 <TextField 
                    label="Name"
                    onChange={(e)=>setInputs({...inputs,name:e.target.value})}
                  />
                 <TextField sx={{marginTop:5}}
                    label="Address"
                    onChange={(e)=>setInputs({...inputs,address:e.target.value})}
                  />
                 <TextField sx={{marginTop:5}}
                    label="Size"
                    type='number'
                    onChange={(e)=>setInputs({...inputs,size:e.target.value})}
                  />
                 <TextField sx={{marginTop:5}}
                    label="Price"
                    type='number'
                    onChange={(e)=>setInputs({...inputs,price:e.target.value})}
                  />
                 <TextField sx={{marginTop:5}}
                    label="Year"
                    type='number'
                    onChange={(e)=>setInputs({...inputs,year:e.target.value})}
                  />
                 <Button sx={{marginTop:5}} onClick={()=>setState(inputs)}>
                    preview
                 </Button>
              </Grid>
              <Grid item container xs={9} alignItems="baseline">
                <PDFViewer style={{ width: '100%', height: 600 }}>
                    {doc}
                </PDFViewer>
              </Grid>
            </Grid>
        </div>
    )
}