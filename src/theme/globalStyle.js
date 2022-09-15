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


export const Button = styled("button")(({  }) => ({
    padding: '13px',
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#FFF',
    backgroundColor: '#1976d2',
    cursor: 'pointer',
    border: 'none',

    ':hover': {
        backgroundColor: '#0153A4'
    }
}));