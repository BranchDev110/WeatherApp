import { styled, alpha } from '@mui/material/styles';

export const CustomContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: theme.palette.background.paper
}));

export const WeatherBoard = styled('div')(
    ({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
        width: '500px',
        backgroundColor: alpha(theme.palette.background.default, 0.2)
    })
)