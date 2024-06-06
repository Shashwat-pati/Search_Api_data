import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f1c40f",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#f5f5f5",
        },
    },
    typography: {
        h5: {
            fontWeight: 700,
        },
    },
});

export default theme;
