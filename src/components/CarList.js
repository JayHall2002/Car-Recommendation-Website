// src/components/CarList.js

import React from "react";
import { Card, CardContent, Typography, Grid, CircularProgress } from "@mui/material";

function CarList({ cars, isLoading }) {
    if (isLoading) {
        return <CircularProgress />;
    }

    return (
        <Grid container spacing={2}>
            {cars.length > 0 ? (
                cars.map((car, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{car.make} {car.model}</Typography>
                                <Typography color="textSecondary">Price: {car.price}</Typography>
                                <Typography color="textSecondary">Fuel Type: {car.fuelType}</Typography>
                                <Typography color="textSecondary">Year: {car.year}</Typography>
                                <Typography color="textSecondary">Mileage: {car.mileage}</Typography>
                                {/* Add more car details as needed */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            ) : (
                <Typography>No cars available</Typography>
            )}
        </Grid>
    );
}

export default CarList;
