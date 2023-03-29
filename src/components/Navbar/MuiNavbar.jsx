import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material";
import LogoIcono from "@mui/icons-material/StormRounded";
import { CartWidget } from "../CartWidget/CartWidget";
import { useTheme } from '@mui/material/styles';
import "../Navbar/MuiNavbar.css";
import { Link } from "react-router-dom";

export const MuiNavbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color= "primary" sx={{bgcolor: theme.palette.primary.light}}>
        <Toolbar>
            <IconButton component={Link} to='/' size="large" edge='start' color="secondary">
              <LogoIcono sx={{fontSize: 48}}/>
            </IconButton>
            <Typography component="h1" variant="h3" sx={{
                flexGrow: 1, 
                color: theme.palette.secondary.main
              }}
            >
              ROGUE GEAR
            </Typography>
            <Stack direction='row' spacing={2} sx={{color: theme.palette.secondary.main}}>
              <Button component={Link} to="/category/teclados" color="inherit" className="navbar-secciones">Teclados</Button>
              <Button component={Link} to="/category/mouses" color="inherit" className="navbar-secciones">Mouse</Button>
              <Button component={Link} to="/category/mousepads" color="inherit" className="navbar-secciones">Mousepads</Button>
              <Button component={Link} to="/category/accesorios" color="inherit" className="navbar-secciones">Accesorios</Button>
              <CartWidget/>
            </Stack>
        </Toolbar>
    </AppBar>
  );
};

