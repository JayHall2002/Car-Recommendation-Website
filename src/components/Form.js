// src/components/Form.js

// Import Packages
import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import axios from "axios";

function Form({ onSubmit }) {
    const [formData, setFormData] = useState({
        budget: '',
        preferences: '' // Corrected the typo
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => { // Added async keyword
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5001/api/cars');
            onSubmit(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="Preferences"
                        name="preferences"
                        value={formData.preferences}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Find Cars
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default Form;
