import { Button, Grid, TextField } from "@mui/material";
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Template1 from '../components/template1'
import Template2 from '../components/template2'
import Template3 from '../components/template3'


export default function CreateCV () {
    let params = useParams()
    // console.log(params)
    return (
        <div>
           {params.template.includes(1) && <Template1/>}
           {params.template.includes(2) && <Template2/>}
           {params.template.includes(3) && <Template3/>}
        </div>
    )
}