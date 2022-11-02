import { Document, Image, Page, PDFViewer, Text, View } from "@react-pdf/renderer"
import { format } from "date-fns"
import logoImage from './images/challengeImages/Logo-company.jpg'
import logoFocusImage from './images/challengeImages/logo-focus.jpg'
import handShakeImage from './images/challengeImages/logo-handshake.jpg'
import localityImage from './images/challengeImages/logo-locality.jpg'


const dataBase = {
    1:{
        LastName:'Ari',
        firstName:'Roberto',
        nationality:'DOM',
        location:'Bad Homburg',
        availibility:{
            monday:0,
            tuesday:1,
            wednesday:1,
            thursday:0,
            friday:0,
            saturday:0,
            sunday:2,
        }
    },
    2:{
        LastName:'Caral',
        firstName:'Wester ',
        nationality:'DOM',
        location:'Dohren',
        availibility:{
            monday:1,
            tuesday:0,
            wednesday:2,
            thursday:3,
            friday:3,
            saturday:1,
            sunday:0,
        }
    },
    3:{
        LastName:'Cabrera',
        firstName:'Jesus ',
        nationality:'VEN',
        location:'Bad Homburg',
        availibility:{
            monday:0,
            tuesday:3,
            wednesday:0,
            thursday:0,
            friday:0,
            saturday:0,
            sunday:1,
        }
    },
    4:{
        LastName:'Garcia',
        firstName:'Franklin',
        nationality:'DOM',
        location:'Garching',
        availibility:{
            monday:0,
            tuesday:1,
            wednesday:1,
            thursday:4,
            friday:1,
            saturday:2,
            sunday:0,
        }
    },
    5:{
        LastName:'Cecion',
        firstName:'Roberto',
        nationality:'USA',
        location:'Ansbach',
        availibility:{
            monday:1,
            tuesday:0,
            wednesday:1,
            thursday:0,
            friday:0,
            saturday:2,
            sunday:1,
        }
    },
    6:{
        LastName:'Gantiers',
        firstName:'Iverson',
        nationality:'CUB',
        location:'Dohren',
        availibility:{
            monday:1,
            tuesday:1,
            wednesday:4,
            thursday:0,
            friday:3,
            saturday:0,
            sunday:1,
        }
    },
    7:{
        LastName:'Castanos',
        firstName:'Jesus',
        nationality:'DOM',
        location:'Garching',
        availibility:{
            monday:0,
            tuesday:0,
            wednesday:1,
            thursday:2,
            friday:0,
            saturday:0,
            sunday:0,
        }
    },
    8:{
        LastName:'Gonzalez',
        firstName:'George',
        nationality:'VEN',
        location:'Bad Homburg',
        availibility:{
            monday:0,
            tuesday:3,
            wednesday:1,
            thursday:0,
            friday:1,
            saturday:0,
            sunday:1,
        }
    },
    9:{
        LastName:'Guerra',
        firstName:'Henryk',
        nationality:'DOM',
        location:'Dohren',
        availibility:{
            monday:2,
            tuesday:0,
            wednesday:1,
            thursday:0,
            friday:0,
            saturday:1,
            sunday:0,
        }
    },
    10:{
        LastName:'Dresus',
        firstName:'Dango',
        nationality:'DOM',
        location:'München',
        availibility:{
            monday:0,
            tuesday:1,
            wednesday:0,
            thursday:1,
            friday:2,
            saturday:0,
            sunday:0,
        }
    },
    11:{
        LastName:'Areon',
        firstName:'Joseph',
        nationality:'DOM',
        location:'Berlin',
        availibility:{
            monday:0,
            tuesday:1,
            wednesday:0,
            thursday:0,
            friday:0,
            saturday:1,
            sunday:0,
        }
    },
    12:{
        LastName:'Sabino',
        firstName:'Leonardo',
        nationality:'CUB',
        location:'Neuenburg',
        availibility:{
            monday:4,
            tuesday:0,
            wednesday:3,
            thursday:0,
            friday:1,
            saturday:0,
            sunday:0,
        }
    },
    13:{
        LastName:'Olciedo',
        firstName:'Jonathan',
        nationality:'DOM',
        location:'Ansbach',
        availibility:{
            monday:0,
            tuesday:2,
            wednesday:1,
            thursday:2,
            friday:0,
            saturday:0,
            sunday:0,
        }
    },
    14:{
        LastName:'Perez',
        firstName:'Manuel',
        nationality:'BRA',
        location:'Ansbach',
        availibility:{
            monday:0,
            tuesday:0,
            wednesday:0,
            thursday:0,
            friday:1,
            saturday:2,
            sunday:5,
        }
    },
    15:{
        LastName:'Pimentel ',
        firstName:'Brayan',
        nationality:'DOM',
        location:'Karlsruhe ',
        availibility:{
            monday:1,
            tuesday:0,
            wednesday:3,
            thursday:0,
            friday:1,
            saturday:0,
            sunday:0,
        }
    },
    16:{
        LastName:'Tyes',
        firstName:'Ripken',
        nationality:'CUB',
        location:'München',
        availibility:{
            monday:0,
            tuesday:1,
            wednesday:0,
            thursday:1,
            friday:0,
            saturday:1,
            sunday:0,
        }
    },
    17:{
        LastName:'Rodriguez',
        firstName:'Alexander',
        nationality:'DOM',
        location:'Bad Homburg',
        availibility:{
            monday:0,
            tuesday:0,
            wednesday:1,
            thursday:0,
            friday:0,
            saturday:3,
            sunday:1,
        }
    },
    18:{
        LastName:'Schwarz',
        firstName:'Raymundo',
        nationality:'USA',
        location:'Berlin',
        availibility:{
            monday:1,
            tuesday:0,
            wednesday:1,
            thursday:0,
            friday:1,
            saturday:0,
            sunday:0,
        }
    },
    19:{
        LastName:'Rosario',
        firstName:'Esaak',
        nationality:'DOM',
        location:'München',
        availibility:{
            monday:0,
            tuesday:1,
            wednesday:0,
            thursday:2,
            friday:1,
            saturday:0,
            sunday:2,
        }
    },
    20:{
        LastName:'Valenzuela',
        firstName:'Emil',
        nationality:'DOM',
        location:'Metz',
        availibility:{
            monday:1,
            tuesday:0,
            wednesday:0,
            thursday:2,
            friday:0,
            saturday:3,
            sunday:0,
        }
    },

}
const companyAddressorInfo ={
    companyName:'ARRIMO DIGITAL',
    firstName:'Tom',
    lastName:'Schlepp',
    street:'Schäringerstraße',
    streetNumber:3,
    postalCode:'80634',
    location:'Berlin',
    telephone:'8912738676',
    email:'info@arrimo-digital.de',
}
const dates ={
    firstDate:'12.04.2022',
    secondDate:'08.11.1988',
    thirdDate:'05.08.2016'
}
const companyAddresseeInfo ={
    companyName:'Disciples München-Haar ',
    firstName:'Sarah',
    lastName:'Enstone',
    street:'Keferloherstraße',
    streetNumber:24,
    postalCode:'85540',
    location:'Haar',
    telephone:'',
    email:'',
}

