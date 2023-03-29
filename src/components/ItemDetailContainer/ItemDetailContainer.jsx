import { useState, useEffect } from "react";
import {Container} from "@mui/material";
import { ItemDetailCard } from "../ItemDetailCard/ItemDetailCard";
import getData from "../../utils/getData";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            const productoFiltrado = data.productos.find(p => p.id === parseInt(id));
            setProducto(productoFiltrado);
        }
        fetchData();
    }, [id]);

    return (
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <ItemDetailCard
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        img={producto.img}
                        category={producto.category}
                        description={producto.description}
                    />
        </Container>
    )
}
