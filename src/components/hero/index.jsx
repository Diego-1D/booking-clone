import React from 'react'
import {
    Box,
    Button,
    Container,
    Typography,
} from '@mui/material';

const Hero = () => {
  
    return (
        <Box sx={{ bgcolor: 'blue' }}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                p: '2rem',
                gap: '2rem',
                color: 'white'
            }}>
                <Typography variant='h4'>Uma vida inteira de descontos? Genial.</Typography>
                <Typography variant='h6'>Seja recompensado por suas viagens –
                    desbloqueie economias instantâneas de 10% ou
                    mais com uma conta gratuita do Lamabooking
                </Typography>
                <Button sx={{ color: 'blue', bgcolor: 'white', height: '50px', width: '200px' }} >
                    Entrar / Cadastrar
                </Button>
            </Container>
        </Box>
    )
}

export default Hero