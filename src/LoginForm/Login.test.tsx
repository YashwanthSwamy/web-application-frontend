import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginForm';

describe('LoginPage', () => {
  test('renders login form', () => {
    const { getByLabelText, getByTestId } = render(<LoginPage />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByTestId('Login');
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('submits login data', async () => {
    const mockFetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ test: 100 }),
    }),
  ) as jest.Mock;
    global.fetch = mockFetch;
    const { getByLabelText, getByTestId } = render(<LoginPage />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByTestId('Login');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: 'testuser', password: 'testpassword' }),
      });
    });
  });

  test('disables submit button when fields are empty', () => {
    const { getByLabelText, getByTestId } = render(<LoginPage />);
    const submitButton = getByTestId('Login');
    expect(submitButton).toBeDisabled();

    const usernameInput = getByLabelText('Username');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(submitButton).toBeDisabled();

    const passwordInput = getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(submitButton).not.toBeDisabled();

    fireEvent.change(usernameInput, { target: { value: '' } });
    expect(submitButton).toBeDisabled();
  });
});
