import { useState, useEffect } from "react";
import {Container} from "@mui/material";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/Firestore";

export const ItemDetailContainer = () => {

    const {productoid} = useParams();

    const [productoSeleccionado, setProductoSeleccionado] = useState([]);

    useEffect(() => {
        getSingleItem(productoid).then((respuesta) => {
            setProductoSeleccionado(respuesta);
        });
    }, [productoid])

    return (
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <ItemDetail productoSeleccionado={productoSeleccionado}/>
        </Container>
    )
}
