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
     const dashboardTitle = screen.getByText('D A S H B O A R D');
     expect(dashboardTitle).toBeInTheDocument();
   });

  test('displays recommended topics', () => {
    render(<Dashboard />);
    const topicsTitle = screen.getByText('COVID19');
    expect(topicsTitle).toBeInTheDocument();

    const topicsList = screen.getAllByRole('heading');
    expect(topicsList.length).toBeGreaterThan(0);
  });

  test('allows search for topics', () => {
    render(<Dashboard />);

    const searchInput = screen.getByLabelText('Search');
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId('SearchIcon');
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'test' } });
    fireEvent.click(searchButton);
    // expect search functionality to be tested here
  });

  test('handles topic click', () => {
    render(<Dashboard />);

    const topicsList = screen.getAllByRole('heading');
    const topicTitle = topicsList[0].textContent;

    fireEvent.click(topicsList[0]);
  });
});
