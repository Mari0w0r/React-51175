import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";


export const CartWidget = () => {

    const {numerosWidget} = useContext(CartContext);

    const theme = useTheme();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: -2,
        top: 3,
        border: `2px solid ${theme.palette.secondary.dark}`,
        padding: '0 4px',
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.main,
        },
    }));
    
    return(
        <IconButton component={Link} to="/cart">
            <StyledBadge badgeContent={numerosWidget()} color="secondary" >
            <ShoppingCartIcon sx={{
                color: theme.palette.primary.main,
                fontSize:30,
            }}/>
            </StyledBadge>
        </IconButton>
    );
};