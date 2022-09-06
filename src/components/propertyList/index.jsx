import React from 'react'
import { Card, CardTitle } from '../../theme/globalStyle';
import {
    Box,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';

const PropertyList = () => {
    const cards = [
        {
            id: 1,
            name: "Hotéis",
            img: "https://f7j8i5n9.stackpathcdn.com/wp-content/uploads/2018/05/hiddenhotelemparis-quarto-1.jpg",
            countProperty: "863.323"
        },
        {
            id: 2,
            name: "Apartamentos",
            img: "https://ilovedicas.com/wp-content/uploads/2020/11/apartamento-decorado.jpg",
            countProperty: "932.251"
        },
        {
            id: 3,
            name: "Resorts",
            img: "https://www.submarinoviagens.com.br/bora-nessa-trip/wp-content/uploads/2019/10/resorts-bora-nessa-trip12.jpg",
            countProperty: "438.039"
        },
        {
            id: 4,
            name: "Cabines",
            img: "https://a0.muscache.com/im/pictures/860819a2-19f7-479e-8ff9-641da8697c4e.jpg?im_w=720",
            countProperty: "592.236"
        },
    ];

    return (
        <Box>
            <Typography variant="h5" sx={{ py: 2 }}>Pesquise por tipo de acomodação</Typography>
            <Grid container spacing={2}>
                {cards.map((item, key) => (
                    <Grid item key={key} xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia
                                sx={{
                                    height: '180px',
                                    borderRadius: '5px 5px 0 0'
                                }}
                                component="img"
                                src={item.img}
                                alt={item.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <CardTitle>{item.name}</CardTitle>
                                <Typography sx={{
                                    fontSize: '14px',
                                    color: '#6b6a6a'
                                }}>
                                    {item.countProperty} {item.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
}

export default PropertyList