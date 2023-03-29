import { Box, Typography, Divider, IconButton, Button} from "@mui/material";
import AddCartIcono from "@mui/icons-material/ShoppingBag"
import {useTheme} from "@mui/material/styles";
import { Stack } from "@mui/system";
import "../ItemCard/ItemCard.css"
import { useNavigate } from 'react-router-dom';

export const ItemCard = ({title, price, img, id}) =>{

    const navigate = useNavigate();

    const theme = useTheme();

    return(
            <Box className="producto-box">
                <img
                alt="producto"
                src={img}
                className="producto-img"
                />
                <Box>
                    <Typography sx={{
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        textAlign: "center"
                    }}>
                        {title}
                    </Typography>
                    <Divider sx={{
                        backgroundColor: theme.palette.secondary.dark,
                        margin: "0.5rem 0rem 1rem 0rem",
                        borderBottomWidth: "1.5px"
                    }}/>
                    <Stack 
                    direction="row" 
                    spacing={0}
                    justifyContent="space-between"
                    alignItems="center"
                    >
                        <Button variant="contained" 
                        sx={{backgroundColor: theme.palette.secondary.dark}}
                        onClick={() => navigate(`/item/${id}`)}
                        >
                            Detalles
                        </Button>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                        <Typography sx={{fontWeight: 500, marginRight: "1rem"}}>
                            {price}USD
                        </Typography>
                        <Box className="comprar-btn">
                        <IconButton sx={{padding: 0, margin: 0}}>
                            <AddCartIcono className="bolsa-icono"/> 
                        </IconButton>
                        </Box>
                        </Box>
                    </Stack>
                </Box>
            </Box>
    )
}
