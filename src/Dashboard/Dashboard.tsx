import Typography from "@mui/material/Typography";
import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  TextField,
} from '@mui/material';
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import { Search } from "@mui/icons-material";

function Dashboard(): JSX.Element {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    // handle search logic here
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          Welcome to Social Media Sentiment Analysis
        </Typography>
        <div className="topics-container">
          <ul className="topics-list">
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
          </ul>
        </div>
        <br></br>
        <div className="top-container">
        <Typography variant="h4" align="left" sx={{ mb: 2, mr: 10 }}>
            Find Topics:
        </Typography>
        </div>
        <div className="search-container">
          <TextField
            label="Search"
            variant="outlined"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            InputProps={{
              endAdornment: (
                <Button variant="contained" onClick={handleSearch}>
                  <Search />
                </Button>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
