import React from 'react';
import { hotelList } from '../../data';
import { Button } from '../../theme/globalStyle';
import { 
    Box, 
    Card, 
    CardContent,
     CardMedia, 
     Typography 
    } from '@mui/material';

const container = {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    height: 'auto',
    gap: '20px',
}

const card = {
    padding: '15px',
    display: 'flex',
    width: '100%',
    height: '250px',
    border: ' 1px solid #ccc',
}

const caption = {
    fontSize: '12px',
    color: '#1976d2',
    textDecoration: 'underline',
    textDecorationColor: '#1976d2'
}


const Cards = () => {

    return (
        <Box sx={container}>
            <Typography variant='h5'>Resultados: acomodações encontradas</Typography>
            {hotelList.map((index) => (
                <Card sx={card}>
                    <CardMedia sx={{
                        height: '217px',
                        width: '217px',
                        borderRadius: '4px'
                    }}
                        component='img'
                        image={index.img}
                        alt={index.hotelname}
                    />
                    <CardContent sx={{ flex: 1 }}>
                        <Typography
                            variant='h6'
                            color='#1976d2'
                            sx={{ fontWeight: 'bold' }}
                        >{index.hotelname}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '10px' }}>
                            {index.tags.map((tag) => (
                                <Typography sx={caption}>{tag}</Typography>
                            ))}
                            <Typography variant='caption'>{index.distance}</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '12px', marginTop: '5px' }}>
                            {index.description}
                        </Typography>
                    </CardContent>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                            <Box sx={{ textAlign: 'end' }}>
                                <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                                    {index.status}
                                </Typography>
                                <Typography variant='caption' color='#6b6a6a'>
                                    {index.assessments} avaliações
                                </Typography>
                            </Box>
                            <span
                                style={{
                                    padding: '5px',
                                    marginRight: '5px',
                                    borderRadius: '7px 7px 7px 0',
                                    backgroundColor: '#002984',
                                    color: '#FFF'
                                }}>{index.execellent}</span>
                        </Box>
                        <Typography variant='subtitle2' color='#1976d2' sx={{ fontWeight: 'bold' }}>
                            Localização {index.location}
                        </Typography>
                        <Button>Visualizar preços</Button>
                    </CardContent>
                </Card >
            ))}
        </Box>
    );
}

export default Cards