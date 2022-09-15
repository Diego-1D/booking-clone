import React from 'react'
import IconButton from '@mui/material/IconButton';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';

const Navbar = () => {

    const button = ['Anuncie sua propriedade', 'Cadastre-se', 'Login']

    return (
        <Container sx={{
            display: 'flex',
            paddingY: '10px'
        }}>
            <Typography
                variant="h6"
                noWrap href=""
                sx={{
                    fontWeight: "bold",
                    color: '#FFF',
                }} >
                Booking.com
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: '10px'
            }}>
                <Box>
                    <IconButton>
                        <Typography sx={{ fontWeight: "bold", color: '#FFF', }}>BRL</Typography>
                    </IconButton>
                    <IconButton>
                        <img style={{
                            width: '20px',
                            borderRadius: '50%'
                        }}
                            src='https://t-cf.bstatic.com/static/img/flags/new/48-squared/br/0cf5e55d996fdcf96a2d31733addf5c10bad1f74.png' />
                    </IconButton>
                    <IconButton sx={{ color: '#FFF' }}>
                        <HelpOutlineOutlinedIcon />
                    </IconButton>
                </Box>
                {button.map((title, id) => (
                    <Button
                        key={id}
                        sx={{
                            height: '30px',
                            bgcolor: `${id === 0 ? 'transparent' : '#FFF'}`,
                            color: `${id === 0 ? '#FFF' : '#002984'}`,
                            border: '1px solid #FFF',
                            fontSize: '12px',
                            fontWeight: '700',
                            textTransform: 'none',
                            ':hover': {
                                bgcolor: `${id === 0 ? '#33539c' : '#e1f5fe'}`,
                            }
                        }}>
                        {title}
                    </Button>
                ))}
            </Box>
        </Container>
    )
}

export default Navbar