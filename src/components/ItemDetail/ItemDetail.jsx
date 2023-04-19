import { Box, Typography, Divider} from "@mui/material";
import { Stack } from "@mui/system";
import "./ItemDetail.css";
import {useTheme} from "@mui/material/styles";
import ItemCount from "../ItemCount/ItemCount";
import React, { useContext} from 'react';
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2'


export function ItemDetail({productoSeleccionado, showButton = true}){

    const { addToCart, cartList, cantidadCarrito} = useContext(CartContext);

    const handleAddToCart = (count) => {
        addToCart(productoSeleccionado, count);

        Swal.fire({
            toast: true,
            position: "top-start",
            title: "Añadiste " + productoSeleccionado.title,
            showConfirmButton: false,
            icon: "info",
            timer: 2000
        }) 

    };

    const countInCart = cantidadCarrito(productoSeleccionado.id);

    const theme = useTheme();

    return (
            <Box className="item-detail-container" >
                <Box className="detail-img-box">
                <img
                alt={productoSeleccionado.title}
                src={productoSeleccionado.img}
                className="detail-img"
                />
                </Box>
                <Stack 
                direction="column"
                justifyContent="space-between"
                spacing={0}
                >
                    <Box sx={{textAlign: "center"}}>
                    <Typography component="h2" variant="h3">
                        {productoSeleccionado.title}
                    </Typography>
                    <Divider variant="middle" sx={{
                        backgroundColor: theme.palette.secondary.main,
                        margin: "0.5rem 0rem 1rem 0rem",
                        borderBottomWidth: "3px"
                    }}/>
                    <Typography sx={{textAlign: "justify"}}>
                        {productoSeleccionado.description}
                    </Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="h4">
                        Precio: {productoSeleccionado.price}USD
                    </Typography>
                    <ItemCount 
                    stock={productoSeleccionado.instock - countInCart}
                    productoSeleccionado={productoSeleccionado} 
                    onAdd={handleAddToCart} 
                    cart={cartList}
                    showButton={showButton}
                    />
                    </Box>
                </Stack>
            </Box>
    )
}