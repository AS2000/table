import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Header from './Header';

test('Header renders without crashing', () => {
  render(
    <Provider store={ store }>
      <Header />
    </Provider>
  );

  expect(screen.getByRole('textbox', { palceholder: 'Search by name'})).toBeInTheDocument();

  const startDate = screen.getByPlaceholderText('Start-Date')
  fireEvent.mouseDown(startDate);
  fireEvent.change(startDate, { target: {value: '2020-12-06' }});

  const endDate = screen.getByPlaceholderText('End-Date')
  fireEvent.mouseDown(endDate);
  fireEvent.change(endDate, { target: {value: '2020-12-06' }});
});
