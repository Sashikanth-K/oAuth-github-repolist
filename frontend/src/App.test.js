import { render, screen } from '@testing-library/react';
import App from './App';

import Home from "./views/Home";

test('renders home page header', () => {
  let r = render(<App />);
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders connect to github', () => {
  let r = render(<Home />);
  const linkElement = screen   .getByText(/Repositories/i);
  expect(linkElement).toBeInTheDocument();
});
