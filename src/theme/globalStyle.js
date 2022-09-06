import { styled } from "@mui/system";

export const Card = styled("div")(({  }) => ({
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column',
}));

export const CardTitle = styled("h6")(({  }) => ({
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0
}));
