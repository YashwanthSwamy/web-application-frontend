import { render, screen, fireEvent } from "@testing-library/react";
import exp from "constants";
import Dashboard from "./Dashboard/Dashboard";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe("Acceptance Tests", () => {
    test("render final graphs after user searches by entering search term", () => {
      render(<Dashboard />);
      const searchInput = screen.getByLabelText('Search');
      const searchButton = screen.getByTestId('SearchIcon');
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(searchButton);
      const wordcloud = screen.getByAltText("Wordcloud");
      expect(wordcloud).toBeInTheDocument();
      const charts = screen.getAllByRole("img");
      expect(charts.length).toBeGreaterThan(0);  
    });

    test("render final graphs after user searches by clicking recommended search", () => {
        render(<Dashboard />);
        const topicsList = screen.getAllByRole('heading');
        fireEvent.click(topicsList[0]);
        const searchButton = screen.getByTestId('SearchIcon');
        fireEvent.click(searchButton);
        const wordcloud = screen.getByAltText("Wordcloud");
        expect(wordcloud).toBeInTheDocument();
        const charts = screen.getAllByRole("img");
        expect(charts.length).toBeGreaterThan(0);  
      });

});