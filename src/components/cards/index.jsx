import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardTitle } from '../../theme/globalStyle';

const card = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '75%',
    height: '250px',
    bgcolor: '#e1f5fe',
    border: ' 1px solid #1976d2',
}

const Cards = () => {

    return (
        <Card sx={card}>
            <CardMedia
                component="img"
                sx={{ height: '200px', objectFit: 'contain' }}
                image="https://tse1.mm.bing.net/th?id=OIP.jzBkWW1z0k9b2YfWv3sPBgHaFT&pid=Api&P=0"
                alt="Live from space album cover"

            />
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                <CardContent >
                    <Typography variant="h6" color='#1976d2' sx={{ fontWeight: 'bold' }}>
                        Rio de Janeiro
                    </Typography>
                    <Typography color='#000' sx={{ fontSize: '12px' }}>
                        Oferecendo Wi-Fi gratuito e piscina na cobertura, com vista da cidade,
                        academia e sauna, o Meliá Brasil 21 está localizado entre a Torre de TV
                        e o Parque da Cidade, em Brasília.
                    </Typography>
                </CardContent>
            </Box>
            <CardContent sx={{}} >
                <CardTitle>Fabuloso</CardTitle>
                <Typography>1.235 avaliações</Typography>
                <Typography>Localização 9,4</Typography>
            </CardContent>
        </Card>
    );
}

export default Cards