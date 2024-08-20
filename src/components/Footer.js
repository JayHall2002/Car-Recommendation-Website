// src/components/Footer.js
import React from 'react';
import { Typography, Container } from '@mui/material';

function Footer() {
  return (
    <footer style={{ marginTop: 'auto', padding: '16px', backgroundColor: '#f1f1f1' }}>
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Car Recommendation Website
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
