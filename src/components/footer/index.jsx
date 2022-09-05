import React from 'react'
import { styled } from "@mui/system";
import {
    Box,
    Container,
    List,
    Typography
} from '@mui/material';

const wrapper= {
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'space-between',
    padding: '0.5rem'
}

const ListItem = styled("li")(({ }) => ({
    padding: '0.3rem',
    fontSize: '12px',
    cursor: 'pointer',
    color: '#1976d2',
    ':hover': {
        color: '#bf360c'
    }
}));


const Footer = () => {

    return (
        <Container>
            <Box sx={wrapper}>
                <List>
                    <ListItem >Países</ListItem>
                    <ListItem >Regiões</ListItem>
                    <ListItem>Cidades</ListItem>
                    <ListItem>Bairros</ListItem>
                    <ListItem>Aeroportos</ListItem>
                    <ListItem>Hotéis</ListItem>
                    <ListItem>Locais de interesse</ListItem>
                </List>
                <List>
                    <ListItem>Casas e apartamentos</ListItem>
                    <ListItem>Apartamentos</ListItem>
                    <ListItem>Resorts</ListItem>
                    <ListItem>Villas</ListItem>
                    <ListItem>Hostels</ListItem>
                    <ListItem>Cama e Cafés (B&Bs)</ListItem>
                    <ListItem>Casas de hóspedes</ListItem>
                </List>
                <List>
                    <ListItem> Lugares únicos para ficar</ListItem>
                    <ListItem>Todos os destinos</ListItem>
                    <ListItem>Conferir</ListItem>
                    <ListItem>Avaliações</ListItem>
                    <ListItem>Comunidades de Viagem</ListItem>
                    <ListItem>Ofertas sazonais e de viagem</ListItem>
                </List>
                <List>
                    <ListItem>Aluguel de Carros</ListItem>
                    <ListItem>Pesquisa de voos</ListItem>
                    <ListItem>Reservas de restaurantes</ListItem>
                    <ListItem>Booking.com para Consultores de Viagem</ListItem>
                </List>
                <List>
                    <ListItem>Perguntas Frequentes sobre o Coronavírus (COVID-19)</ListItem>
                    <ListItem>Sobre a Booking.com</ListItem>
                    <ListItem>Serviço de Apoio ao Cliente</ListItem>
                    <ListItem>Central de Ajuda ao Parceiro</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>Sustentabilidade</ListItem>
                    <ListItem>Assessoria de Imprensa</ListItem>
                    <ListItem>Central de recursos de segurança</ListItem>
                    <ListItem>Relação com investidores</ListItem>
                    <ListItem>Termos e Condições</ListItem>
                    <ListItem>Contestação dos parceiros</ListItem>
                    <ListItem>Como trabalhamos</ListItem>
                    <ListItem>Política de Privacidade e Cookies</ListItem>
                    <ListItem>Contato corporativo</ListItem>
                </List>
            </Box>
            <Typography variant='span'>Direitos autorais © 1996–2022 Booking.com™. Todos os direitos reservados.</Typography>
        </Container>
    )
}

export default Footer