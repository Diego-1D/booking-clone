import React from 'react'
import {
    Container,
    Typography,
} from '@mui/material';

const Hero = () => {

    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingY: '4rem',
        gap: '1rem',
        color: 'white'
    }

    return (
        <Container sx={container}>
            <Typography
                variant='h3'
                sx={{ fontWeight: 'bold' }}>
                Encontre a sua próxima estadia
            </Typography>
            <Typography variant='h5'>Pesquise ofertas em hotéis, casas e muito mais...</Typography>
        </Container>
    )
}

export default Hero