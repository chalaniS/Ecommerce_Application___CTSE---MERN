import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

const product = {
  name: 'Test Product',
  price: 20,
  image: 'https://via.placeholder.com/150',
};

test('displays product details', () => {
  render(<ProductCard product={product} />);
  expect(screen.getByText('Test Product')).toBeInTheDocument();
  expect(screen.getByText('$20')).toBeInTheDocument();
});
