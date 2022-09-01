import React from 'react'
import {
    Box,
    Card,
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
            <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                {cards.map((item, key) => (
                    <Grid item key={key} xs={12} sm={6} md={3}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                sx={{ height: '180px' }}
                                component="img"
                                src={item.img}
                                alt={item.name}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h6"
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }}>
                                    {item.name}
                                </Typography>
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