import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useTheme } from '@mui/material/styles';




export const CartWidget = () => {

    const theme = useTheme();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: -2,
        top: 3,
        border: `2px solid ${theme.palette.secondary.dark}`,
        padding: '0 4px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.dark,
        },
    }));
    
    return(
        <IconButton>
            <StyledBadge badgeContent={1} color="secondary">
            <ShoppingCartIcon sx={{
                color: theme.palette.secondary.main,
                fontSize:30,
            }}/>
            </StyledBadge>
        </IconButton>
    );
};