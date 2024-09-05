import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import OrderBook from '../ComponentsLT/OrderBook';  // Correct path

test('renders Order Book title', () => {
  render(
    <Provider store={store}>
      <OrderBook />
    </Provider>
  );
  const linkElement = screen.getByText(/Order Book/i);
  expect(linkElement).toBeInTheDocument();
});
