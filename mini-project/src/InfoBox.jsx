import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    
    const HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fHww";
    const RAINY_URL = "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww";

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
                <Card sx={{ width: 380 }}>
                    <CardMedia
                        sx={{ height: 220 }}
                        image={info.humidity > 80 ? RAINY_URL : info.temp >20 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {info.city.toUpperCase()}&nbsp;
                            {
                                info.humidity > 80 ? <ThunderstormIcon/>
                                : info.temp > 20 ? <WbSunnyIcon/> 
                                : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body3" color="text.secondary" component={"span"}>
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Min Temperature = {info.tempMin}</div>
                            <div>Max Temperature = {info.tempMax}</div>
                            <div>The weather feels like {info.feelsLike}&deg; and described as <b>{info.weather}</b></div>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
};