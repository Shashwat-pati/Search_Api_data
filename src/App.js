import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import theme from "./theme";
import Header from "./components/Header";
import ItemList from "./components/ItemList";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Container>
                <ItemList />
            </Container>
        </ThemeProvider>
    );
}

export default App;
