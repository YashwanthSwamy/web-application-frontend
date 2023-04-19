// import { render, screen } from '@testing-library/react';
// import Dashboard from './Dashboard';

// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...(jest.requireActual("react-router-dom") as any),
//   useNavigate: () => mockedUsedNavigate
// }));

// test('renders', () => {
//   render(<Dashboard />);
//   const linkElement = screen.getByText(/Dashboard/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { render, fireEvent, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe('Dashboard', () => {
  test('renders', () => {
    render(<Dashboard />);
    const linkElement = screen.getByText(/Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('displays recommended topics', () => {
    render(<Dashboard />);
    const topicsTitle = screen.getByText('Recommended Topics:');
    expect(topicsTitle).toBeInTheDocument();

    const topicsList = screen.getAllByRole('listitem');
    expect(topicsList.length).toBeGreaterThan(0);
  });

  test('allows search for topics', () => {
    render(<Dashboard />);
    const searchTitle = screen.getByText('Find Topics:');
    expect(searchTitle).toBeInTheDocument();

    const searchInput = screen.getByLabelText('Search');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole('button', { name: 'search' });
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);
    // expect search functionality to be tested here
  });
});
