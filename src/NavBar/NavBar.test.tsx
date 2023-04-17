import { fireEvent, render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("NavBar component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render a logo and a sign out button", () => {
    render(<NavBar />);
    const submitButton = screen.getByRole("button", { name: "Sign Out" });
    const logo = screen.getByRole("button", { name: "S E N T I" });
    expect(submitButton).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });

  it("should call useNavigate when the logo is clicked", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<NavBar />);
    const logo = screen.getByRole("button", { name: "S E N T I" });
    fireEvent.click(logo);

    expect(mockNavigate).toHaveBeenCalledWith("/dashborad");
  });

  it("should call useNavigate when the sign out button is clicked", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    render(<NavBar />);
    const submitButton = screen.getByRole("button", { name: "Sign Out" });

    fireEvent.click(submitButton);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
