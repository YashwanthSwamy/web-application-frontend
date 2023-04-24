import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import LoginPage from './LoginForm';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe('LoginPage', () => {
  test('renders login form', () => {
    render(<LoginPage />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole("button", { name: "Login" });
    const newuserButton = screen.getByRole("button", { name: "New User?" });
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(newuserButton).toBeInTheDocument();
  });

  test('submits login data', async () => {
    const mockFetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    }),
  ) as jest.Mock;
    global.fetch = mockFetch;
    render(<LoginPage />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole("button", { name: "Login" });
    const newuserButton = screen.getByRole("button", { name: "New User?" });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);
    fireEvent.click(newuserButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });
  });

  test('disables submit button when fields are empty', () => {
    render(<LoginPage />);
    const submitButton = screen.getByTestId('Login');
    expect(submitButton).toBeDisabled();

    const usernameInput = screen.getByLabelText('Username');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(submitButton).toBeDisabled();

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(submitButton).not.toBeDisabled();

    fireEvent.change(usernameInput, { target: { value: '' } });
    expect(submitButton).toBeDisabled();
  });

  test('handles API errors', async () => {
    const mockFetch = jest.fn(() => Promise.reject(new Error('API call failed')));
    global.fetch = mockFetch;
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<LoginPage />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole("button", { name: "Login" });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    consoleErrorSpy.mockRestore();
  });

});
