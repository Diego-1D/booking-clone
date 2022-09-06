import React from 'react'
import {
    Box,
    Button,
    Container,
    Input,
    List,
    ListItemButton,
    Typography
} from '@mui/material'

const container = {
    paddingTop: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFF'
}

const inputArea = {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    gap: '5px',
    marginY: '20px'
}

const input = {
    width: '300px',
    height: '40px',
    paddingX: '10px',
    bgcolor: '#FFF',
    border: '1px solid tranparent',
    borderRadius: '5px'
}

const button = {
    color: '#FFF',
    bgcolor: '#1976d2',
    height: '40px',
    width: '150px',
    marginTop: { xs: '5px', md: '0' },
    ':hover': {
        bgcolor: '#33539c',
    }
}

const Mail = () => {

    const title = [
        'Versão para celular',
        'Sua conta',
        'Faça alterações em sua reserva on-line',
        'Serviço de Apoio ao Cliente',
        'Torne-se um afiliado',
        'Booking.com para Empresas'
    ]

    return (
        <Box sx={{ bgcolor: '#002984', paddingY: '1rem' }}>
            <Container sx={container}>
                <Typography variant='h5'>Economize tempo, economize dinheiro!</Typography>
                <Typography variant='subtitle1'>Inscreva-se e enviaremos as melhores ofertas para você</Typography>
                <Box sx={inputArea}>
                    <Input
                        disableUnderline={true}
                        type='text'
                        sx={input}
                        placeholder='Seu e-mail'
                    />
                    <Button sx={button}>Increva-se</Button>
                </Box>
            </Container>
            <Box>
                <Container>
                    <List
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            textDecoration: 'underline',
                            color: '#FFF',
                        }}>
                        {title.map((name) => (
                            <ListItemButton key={name}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>{name}</Typography>
                            </ListItemButton>
                        ))}
                    </List>
                </Container>
            </Box>
        </Box>
    )
}

export default Mail