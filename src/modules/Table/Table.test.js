import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Table from './Table';

test('Table renders without crashing', () => {
  render(
    <Provider store={ store }>
      <Table />
    </Provider>
  );

  expect(screen.getByText('User Name')).toBeInTheDocument();
});
