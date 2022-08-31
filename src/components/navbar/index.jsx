import React from 'react'
import IconButton from '@mui/material/IconButton';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import {
    AppBar,
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';

const Navbar = () => {

    const button = ['Anuncie sua propriedade', 'Cadastre-se', 'Login']

    return (
        <Box sx={{ bgcolor: 'blue' }}>
            <Container sx={{
                display: 'flex',
                paddingY: '10px'
            }}>
                <Typography variant="h6" noWrap href=""
                    sx={{
                        fontWeight: "bold",
                        color: 'white',
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
                            <Typography sx={{ fontWeight: "bold", color: 'white', }}>BRL</Typography>
                        </IconButton>
                        <IconButton>
                            <img style={{
                                width: '20px',
                                borderRadius: '50%'
                            }}
                                src='https://t-cf.bstatic.com/static/img/flags/new/48-squared/br/0cf5e55d996fdcf96a2d31733addf5c10bad1f74.png' />
                        </IconButton>
                        <IconButton sx={{ color: 'white' }}>
                            <HelpOutlineOutlinedIcon />
                        </IconButton>
                    </Box>
                    {button.map((title, id) => (
                        <Button
                            key={id}
                            sx={{
                                height: '30px',
                                bgcolor: `${id === 0 ? 'blue' : 'white'}`,
                                color: `${id === 0 ? 'white' : 'blue'}`,
                                border: '1px solid white',
                                fontSize: '12px',
                                fontWeight: '700',
                                textTransform: 'none'
                            }}>
                            {title}
                        </Button>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar