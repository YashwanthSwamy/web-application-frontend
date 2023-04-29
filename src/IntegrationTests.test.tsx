import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "./SigninForm/Signin";
import LoginForm from "./LoginForm/LoginForm";
import Dashboard from "./Dashboard/Dashboard";
import exp from "constants";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe("Integration Tests", () => {
    test("Check Integration of SignIn with Database", () => {
      render(<SignIn />);
      const firstNameInput = screen.getByLabelText("First Name");
      const lastNameInput = screen.getByLabelText("Last Name");
      const emailInput = screen.getByLabelText("Email");
      const userIdInput = screen.getByLabelText("Username");
      const passwordInput = screen.getByLabelText("Password");
  
      fireEvent.change(firstNameInput, { target: { value: "test123" } });
      fireEvent.change(lastNameInput, { target: { value: "test123" } });
      fireEvent.change(userIdInput, { target: { value: "test123" } });
      fireEvent.change(emailInput, { target: { value: "test.test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password" } }); 

      const submitButton = screen.getByRole('button', { name: 'Sign In' });
      fireEvent.click(submitButton);

      render(<Dashboard />);
      const dashboardTitle = screen.getByText('D A S H B O A R D');
      expect(dashboardTitle).toBeInTheDocument();
    });

    test("Check Integration of LogIn with Database", () => {
      render(<LoginForm />);
      const userIdInput2 = screen.getByLabelText("Username");
      const password = screen.getByLabelText("Password");

      fireEvent.change(userIdInput2, { target: { value: "test123" } });
      fireEvent.change(password, { target: { value: "password" } });

      const submitButton2 = screen.getByRole("button", { name: "Login" });
      fireEvent.click(submitButton2);

      render(<Dashboard />);
      const dashboardTitle = screen.getByText('D A S H B O A R D');
      expect(dashboardTitle).toBeInTheDocument();
    });

});