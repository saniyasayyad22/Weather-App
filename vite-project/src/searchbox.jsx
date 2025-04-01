import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./searchbox.css"
export default function SerachBox({updateInfo}){
    const [city,setCity]=useState("");
    const API="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d0bf9e8c589fdcac2803695744ca911c";
    let getWeatherInfo=async()=>{
       let response= await fetch(`${API}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonresponse= await response.json();
       let result={
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feels_like:jsonresponse.main.feels_like, 
       }
       console.log(result)
      return result;
    }
    let cityName=(event)=>{
      setCity(event.target.value);
    }
    let submitbtn=async(event)=>{
        event.preventDefault();
        console.log({city});
        setCity("");
         let newresult=await getWeatherInfo();
         updateInfo(newresult);
    }
    return(
        <div className='searchBox'>
            <p>Search City</p>
            <TextField id="City" label="City" variant="outlined" required  value={city} onChange={cityName}/>
            <br></br> <br></br>
            <Button onClick={submitbtn} type="submit" variant="contained">Search</Button>
        </div>
    )
}