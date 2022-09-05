import React, { useState } from "react";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {
    Box,
    Button,
    Container,
    Input,
    Typography
} from '@mui/material'
import {
    CalendarMonthOutlined
} from '@mui/icons-material';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { useNavigate } from 'react-router-dom';

registerLocale('pt-br', ptBR)

const Search = () => {

    const navigate = useNavigate()
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };


    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotellist", { state: { destination, options } })
    }

    return (
        <Container sx={{ display: 'flex', marginTop: '-25px', height: '3rem' }}>
            <Box sx={{ flex: 1, display: 'flex', color: '#6b6a6a', border: '4px solid #FEBB02', borderRadius: '5px', bgcolor: 'white' }} >
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', borderRight: '4px solid #FEBB02' }} >
                    <BedOutlinedIcon sx={{ margin: '0 5px' }} />
                    <Input
                        disableUnderline={true}
                        type='text'
                        sx={{ flex: 1, border: '1px solid tranparent', }}
                        placeholder='Para onde você vai?'
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', borderRight: '4px solid #FEBB02' }}   >
                    <CalendarMonthOutlined sx={{ margin: '0 5px' }} />
                    <Typography
                        onClick={() => setOpenDate(!openDate)}
                        sx={{ cursor: 'pointer' }}
                    >Check-in / Check-out
                    </Typography>
                    {openDate &&
                        <Box sx={{ zIndex: 2, position: 'absolute', marginTop: '290px' }}>
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
                        </Box>
                    }
                </Box>
                <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', borderRight: '4px solid #FEBB02' }} >
                    <PersonOutlinedIcon sx={{ margin: '0 5px' }}
                    />
                    <Typography
                        onClick={() => setOpenOptions(!openOptions)}
                        sx={{ cursor: 'pointer' }}
                    >{`${options.adult} adultos · ${options.children} crianças · ${options.room} quartos`}
                    </Typography>
                    {openOptions &&
                        <Box sx={{ zIndex: 2, position: 'absolute', marginTop: '230px', bgcolor: 'white', borderRadius: '2px', color: '#000' }} >
                            <Box sx={{ width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }} >
                                <Typography >Adultos</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                >
                                    <Button
                                        disabled={options.adult <= 1}
                                        onClick={() => handleOption("adult", "d")}
                                        sx={{
                                            border: `${options.adult <= 1 ? '1px solid #D3D3D3' : '1px solid #1976d2'}`,
                                            bgcolor: `${options.adult <= 1 ? '#D3D3D3' : 'transparent'}`
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Typography>{options.adult}</Typography>
                                    <Button
                                        onClick={() => handleOption("adult", "i")}
                                        sx={{ border: '1px solid #1976d2' }}
                                    >
                                        +
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{ width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }} >
                                <Typography>Crianças</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                >
                                    <Button
                                        disabled={options.children <= 0}
                                        onClick={() => handleOption("children", "d")}
                                        sx={{
                                            border: `${options.children <= 0 ? '1px solid #D3D3D3' : '1px solid #1976d2'}`,
                                            bgcolor: `${options.children <= 0 ? '#D3D3D3' : 'transparent'}`
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Typography>{options.children}</Typography>
                                    <Button
                                        onClick={() => handleOption("children", "i")}
                                        sx={{ border: '1px solid #1976d2' }}
                                    >
                                        +
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{ width: '300px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }} >
                                <Typography>Quartos</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                                >
                                    <Button
                                        disabled={options.room <= 1}
                                        onClick={() => handleOption("room", "d")}
                                        sx={{
                                            border: `${options.room <= 1 ? '1px solid #D3D3D3' : '1px solid #1976d2'}`,

                                            bgcolor: `${options.room <= 1 ? '#D3D3D3' : 'transparent'}`
                                        }}
                                    >
                                        -
                                    </Button>
                                    <Typography>{options.room}</Typography>
                                    <Button
                                        onClick={() => handleOption("room", "i")}
                                        sx={{ border: '1px solid #1976d2' }}
                                    >
                                        +
                                    </Button>
                                </Box>
                            </Box>
                        </Box>}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: '#1976d2',
                        color: 'white'
                    }}>
                    <Button
                        sx={{ color: 'white' }}
                        onClick={handleSearch}
                    >
                        Pesquisar
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Search