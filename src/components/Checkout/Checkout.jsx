import React from "react";
import { Container, Typography, Box, Stack, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export function Checkout (){

    const { orderid } = useParams();

    return (
        <Container>
            <Box m={10}>
                <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={7}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <ThumbUpAltIcon color="secondary" sx={{fontSize:140, marginRight: "2rem"}}/>
                        <Typography component="h2" variant="h2">¡Gracias por tu compra!</Typography>
                    </Box>
                <Typography mt={8} mb={8} component="h3" variant="h4"> Tu tickect de compra es: {orderid} </Typography>
                <Typography mt={8} mb={8} component="h3" variant="h5"> ¿Quieres seguir comprando? </Typography>
                <Button color="secondary" variant="contained" href="/">Regresar a la Tienda</Button>
                </Stack>
            </Box>
        </Container>
    )
}