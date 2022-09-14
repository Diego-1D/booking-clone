import { Box, Container } from '@mui/material'
import React from 'react'
import Featured from '../../components/featured'
import FeaturedProperties from '../../components/featuredProperties'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Hero from '../../components/hero'
import Mail from '../../components/mail'
import Navbar from '../../components/navbar'
import PropertyList from '../../components/propertyList'
import Search from '../../components/search'

const Home = () => {

    const container = {
        display: 'flex',
        flexDirection: 'column',
        paddingY: '2rem',
        gap: '1rem'
    }

    return (
        <>
            <Box sx={{ bgcolor: '#002984'}}>
                <Navbar />
                <Header />
                <Hero />
            </Box>
            <Search />
            <Container sx={container}>
                <Featured />
                <PropertyList />
                <FeaturedProperties />
            </Container>
            <Mail />
            <Footer />
        </>
    )
}

export default Home