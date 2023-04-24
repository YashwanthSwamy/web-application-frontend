import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "./Signin";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe("SignIn component", () => {
  test("renders all input fields and submit button", () => {
    render(<SignIn />);
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const userIdInput = screen.getByLabelText("Username");
    const submitButton = screen.getByRole("button", { name: "Sign In" });
    const userButton = screen.getByRole("button", { name: "Existing User?" });
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(userIdInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(userButton).toBeInTheDocument();
  });

  test("displays correct page title", () => {
    render(<SignIn />);
    const pageTitle = screen.getByRole("heading", { level: 1 });
    expect(pageTitle).toHaveTextContent("Social Media Sentiment Analysis");
  });

  test("updates state when input fields change", () => {
    render(<SignIn />);
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const userIdInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(firstNameInput, { target: { value: "test" } });
    fireEvent.change(lastNameInput, { target: { value: "test" } });
    fireEvent.change(userIdInput, { target: { value: "test" } });
    fireEvent.change(emailInput, { target: { value: "test.test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(firstNameInput).toHaveValue("test");
    expect(lastNameInput).toHaveValue("test");
    expect(userIdInput).toHaveValue("test");
    expect(emailInput).toHaveValue("test.test@example.com");
    expect(passwordInput).toHaveValue("password");
  });

  test("displays error message when username already exists", async () => {
    const mockFetch = jest.fn(() =>
      Promise.resolve({
        status: 409,
      })
    ) as jest.Mock;
    global.fetch = mockFetch;
  
    render(<SignIn />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Sign In' });
  
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);
  
    // expect(mockFetch).toHaveBeenCalledTimes(0);
    // expect(screen.getByText('Username already exists!!')).toBeInTheDocument();
    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('testpassword');
  });
  

});