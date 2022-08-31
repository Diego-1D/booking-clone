import React from 'react'
import { Box } from "@mui/material";

const HeaderOptions = ({ Icon, title }) => {

    return (
        <Box sx={{display:'flex',  gap: '5px'}}>
            <Icon />
            {title}
        </Box>
    )
}

export default HeaderOptions;