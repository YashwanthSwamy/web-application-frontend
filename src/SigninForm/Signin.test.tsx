import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "./Signin";

describe("SignIn component", () => {
  test("renders all input fields and submit button", () => {
    render(<SignIn />);
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", { name: "Sign In" });
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
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
    const passwordInput = screen.getByLabelText("Password");

    fireEvent.change(firstNameInput, { target: { value: "test" } });
    fireEvent.change(lastNameInput, { target: { value: "test" } });
    fireEvent.change(emailInput, { target: { value: "test.test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(firstNameInput).toHaveValue("test");
    expect(lastNameInput).toHaveValue("test");
    expect(emailInput).toHaveValue("test.test@example.com");
    expect(passwordInput).toHaveValue("password");
  });
});
