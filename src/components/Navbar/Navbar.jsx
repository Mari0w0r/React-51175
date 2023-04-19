import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material";
import LogoIcono from "@mui/icons-material/StormRounded";
import { CartWidget } from "../Cart/CartWidget";
import { useTheme } from '@mui/material/styles';
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const theme = useTheme();

  return (
    <AppBar position="static" color= "primary" sx={{bgcolor: theme.palette.secondary.main}}>
        <Toolbar>
            <IconButton component={Link} to='/' size="large" edge='start' color="primary">
              <LogoIcono sx={{fontSize: 48}}/>
            </IconButton>
            <Typography component="h1" variant="h3" sx={{
                flexGrow: 1, 
                color: theme.palette.primary.main
              }}
            >
              ROGUE GEAR
            </Typography>
            <Stack direction='row' spacing={2} sx={{color: theme.palette.primary.main}}>
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