export default function ChallengePDF () {

    const Header = (props) =>{

        return(
            <View wrap={false} style={{display:'flex',flexDirection:'column',alignItems:'center',padding:1}}>
            <View style={{display:'flex',padding:'13px 30px 13px 30%',backgroundColor:'#19334d',width:'85%',alignItems:'flex-end'}}>
                <Image style={{width:'90%'}} src={logoImage}></Image>
            </View>
            <View style={{width:'100%',display:'flex'}}>
              <View style={{display:'flex',flexDirection:'row',padding:'50px 0 0 60px'}}>
                 <Text style={{fontSize:'9px'}}>
                    {companyAddressorInfo.firstName} {companyAddressorInfo.lastName}
                 </Text >
                 <Text style={{padding:'0 20px 0 20px',fontSize:'10px'}}>
                    -
                 </Text>
                 <Text style={{fontSize:'9px'}}>
                    {companyAddressorInfo.street} {companyAddressorInfo.streetNumber}
                 </Text>
                 <Text style={{padding:'0 20px 0 20px',fontSize:'9px'}}>
                    -
                 </Text>
                 <Text style={{fontSize:'9px'}}>
                    {companyAddressorInfo.postalCode} {companyAddressorInfo.location}
                 </Text>
              </View>
              <View style={{display:'flex',flexDirection:'column',padding:'30px 0 0 60px'}}>
                 <Text style={{fontSize:'11px',fontWeight:'bold', paddingBottom:'20px'}}>
                    {companyAddresseeInfo.companyName} {companyAddresseeInfo.lastName}
                 </Text >
                 <Text style={{fontSize:'10px',paddingBottom:'2px'}}>
                    {companyAddresseeInfo.firstName} {companyAddresseeInfo.lastName}
                 </Text >
                
                 <Text style={{fontSize:'10px',paddingBottom:'2px'}}>
                    {companyAddresseeInfo.street} {companyAddresseeInfo.streetNumber}
                 </Text>
                 
                 <Text style={{fontSize:'10px',paddingBottom:'2px'}}>
                    {companyAddresseeInfo.postalCode} {companyAddresseeInfo.location}
                 </Text>
                 <View style={{display:'flex',padding:'10px 80px 0 0', flexDirection:'row', justifyContent:'flex-end'}}>
                    <Text style={{fontSize:'10px',paddingBottom:'2px'}}>
                       {props.date}
                    </Text>
                 </View>
              </View>
             
            </View>
           <View style={{width:'85%'}}>
              <Text style={{fontSize:'10px',padding:'40px 0 2px 0'}}>
                 Subject: Staff availibility at {format(new Date(props.date), ' w/u')}
              </Text>
              <Text style={{fontSize:'10px',padding:'25px 0 0 0'}}>
                 Dear {companyAddresseeInfo.companyName},
              </Text>
              <Text style={{fontSize:'10px',paddingTop:'10px',whiteSpace:'pre-wrap'}}>
                Hearby I inform you about the availibity of our staff by location and nationality for the current week.
              </Text>
              <Text style={{fontSize:'10px',paddingTop:'2px',whiteSpace:'pre-wrap'}}>
                If you are interested in getting in touch with us, feel free to contact us. 
              </Text>
              <Text style={{fontSize:'10px',paddingTop:'2px',whiteSpace:'pre-wrap'}}>
                {companyAddressorInfo.companyName} is looking forward to support your event.
              </Text>
              <Text style={{fontSize:'10px',paddingTop:'10px',whiteSpace:'pre-wrap'}}>
                With best regards,
              </Text>
              <Text style={{fontSize:'10px',paddingTop:'10px',whiteSpace:'pre-wrap'}}>
                {companyAddressorInfo.firstName} {companyAddressorInfo.lastName}  
              </Text>
           </View>
         </View>  
        )
    }

    const DocPDF = () => {
        return(
            <Document>
                <Page size="A4" style={{padding:"5px"}}>
                 <View>
                   <Header date = {dates.firstDate}/>
                   <View style={{display:'flex',flexDirection:'column',border:'1px',margin:'40px 20px 0 20px'}}>
                    <View style={{margin:'1px',marginBottom:0, display:'flex', flexDirection:'row'}}>
                       <View  style={{display:'flex',flexDirection:'row',backgroundColor:'#bdbdbd',border:'1px',width:'50%'}}>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'6%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                #
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'30%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                Last Name
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                First Name
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'18%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                               Nationality
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                Location
                             </Text>
                           </View>
                       </View>
                       <View  style={{display:'flex',flexDirection:'row',backgroundColor:'#bdbdbd',width:'50%',marginLeft:'1px',border:'1px'}}>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                               { +format(new Date(dates.firstDate), 'dd')+1}/{format(new Date(dates.firstDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                MO
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.firstDate), 'dd')+2}/{format(new Date(dates.firstDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                TU
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.firstDate), 'dd')+3}/{format(new Date(dates.firstDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                WE
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.firstDate), 'dd')+4}/{format(new Date(dates.firstDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               TH
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.firstDate), 'dd')+5}/{format(new Date(dates.firstDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               FR
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.firstDate), 'dd')+6}/{format(new Date(dates.firstDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               SA
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.firstDate), 'dd')+7}/{format(new Date(dates.firstDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                SO
                             </Text>
                           </View>
                       </View>
                    </View>
                
                   {Object.keys(dataBase).map((item,index)=>{
                     if(index > 9) return(
                       <View key={item} style={{margin:'0 1px 0 1px', display:'flex', flexDirection:'row'}}>
                        <View  style={{display:'flex',flexDirection:'row',border:'1px',width:'50%',borderTop:0}}>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'6%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {index+1}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'30%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].LastName}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].firstName}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'18%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].nationality}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].location}
                              </Text>
                            </View>
                        </View>
                        <View  style={{display:'flex',flexDirection:'row',width:'50%',marginLeft:'1px',border:'1px',borderTop:0}}>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.monday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.tuesday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.wednesday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.thursday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.friday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.saturday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.sunday || ''}
                              </Text>
                            </View>
                        </View>
                     </View>
                      )
                   })}
                  </View>
                </View>   
                 <View>
                   <Header date = {dates.secondDate}/>
                   <View style={{display:'flex',flexDirection:'column',border:'1px',margin:'40px 20px 0 20px'}}>
                    <View style={{margin:'1px',marginBottom:0, display:'flex', flexDirection:'row'}}>
                       <View  style={{display:'flex',flexDirection:'row',backgroundColor:'#bdbdbd',border:'1px',width:'50%'}}>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'6%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                #
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'30%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                Last Name
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                First Name
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'18%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                               Nationality
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                Location
                             </Text>
                           </View>
                       </View>
                       <View  style={{display:'flex',flexDirection:'row',backgroundColor:'#bdbdbd',width:'50%',marginLeft:'1px',border:'1px'}}>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                               { +format(new Date(dates.secondDate), 'dd')+1}/{format(new Date(dates.secondDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                MO
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.secondDate), 'dd')+2}/{format(new Date(dates.secondDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                TU
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.secondDate), 'dd')+3}/{format(new Date(dates.secondDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                WE
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.secondDate), 'dd')+4}/{format(new Date(dates.secondDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               TH
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.secondDate), 'dd')+5}/{format(new Date(dates.secondDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               FR
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.secondDate), 'dd')+6}/{format(new Date(dates.secondDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               SA
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.secondDate), 'dd')+7}/{format(new Date(dates.secondDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                SO
                             </Text>
                           </View>
                       </View>
                    </View>
                
                   {Object.keys(dataBase).map((item,index)=>{
                     if(dataBase[item].nationality === 'DOM') return(
                       <View key={item} style={{margin:'0 1px 0 1px', display:'flex', flexDirection:'row'}}>
                        <View  style={{display:'flex',flexDirection:'row',border:'1px',width:'50%',borderTop:0}}>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'6%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {index+1}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'30%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].LastName}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].firstName}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'18%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].nationality}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].location}
                              </Text>
                            </View>
                        </View>
                        <View  style={{display:'flex',flexDirection:'row',width:'50%',marginLeft:'1px',border:'1px',borderTop:0}}>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.monday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.tuesday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.wednesday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.thursday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.friday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.saturday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.sunday || ''}
                              </Text>
                            </View>
                        </View>
                     </View>
                      )
                   })}
                  </View>
                </View>   
                 <View>
                   <Header date = {dates.thirdDate}/>
                   <View style={{display:'flex',flexDirection:'column',border:'1px',margin:'40px 20px 0 20px'}}>
                    <View style={{margin:'1px',marginBottom:0, display:'flex', flexDirection:'row'}}>
                       <View  style={{display:'flex',flexDirection:'row',backgroundColor:'#bdbdbd',border:'1px',width:'50%'}}>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'6%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                #
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'30%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                Last Name
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                First Name
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'18%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                               Nationality
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                Location
                             </Text>
                           </View>
                       </View>
                       <View  style={{display:'flex',flexDirection:'row',backgroundColor:'#bdbdbd',width:'50%',marginLeft:'1px',border:'1px'}}>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                               { +format(new Date(dates.thirdDate), 'dd')+1}/{format(new Date(dates.thirdDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                MO
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.thirdDate), 'dd')+2}/{format(new Date(dates.thirdDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                TU
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.thirdDate), 'dd')+3}/{format(new Date(dates.thirdDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                WE
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.thirdDate), 'dd')+4}/{format(new Date(dates.thirdDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               TH
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.thirdDate), 'dd')+5}/{format(new Date(dates.thirdDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               FR
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.thirdDate), 'dd')+6}/{format(new Date(dates.thirdDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                               SA
                             </Text>
                           </View>
                           <View style={{display:'flex',justifyContent:'center',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                             <Text style={{fontSize:'8px',}}>
                                { +format(new Date(dates.thirdDate), 'dd')+7}/{format(new Date(dates.thirdDate), '/MM')}
                             </Text>
                             <Text style={{fontSize:'8px',}}>
                                SO
                             </Text>
                           </View>
                       </View>
                    </View>
                
                   {Object.keys(dataBase).map((item,index)=>{
                     if(dataBase[item].location === 'Ansbach' || dataBase[item].location === 'Dohren') return(
                       <View key={item} style={{margin:'0 1px 0 1px', display:'flex', flexDirection:'row'}}>
                        <View  style={{display:'flex',flexDirection:'row',border:'1px',width:'50%',borderTop:0}}>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'6%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {index+1}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'30%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].LastName}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].firstName}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'18%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].nationality}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',height:'22px',width:'24%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].location}
                              </Text>
                            </View>
                        </View>
                        <View  style={{display:'flex',flexDirection:'row',width:'50%',marginLeft:'1px',border:'1px',borderTop:0}}>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.monday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.tuesday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.wednesday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.thursday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.friday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',borderRight:'1px',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                {dataBase[item].availibility.saturday || ''}
                              </Text>
                            </View>
                            <View style={{display:'flex',justifyContent:'center',height:'22px',width:'14%',alignItems:'center',overflow:'hidden',padding:'1px'}}>
                              <Text style={{fontSize:'8px',}}>
                                 {dataBase[item].availibility.sunday || ''}
                              </Text>
                            </View>
                        </View>
                     </View>
                      )
                   })}
                  </View>
                </View>   
                 
                 
                </Page>
            </Document>
        )
    }
    return(
        <div>
            <div style={{width:'100%'}}>

           <PDFViewer style={{ width: '80%', height: 800 }}>
                <DocPDF/>
           </PDFViewer>
        </div>
        </div>
    )
}

