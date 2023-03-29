import { Box, Typography, Divider, Button } from "@mui/material";
import { Stack } from "@mui/system";
import "../ItemDetailCard/ItemDetailCard.css";
import {useTheme} from "@mui/material/styles";

export function ItemDetailCard({title, price, img, description}){

    const theme = useTheme();

    return (
            <Box className="item-detail-container" >
                <Box className="detail-img-box">
                <img
                alt={title}
                src={img}
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
                        {title}
                    </Typography>
                    <Divider variant="middle" sx={{
                        backgroundColor: theme.palette.secondary.dark,
                        margin: "0.5rem 0rem 1rem 0rem",
                        borderBottomWidth: "3px"
                    }}/>
                    <Typography sx={{textAlign: "justify"}}>
                        {description}
                    </Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="h4">
                        Precio: {price}USD
                    </Typography>
                    <Button variant="contained" sx={{backgroundColor: theme.palette.secondary.dark}}>COMPRAR</Button>
                    </Box>
                </Stack>
            </Box>
    )
}