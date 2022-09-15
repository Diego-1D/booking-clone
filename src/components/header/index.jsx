import React, { useState } from 'react';
import HeaderOptions from './headerOptions'
import {
    Button,
    Container
} from '@mui/material';
import {
    AttractionsOutlined,
    DirectionsCarOutlined,
    FlightOutlined,
    HotelOutlined,
    LocalTaxiOutlined
} from '@mui/icons-material';

const Header = () => {

    const button = [
        { title: 'Hospedagens', icon: HotelOutlined },
        { title: 'Voos', icon: FlightOutlined },
        { title: 'Aluguel de carros', icon: DirectionsCarOutlined },
        { title: 'Atrações', icon: AttractionsOutlined },
        { title: 'Táxis (aeroporto)', icon: LocalTaxiOutlined }
    ];

    const [selected, setSelected] = useState('Hospedagens')

    return (
        <Container sx={{
            display: 'flex',
            overflowX: 'auto',
            paddingY: '10px',
            
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }}>
            {button.map((item, key) => (
                <Button
                    key={key}
                    onClick={() => setSelected(item.title)}
                    sx={{
                        mr: 2,
                        padding: '5px',
                        color: '#FFF',
                        border: `${item.title === selected ? '1px solid #FFF' : '1px solid transparent'}`,
                        bgcolor: `${item.title === selected ? '#33539c' : 'transparent'}`,
                         borderRadius: '25px',
                        fontWeight: '700',
                        textTransform: 'none',

                        ':hover': {
                            bgcolor: '#33539c',
                        }
                    }}>
                    <HeaderOptions Icon={item.icon} title={item.title} />
                </Button>
            ))}
        </Container>
    )
}

export default Header