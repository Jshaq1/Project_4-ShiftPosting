import axios from 'axios'
import { useEffect, useState } from "react";

export default function MemeGen(props){
    const [bottomText, setBottomText] = useState()

    

    const options = {
        method: 'GET',
        url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
        params: {
          top: 'ANNNND ITS',
          bottom: bottomText,
          meme: props.claimed,
          font_size: '50',
          font: 'Impact'
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_MEMEGEN_APIKEY,
          'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
        }
      };
      
    // useEffect(() => {

    // },[props.claimed])

    return(
        <div></div>
    )
}