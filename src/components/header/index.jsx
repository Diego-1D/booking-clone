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
            display: { xs: 'none', md: 'flex' },
            paddingY: '10px'
        }}>
            {button.map((item, key) => (
                <Button
                    key={key}
                    onClick={() => setSelected(item.title)}
                    sx={{
                        mr: 2,
                        color: 'white',
                        border: `${item.title === selected ? '1px solid white' : '1px solid transparent'}`,
                        borderRadius: '25px',
                        fontWeight: '700',
                        textTransform: 'none'
                    }}>
                    <HeaderOptions Icon={item.icon} title={item.title} />
                </Button>
            ))}
        </Container>
    )
}

export default Header