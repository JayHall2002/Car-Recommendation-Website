// src/components/Results.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Results({ cars }) {
  return (
    <div>
      {cars.map((car, index) => (
        <Card key={index} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Typography variant="h6">{car.name}</Typography>
            <Typography color="textSecondary">{car.details}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Results;
