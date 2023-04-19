import { Box, IconButton, Button} from "@mui/material";
import AgregarCantidad from '@mui/icons-material/AddCircleRounded';
import EliminarCantidad from '@mui/icons-material/RemoveCircleRounded';
import { useState } from 'react';

function ItemCount({onAdd, cart, showButton, stock}) {

    const [cantidad, setCantidad] = useState(1);

    const agregarCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleAddToCartClick = () => {
        onAdd(cantidad);
    };

    console.log(cart.title)


    return (
        <Box>

            <IconButton onClick={disminuirCantidad} color="secondary">
                <EliminarCantidad/>
            </IconButton>
            {cantidad}
            <IconButton onClick={agregarCantidad} color="secondary">
                <AgregarCantidad/>
            </IconButton>
            {showButton && <Button color="secondary" variant="contained" onClick={handleAddToCartClick}>Agregar al carrito</Button>}
        </Box>
    )
}

export default ItemCount;
