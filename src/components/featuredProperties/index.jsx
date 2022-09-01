import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';

const FeaturedProperties = () => {
    const cards = [
        {
            id: 1,
            name: "Hotel Bowmann",
            city: "Paris",
            price: "189,00",
            img: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/304092051.jpg?k=bdf7841985ec53a41125651166b873df164b5cd0ab090baad5acf9c47f583047&o=&hp=1",
            execellent: "8.9"
        },
        {
            id: 2,
            name: "Meliá Brasil 21",
            city: "Brasilia",
            price: "109,00",
            img: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/217463231.jpg?k=5b791e426e8475e6429117973efdf732fbb960aea2ea4d5c4b04b250dca82d32&o=&hp=1",
            execellent: "9.9"
        },
        {
            id: 3,
            name: "Rook Hill Cottage",
            city: "Irlanda",
            price: "239,00",
            img: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/140687085.jpg?k=08549fd9406163463cbabd7212d00bddb147e7d4e9fc2b2d4ab521cc5fbeb371&o=&hp=1",
            execellent: "9.2"
        },
        {
            id: 4,
            name: "Regente Palace Hotel",
            city: "Buenos Aires",
            price: "159,00",
            img: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/63394380.jpg?k=713fdc6b151aa5e97a75eadd686611d9b804e8bcbdeb69c470f7592a3a30c2c6&o=&hp=1",
            execellent: "9.7"
        },
    ];

    return (
        <Box>
            <Typography variant="h5" sx={{ py: 2 }}>Verifique os melhores tipos de imóveis</Typography>
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
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    sx={{
                                        fontSize: '16px',
                                        fontWeight: 'bold'
                                    }}>
                                    {item.name}
                                </Typography>
                                <Box sx={{
                                    fontSize: '16px',
                                    color: '#6b6a6a'
                                }}>
                                    <Typography>{item.city}</Typography>
                                    <Typography>A partir de R$ {item.price}</Typography>
                                    <Typography>
                                        <span
                                            style={{
                                                padding: '5px',
                                                marginRight: '5px',
                                                backgroundColor: 'blue',
                                                color:'white'
                                            }}>{item.execellent}</span>Excelente
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>

    );
}

export default FeaturedProperties