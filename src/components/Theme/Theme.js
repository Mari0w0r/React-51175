import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
    palette:{
        primary: {
            light: colors.grey[50],
            main: colors.cyan[100],
            dark: colors.cyan[200],
            contrastText: "#fff",
            },
        secondary: {
            light: colors.indigo[200],
            main: colors.indigo[400],
            dark: colors.indigo[800],
            contrastText: "#fff",
        },
    },
    customCssVariables: {
        primaryColor: "#b2ebf2",
    },
    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        h1:{
            fontFamily: ["Koulen", "cursive"].join(","),
        },
        h2:{
            fontFamily: ["Koulen", "cursive"].join(","),
        },
        h3:{
            fontFamily: ["Koulen", "cursive"].join(","),
        },
        h4:{
            fontFamily: ["Koulen", "cursive"].join(","),
        },
        h5:{
            fontFamily: ["Koulen", "cursive"].join(","),
        },
        h6:{
            fontFamily: ["Koulen", "cursive"].join(","),
        },
    }
})
