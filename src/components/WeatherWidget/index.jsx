import React from 'react';
import { Typography, CardContent, Box } from '@mui/material';

const WeatherWidget = ({weatherReport}) => {
    if(!weatherReport) return;
    var weatherdiscription = weatherReport.weather[0].description;
    var temp = weatherReport.main.temp;
    var pressure = weatherReport.main.pressure;
    var humidity = weatherReport.main.humidity;
    var wind = weatherReport.wind.speed;
    var country = weatherReport.sys.country;
    var city = weatherReport.name;
    return (
        <div>
            <CardContent>
                <Box display="flex" flexDirection="row">
                <Box p={1}>
                    <Typography variant="h2" color="textPrimary">
                    {city},{country}
                    </Typography>
                </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row-reverse">
                <Box p={0}>
                    <Typography variant="h4" color="textPrimary">
                    Temp: {temp}
                    <span>&#176;</span>
                    {"C"}
                    </Typography>
                </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row-reverse">
                <Box p={0}>
                    <Typography variant="h6" color="textSecondary">
                    {weatherdiscription}
                    </Typography>
                </Box>
                </Box>
            </CardContent>
            <CardContent>
                <Box display="flex" flexDirection="row">
                <Box p={1}>
                    <Typography variant="h6" color="textPrimary">
                    Humidity: {humidity} %
                    </Typography>
                </Box>
                <Box p={1}>
                    <Typography variant="h6" color="textPrimary">
                    pressure: {pressure} pa
                    </Typography>
                </Box>
                <Box p={1}>
                    <Typography variant="h6" color="textPrimary">
                    wind: {wind} km/h
                    </Typography>
                </Box>
                </Box>
            </CardContent>
            </div>
    )
}

export default WeatherWidget;