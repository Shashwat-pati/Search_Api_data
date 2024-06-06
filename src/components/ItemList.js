import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Typography } from "@mui/material";
import { Grid, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchBar = styled(TextField)({
    marginBottom: "20px",
});

const HoverCard = styled(Card)(({ theme, isHovered }) => ({
    transition: "transform 0.3s, filter 0.3s",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    border: isHovered ? "1px solid black" : "1px solid transparent",
    filter: isHovered ? "none" : "brightness(0.6)",
}));

function ItemList() {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredCard(index);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setItems(response.data);
        }
        fetchData();
    }, []);

    return (
        <div style={{ paddingTop: "1.5rem" }}>
            <SearchBar
                label="Search"
                variant="outlined"
                fullWidth
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Grid container spacing={3}>
                {filteredItems.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <HoverCard
                            isHovered={hoveredCard === item.id}
                            onMouseEnter={() => handleMouseEnter(item.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    {item.body}
                                </Typography>
                            </CardContent>
                        </HoverCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ItemList;
