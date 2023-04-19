import React, { useState, useEffect} from "react";
import {Container} from "@mui/material";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import { getItems, getItemsByCategory } from "../../services/Firestore";


/*---------------------------------------------------------------*/
export function ItemListContainer(){
    
    const {categoryId} = useParams();
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        if (categoryId === undefined){
            getItems().then((respuesta) => {
                setProductos(respuesta);
            });
        } else {
            getItemsByCategory(categoryId).then((respuesta) => 
            setProductos(respuesta)
            );
        }
    }, [categoryId])
    
    
    return(
        <Container sx={{marginTop: "5.5rem"}} >
            <ItemList productos={productos} />
        </Container>
    )
};

