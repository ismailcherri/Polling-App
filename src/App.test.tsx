import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'src/app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'src/App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  );

  expect(getByText(/Polling App/i)).toBeInTheDocument();
});
