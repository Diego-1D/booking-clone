import React from 'react'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';

const Featured = () => {
  const cards = [
    {
      id: 1,
      name: "Rio de Janeiro",
      img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg",
      countProperty: "863"
    },
    {
      id: 2,
      name: "New York",
      img: "https://classic.exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info&w=1024",
      countProperty: "932"
    },
    {
      id: 3,
      name: "CanCun",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/d3/63/3e/hotel-krystal-cancun.jpg",
      countProperty: "438"
    }
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ py: 2 }}>Inspire-se para sua próxima viagem</Typography>
      <Grid container spacing={2}>
        {cards.map((item, key) => (
          <Grid item key={key} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                sx={{ height: '220px' }}
                component="img"
                src={item.img}
                alt={item.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold'
                  }}>
                  {item.name}
                </Typography>
                <Typography sx={{
                  fontSize: '16px',
                  color: '#6b6a6a'
                }}>
                  {item.countProperty} Imóveis
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>

  );
}

export default Featured