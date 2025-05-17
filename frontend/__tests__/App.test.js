import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the shop title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Welcome to our shop/i);
  expect(titleElement).toBeInTheDocument();
});
