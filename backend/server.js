// backend/server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const app = express();
const port = 5001;

// Middleware to handle JSON requests
app.use(express.json());

// Function to load car data from CSV
const loadCarData = () => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(path.join(__dirname, 'cars.csv'))
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

// Route to get all car data
app.get('/api/cars', async (req, res) => {
  try {
    const carData = await loadCarData();
    res.json(carData);
  } catch (error) {
    res.status(500).json({ message: 'Error loading car data', error });
  }
});

// Route to recommend cars based on form data
app.post('/api/recommend', async (req, res) => {
  const { budget, preferences } = req.body;

  try {
    const carData = await loadCarData();
    
    // Simple filtering logic based on budget (extend as needed)
    const recommendedCars = carData.filter(car => 
      parseFloat(car.price.replace(/[^0-9.-]+/g, "")) <= parseFloat(budget)
      && car.fuelType.toLowerCase().includes(preferences.toLowerCase())
    );
    
    res.json(recommendedCars);
  } catch (error) {
    res.status(500).json({ message: 'Error processing recommendation', error });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
