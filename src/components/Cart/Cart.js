import { Box, Typography, IconButton} from "@mui/material";
import { Stack } from "@mui/system";
import ClearIcon from '@mui/icons-material/Clear';
import React, { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import "../ItemDetail/ItemDetail.css";


export function Cart({title, img, id}) {


    const {deleteItem, getPriceItem, cantidadCarrito} = useContext(CartContext);


    return (
                <Box>
                    <Stack 
                    position="relative"
                    direction="row"
                    justifyContent="space-around"
                    sx={{
                        border: "2px solid #5c6bc0",
                        width: "600px",
                        height: "200px",
                    }}>
                        <Box sx={{
                            border: "2px dotted #5c6bc0",
                            borderRadius: "5px",
                            margin: "1.5rem",
                            width: "200px",
                        }}>
                            <img src={img} alt="imagen" className="detail-img" />
                        </Box>
                        <Stack
                        direction="column"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={1}
                        padding={2}
                        >
                            <Typography component="h5" variant="h5">
                                {title}
                            </Typography>
                            <Typography component="h5" variant="h5">
                                Cantidad: {cantidadCarrito(id)}
                            </Typography>
                            <Typography>
                                Precio: {getPriceItem({id})}USD
                            </Typography>
                        </Stack>
                        <IconButton disableRipple={true} onClick={()=>(deleteItem(id))}>
                        <ClearIcon sx={{margin: "0rem 0rem 9rem 2rem"}}/>
                        </IconButton>
                    </Stack>
                </Box>        
    );

}