import React, { useState, useEffect} from "react";
import {ItemCard} from "../ItemCard/ItemCard"
import {Container, Box} from "@mui/material";
import { useParams } from "react-router-dom";
import getData from "../../utils/getData";

export function ItemListContainer(){
    
    const {id} = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await getData();
            let productosFiltrados = id ? data.productos.filter((producto) => producto.category === id) : data.productos;
            setProductos(productosFiltrados);
        }
        fetchData();
    }, [id]);
    
    return(
        <Container sx={{marginTop: "3rem"}} >
            <Box sx={{
                display: "grid",
                gap: "2.5rem",
                gridTemplateColumns: "repeat(3,minmax(400px,auto))",
                justifyContent: "center",
            }}>
                {productos.length ? productos.map((producto) => (<ItemCard
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        price={producto.price}
                        img={producto.img}
                        category={producto.category}
                    />
                )) : null}
            </Box>
        </Container>
    )
};

