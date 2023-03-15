import { Box, Typography } from '@mui/material';

export const ItemListContainer = ({contenido}) =>{
    return(
        <Box sx={{
            margin: 5,
            textAlign:'center'
        }}>
            <Typography component="h2" variant="h4" >
                PRÓXIMAMENTE, {contenido}
            </Typography>
        </Box>
    );
}
