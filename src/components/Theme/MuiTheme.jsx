import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
    palette:{
        primary: {
            light: colors.grey[50],
            main: colors.cyan[100],
            dark: colors.cyan[200],
            contrastText: "#000000",
            },
        secondary:{
            light: colors.indigo[200],
            main: colors.indigo[400],
            dark: colors.indigo[800],
            contrastText: "#ffffff",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 700,
                    fontSize: 16,
                },
            },
        },
    },
})
