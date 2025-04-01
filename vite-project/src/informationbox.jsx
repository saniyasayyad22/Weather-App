import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InformationBox({info}){
    let HOT_URL="https://c8.alamy.com/comp/FF1XT8/spring-summer-sun-shining-through-canopy-of-tall-trees-sunlight-in-FF1XT8.jpg";
    let COLD_URL="https://m.media-amazon.com/images/I/61qBaKk+88L.jpg";
    let RAIN_URL="https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg";
    return(
        <div>
            <p>Weather information</p>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp >15 ?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}component={'span'}>
           <p>feels_like={info.feels_like}</p>
           <p> temperature= {info.temp}&deg;C</p>
           <p>temperatureMax{info.tempMax}&deg;C</p> 
           <p>temperatureMin{info.tempMin}&deg;C</p>
           <p>humidity={info.humidity}</p> 
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}