import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function AboutUs(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutUs] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/AboutUs')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutUs(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return (
     <>

<Typography>Name: Myakala soumya</Typography>
<Typography>Father Name: Myakala komuraiah</Typography>
<Typography>Mother Name: Myakala padma</Typography>
<Typography>Email: myakalasoumya64@gmail.com</Typography>
<Typography>Phone No.: 6300212315</Typography>
 </>
)
}