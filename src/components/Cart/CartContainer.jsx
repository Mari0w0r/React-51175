import { Container, Typography, Divider, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Cart } from "./Cart"
import React, { useContext, useState} from 'react';
import { CartContext } from "../../Context/CartContext";
import {useTheme} from "@mui/material/styles";
import DatosUsuario from "./DatosUsuario";
import { createOrder } from "../../services/Firestore";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export function CartContainer () {

    const navigateTo = useNavigate()
    const theme = useTheme();
    const {cartList, calcularTotalPrecio, limpiarCarrito} = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');


    function realizarCompra() {
        let email = document.getElementById("email").value;
        let confirmarEmail = document.getElementById("confirmarEmail").value;
    
        if (email !== confirmarEmail) {
            Swal.fire({
                titleText: 'Error de confirmación',
                text: 'Los Emails no coinciden. Por favor verifíquelos e inténtelo de nuevo.',
                icon: 'error',
            })
            return; // detener la función si los correos no coinciden
        } 

        // si los correos coinciden, continuar con la creación de la orden en Firebase
        handleCheckout(cartList, calcularTotalPrecio, limpiarCarrito);
        // Limpiar el carrito
        limpiarCarrito();
        };


        async function handleCheckout(cartList, calcularTotalPrecio, limpiarCarrito){

            const order = {
            items: cartList,
            buyer: {
                name: nombre,
                lastName: apellido,
                email: email,
                telefono: telefono
            },
            date: new Date(),
            total: calcularTotalPrecio(),
        };
        
        const orderid = await createOrder(order);
        // mostrar mensaje de éxito o redirigir a otra página
        navigateTo(`/checkout/${orderid}`)
        limpiarCarrito();
    }



    return (
        <Container>
            {cartList.length === 0 ? (
                <Box mt={10} marginBottom={10} p={5}>
                    <Typography component="h3" variant="h3" textAlign="center" >
                        Mi Carrito
                    </Typography>
                    <Stack direction="column" justifyContent="space-between" alignItems="center" spacing={8}>
                    <Divider sx={{marginBottom: 5}}/>
                    <Typography component="h4" variant="h4" textAlign="center" mt={3} mb={6}>Oops! No hay nada en tu carrito, agrega algo desde la tienda</Typography>
                    <Button color="secondary" variant="contained" href="/">Regresar a la Tienda</Button>
                    </Stack>
                </Box>
            ) : (
                <Box>
                    <Typography component="h3" variant="h3" textAlign="center" mt={3}>
                        Mi Carrito
                    </Typography>
                    <Divider sx={{marginBottom: 5}}/>
                    <Box display="flex" justifyContent="space-between">
                        <Stack
                            direction="column"
                            justifyContent="space-evenly"
                            alignItems="center"
                            spacing={3}
                        >
                            {cartList.map((producto) =>(
                                <Cart
                                    key={producto.id}
                                    id={producto.id}
                                    title={producto.title}
                                    price={producto.price}
                                    img={producto.img}
                                    category={producto.categoryId}
                                    cantidad={producto.cantidad}
                                    stock={producto.instock}
                                />
                            ))}
                        </Stack>
                        <Stack>
                            <DatosUsuario
                            nombre={nombre}
                            setNombre={setNombre}
                            apellido={apellido}
                            setApellido={setApellido}
                            telefono={telefono}
                            setTelefono={setTelefono}
                            email={email}
                            setEmail={setEmail}
                            />
                            <Divider sx={{marginTop: 5, backgroundColor: theme.palette.secondary.main}}/>
                            <Typography component="h4" variant="h4" mb={2}>TOTAL: {calcularTotalPrecio()}USD</Typography>
                            <Button variant="contained" color="secondary" onClick={realizarCompra}>REALIZAR COMPRA</Button>
                        </Stack>
                    </Box>
                </Box>
            )}
        </Container>
    );
}