import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/header'
import Mail from '../../components/mail'
import Footer from '../../components/footer'
import SearchVertical from '../../components/searchVertical'
import { Box, Container } from '@mui/material'
import Cards from '../../components/cards'


const HotelList = () => {

  return (
    <>
      <Box sx={{ bgcolor: '#002984' }}>
        <Navbar />
        <Header />
      </Box>
      <Container sx={{
        paddingY: '30px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <SearchVertical />
        <Cards />
      </Container>
      <Mail />
      <Footer />
    </>
  )
}

export default HotelList