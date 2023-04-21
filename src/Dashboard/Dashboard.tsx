import Typography from "@mui/material/Typography";
import { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Grid,
} from '@mui/material';
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css";
import { Search } from "@mui/icons-material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar } from 'recharts';

function Dashboard(): JSX.Element {
  const [searchText, setSearchText] = useState<string>('');

  interface SentimentData {
    pos: string;
    neu: string;
    neg: string;
  }
  
  const [data, setData] = useState<SentimentData[]>([]);

  const handleSearch = () => {
    // call API to get data based on search text
    fetch(`https://sentiment-analysis-analyze.herokuapp.com/analyze/${searchText}`)
      .then(response => response.json())
      .then(data => setData(data));
  };
  console.log(handleSearch);

  useEffect(() => {
    fetch("https://sentiment-analysis-analyze.herokuapp.com/analyze/sentiment")
      .then((response) => response.json())
      .then((data: SentimentData) => setData([data]))
      .catch((error) => console.error(error));
  }, []);
  console.log(useEffect);

  setTimeout(function(){
    window.location.reload();
 }, 20000);

  const recommendedTopics = [
    { id: 1, title: 'COVID19', description: 'Pandemic' },
    { id: 2, title: 'Bitcoin', description: 'Cryptocurrency' },
    { id: 3, title: 'ClimateChange', description: 'Environment' },
    { id: 4, title: 'BlackLivesMatter', description: 'Activism' },
  ];

  const handleTopicClick = (topicTitle: string) => {
    setSearchText(topicTitle);
  }

  return (
    <div>
      <NavBar />
      <div>
        <div className="dashboard-container">
          <Typography variant="h5" align="left" sx={{ mb: 4, mr: 100 }}>
            D A S H B O A R D
          </Typography>
        </div>
        <div>
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
        <br />
        <br></br>
        <div className="topics-container">
          <Grid container spacing={3}>
            {recommendedTopics.map((topic) => (
              <Grid item xs={12} sm={6} md={3} key={topic.id}>
                <Card onClick={() => handleTopicClick(topic.title)}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {topic.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {topic.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <br />
        <br></br>
        <br></br>
      </div>
      <div style={{ display: "flex" }}>
        {data.length > 0 && (
          <div style={{ flex: 1 }}>
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="pos" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="neu" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
        )}
        {data.length > 0 && (
          <div style={{ flex: 1 }}>
            <BarChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="neu" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="neg" fill="#8884d8" />
            </BarChart>
          </div>
        )}
      </div>
      <div className="image-container">
        <img src={'https://sentiment-analysis-analyze.herokuapp.com/analyze/wordcloud'} alt="Wordcloud" />
    </div>
    </div>
  );
};

export default Dashboard;
