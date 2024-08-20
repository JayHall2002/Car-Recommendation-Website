import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../components/Form';

test('renders form and handles submit', () => {
  const handleSubmit = jest.fn();
  render(<Form onSubmit={handleSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/Budget/i), { target: { value: '30000' } });
  fireEvent.change(screen.getByLabelText(/Preferences/i), { target: { value: 'Sedan' } });
  fireEvent.click(screen.getByText(/Find Cars/i));
  
  expect(handleSubmit).toHaveBeenCalledWith({
    budget: '30000',
    preferences: 'Sedan'
  });
});
