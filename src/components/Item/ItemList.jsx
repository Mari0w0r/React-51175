import React from "react";
import { Box } from "@mui/material";
import  {Item}  from "./Item";

export const ItemList = ({ productos }) =>{
    return(
        <Box   
            sx={{
                display: "grid",
                gap: "2.5rem",
                gridTemplateColumns: "repeat(3,minmax(400px,auto))",
                justifyContent: "center",
            }}
        >
            {productos.map((producto) =>(
            <Item
                key={producto.id}
                id={producto.id}
                title={producto.title}
                price={producto.price}
                img={producto.img}
                category={producto.category}
            />
            ))}
        </Box>
    );
};