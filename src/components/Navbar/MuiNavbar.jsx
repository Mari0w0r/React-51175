import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material";
import LogoIcono from "@mui/icons-material/StormRounded";
import { CartWidget } from "../CartWidget/CartWidget";
import { useTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

export const MuiNavbar = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color= "primary" sx={{bgcolor: theme.palette.primary.light}}>
        <Toolbar>
            <IconButton size="large" edge='start' color="secondary">
              <LogoIcono sx={{fontSize: 40}}/>
            </IconButton>
            <Typography component="h1" sx={{
                flexGrow: 1,
                fontWeight: 700,
                fontSize: 30,
                color: theme.palette.secondary.main
              }}
            >
              ROGUE GEAR
            </Typography>
            <Stack direction='row' spacing={2} sx={{color: theme.palette.secondary.main}}>
              <Button color="inherit">Teclados</Button>
              <Button color="inherit">Mouse</Button>
              <Button color="inherit">Mousepads</Button>
              <Button color="inherit">Otros</Button>
              <CartWidget/>
            </Stack>
        </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

