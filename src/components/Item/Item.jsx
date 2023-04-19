import { Box, Typography, Divider, Button} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import { Stack } from "@mui/system";
import "./Item.css"
import { useNavigate } from 'react-router-dom';

export function Item ({title, price, img, id}){

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
                        backgroundColor: theme.palette.secondary.main,
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
                        sx={{backgroundColor: theme.palette.secondary.main}}
                        onClick={() => navigate(`/item/${id}`)}
                        >
                            Detalles
                        </Button>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                        <Typography sx={{fontWeight: 500, marginRight: "1rem"}}>
                            PRECIO: {price}USD
                        </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
    )
}
