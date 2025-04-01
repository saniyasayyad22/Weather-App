import SerachBox from './searchbox'
import InformationBox from './informationbox'
import { useState } from 'react'
export default function Weather(){
    const [weather,setWeather]=useState({
        city:"Delhi",
        feels_like : 34.26,
        humidity :43,
        temp:32.88,
        tempMax:32.88,
        tempMin:32.88
     }
    );
    let updateInfo=(newresult)=>{
        setWeather(newresult);
    };
    return(
        <div>
            <SerachBox updateInfo={updateInfo}/>
            <InformationBox info={weather} />
        </div>
    );
}