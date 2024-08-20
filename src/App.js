// src/App.js

import React, { useState } from "react";
import Form from "./components/Form";
import CarList from "./components/CarList";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

function App() {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFormSubmit = async (data) => {
        setIsLoading(true);
        setError(null); 

        try {
            // Replace with your API endpoint
            const response = await fetch('http://localhost:5001/api/recommend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setCars(result);
        } catch (error) {
            setError('Failed to fetch car recommendations');
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container>
            <h1>Car Recommendation System</h1>
            <Form onSubmit={handleFormSubmit} />
            {isLoading && <CircularProgress />}
            {error && <Typography color="error">{error}</Typography>}
            <CarList cars={cars} />
        </Container>
    );
}

export default App;
