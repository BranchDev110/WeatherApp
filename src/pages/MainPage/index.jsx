import React, { useState, useEffect, useCallback } from 'react';
import { useQuery } from 'react-query';

import debounce from 'lodash.debounce';

import { Autocomplete, CircularProgress, TextField } from '@mui/material';

import { CustomContainer, WeatherBoard, WeatherWidget } from '../../components';
import { fetchWeather } from '../../apis';

const MainPage = () => {
    const [searchStr, setSearchStr] = useState("");
    const [city, setCity] = useState([]);
    const [options , setOptions] = useState([]);
    const [pageLoading, setPageLoading] = useState(false);

    const {data, error} = useQuery(
        ['fetchWeather' , searchStr],
        () => fetchWeather(searchStr),
        { enabled: searchStr.length !== 0 }
    );

    const handleChange = ({target: { value }}) => {
        if(!!value){
            const filtered = city.filter(item => item.name.includes(value) || item.state.includes(value));
            console.log(city);
            setOptions(filtered);
        }
    };

    const debouncedFunction = debounce(handleChange, 300);
    const debouncedChangeHandler = useCallback(debouncedFunction, [city, debouncedFunction]);

    useEffect(() => {
        import("../../data/city.json").then(result => setCity([...result.default]));
    } , [])

    useEffect(() => {
        if(!!city.length) setPageLoading(true);
    }, [city])

    if(error) return;

    const handleResultChange = (event, value) => {
        setSearchStr(value.id);
    }

    return (
        <CustomContainer>
            {
                pageLoading ? 
                    <WeatherBoard>
                        <Autocomplete
                            id="grouped-demo"
                            options={options.sort((a, b) => -b.country.localeCompare(a.country))}
                            groupBy={(option) => option.country}
                            getOptionLabel={(option) => option.name}
                            sx={{ width: 300 }}
                            renderOption={(props, option) => {
                                return (
                                  <li {...props} key={option.id}>
                                    {option.name}
                                  </li>
                                );
                            }}
                            renderInput={(params) => <TextField {...params} label="Type City..." onChange={debouncedChangeHandler}/>}
                            onChange={handleResultChange}
                        />
                        <WeatherWidget
                            weatherReport={ data }
                        />
                    </WeatherBoard>
                    :
                    <CircularProgress disableShrink/>
            }
        </CustomContainer>
    )
}

export default MainPage;