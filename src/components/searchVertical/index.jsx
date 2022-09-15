import React, { useState } from 'react'
import { CalendarMonthOutlined, Search } from '@mui/icons-material';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Box, Input, Typography } from '@mui/material'
import { Button } from '../../theme/globalStyle';

const container = {
    top: '30px',
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    width: '270px',
    height: '400px',
    padding: '20px 15px',
    borderRadius: '3px',
    bgcolor: '#febb02',
    color: ' #333333',
    gap: '15px',
}

const title = {
    fontSize: '12px',
    color: '#000'
}

const inputArea = {
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    bgcolor: '#FFF'
}


const SearchVertical = () => {

    const [openDate, setOpenDate] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <Box sx={container} >
            <Typography variant='h6'>Pesquisar</Typography>
            <Box>
                <Typography sx={title}>Destino/nome da acomodação:</Typography>
                <Box sx={inputArea} >
                    <Search sx={{ margin: '0 5px' }} />
                    <Input
                        disableUnderline={true}
                        type='text'
                        placeholder='Para onde você vai?'
                        sx={{
                            border: '1px solid tranparent',
                            'input::placeholder': {
                                fontSize: '12px',
                            }
                        }}
                    />
                </Box>
            </Box>
            <Box>
                <Typography sx={title}>Data de entrega</Typography>
                <Box sx={inputArea} >
                    <CalendarMonthOutlined sx={{ margin: '0 5px' }} />
                    <Typography onClick={() => setOpenDate(!openDate)} sx={title}>Data de Check-in</Typography>
                    {openDate &&
                        <DatePicker
                            type="date"
                            locale="pt-br"
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                    }
                </Box>
            </Box>
            <Box>
                <Typography sx={title}>Data de saída</Typography>
                <Box sx={inputArea} >
                    <CalendarMonthOutlined sx={{ margin: '0 5px' }} />
                    <Typography onClick={() => setOpenDate(!openDate)} sx={title}>Data de Check-out</Typography>
                    {openDate &&
                        <DatePicker
                            type="date"
                            locale="pt-br"
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                    }
                </Box>
            </Box>
            <Box sx={inputArea} >
                <Typography sx={title}> 1 adulto · 0 criança · 1 quartos</Typography>
            </Box>
            <Button>Pesquisar</Button>
        </Box>
    )
}

export default SearchVertical