// import Typography from "@mui/material/Typography";
// import { useState } from 'react';
// import {
//   Button,
//   Card,
//   CardContent,
//   TextField,
// } from '@mui/material';
// import NavBar from "../NavBar/NavBar";
// import "./Dashboard.css";
// import { Search } from "@mui/icons-material";
// import { yellow } from "@mui/material/colors";

// function Dashboard(): JSX.Element {
//   const [searchText, setSearchText] = useState<string>('');

//   const handleSearch = () => {
//     // handle search logic here
//   };

//   return (
//     <div>
//       <NavBar />
//       <Typography>
//       <div>
//         <Typography variant="h3" align="center" sx={{ mb: 4 }}>
//           Welcome to Social Media Sentiment Analysis
//         </Typography>
//         <br></br>
//         <div className="top-container">
//         <Typography variant="h5" align="left" sx={{ mb: 2, mr: 10 }}>
//             Recommended Topics:
//         </Typography>
//         </div>
//         <div className="topics-container">
//           <ul className="topics-list">
//             <li>Topic 1</li>
//             <li>Topic 2</li>
//             <li>Topic 3</li>
//             <li>Topic 1</li>
//             <li>Topic 2</li>
//             <li>Topic 3</li>
//             <li>Topic 1</li>
//             <li>Topic 2</li>
//             <li>Topic 3</li>
//           </ul>
//         </div>
//         <br></br>
//         <div className="top-container">
//         <Typography variant="h4" align="left" sx={{ mb: 2, mr: 10 }}>
//             Find Topics:
//         </Typography>
//         </div>
//         <div className="search-container">
//           <TextField
//             label="Search"
//             variant="outlined"
//             value={searchText}
//             onChange={(event) => setSearchText(event.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <Button variant="contained" onClick={handleSearch}>
//                   <Search />
//                 </Button>
//               ),
//             }}
//           />
//         </div>
//       </div>
//       </Typography>
//     </div>
//   );
// };

// export default Dashboard;




// import Typography from "@mui/material/Typography";
// import { useState } from 'react';
// import {
//   Button,
//   Card,
//   CardContent,
//   TextField,
// } from '@mui/material';
// import NavBar from "../NavBar/NavBar";
// import "./Dashboard.css";
// import { Search } from "@mui/icons-material";
// import { yellow } from "@mui/material/colors";

// function Dashboard(): JSX.Element {
//   const [searchText, setSearchText] = useState<string>('');

//   const handleSearch = () => {
//     // handle search logic here
//   };

//   return (
//     <div>
//       <NavBar />
//       <Typography>
//         <div>
//           <Typography variant="h3" align="center" sx={{ mb: 4 }}>
//             Welcome to Social Media Sentiment Analysis
//           </Typography>
//           <br></br>
//           <div className="top-container">
//             <Typography variant="h5" align="left" sx={{ mb: 2, mr: 10 }}>
//               Recommended Topics:
//             </Typography>
//           </div>
//           <div className="topics-container">
//             <div className="topics-grid">
//               <div className="topic-item">
//                 <div className="oval">Topic 1</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 2</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 3</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 4</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 5</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 6</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 7</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 8</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 9</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 10</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 11</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 12</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 13</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 14</div>
//               </div>
//               <div className="topic-item">
//                 <div className="oval">Topic 15</div>
//               </div>
//             </div>
//           </div>
//           <br></br>
//           <div className="top-container">
//             <Typography variant="h4" align="left" sx={{ mb: 2, mr: 10 }}>
//               Find Topics:
//             </Typography>
//           </div>
//           <div className="search-container">
//             <TextField
//               label="Search"
//               variant="outlined"
//               value={searchText}
//               onChange={(event) => setSearchText(event.target.value)}
//               InputProps={{
//                 endAdornment: (
//                   <Button variant="contained" onClick={handleSearch}>
//                     <Search />
//                   </Button>
//                 ),
//               }}
//             />
//           </div>
//         <div/>
//       </Typography>
//     </div>
//   );
// };

// export default Dashboard;

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
import { yellow } from "@mui/material/colors";

function Dashboard(): JSX.Element {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = () => {
    // handle search logic here
  };

  return (
    <div>
      <NavBar />
      <Typography>
      <div>
        <Typography variant="h3" align="center" sx={{ mb: 4 }}>
          Welcome to Social Media Sentiment Analysis
        </Typography>
        <br></br>
        <div className="top-container">
        <Typography variant="h5" align="center" sx={{ mb: 2, mr: 10 }}>
            Recommended Topics:
        </Typography>
        </div>
        <div className="topics-container">
          <div className="topics-grid">
            <div className="topic-oval">Topic 1</div>
            <div className="topic-oval">Topic 2</div>
            <div className="topic-oval">Topic 3</div>
            <div className="topic-oval">Topic 4</div>
            <div className="topic-oval">Topic 5</div>
            <div className="topic-oval">Topic 6</div>
            <div className="topic-oval">Topic 7</div>
            <div className="topic-oval">Topic 8</div>
            <div className="topic-oval">Topic 9</div>
            <div className="topic-oval">Topic 10</div>
            <div className="topic-oval">Topic 11</div>
            <div className="topic-oval">Topic 12</div>
            {/* <div className="topic-oval">Topic 13</div>
            <div className="topic-oval">Topic 14</div>
            <div className="topic-oval">Topic 15</div> */}
          </div>
        </div>
        <br></br>
        <div className="top-container">
        <Typography variant="h4" align="center" sx={{ mb: 2, mr: 10 }}>
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
        <div className="topics-container">
          <div className="topic-container">
            <div className="topic-oval">Topic 1</div>
            <div className="topic-oval">Topic 2</div>
            <div className="topic-oval">Topic 3</div>
            <div className="topic-oval">Topic 4</div>
            <div className="topic-oval">Topic 5</div>
            <div className="topic-oval">Topic 6</div>
            <div className="topic-oval">Topic 7</div>
            <div className="topic-oval">Topic 8</div>
            <div className="topic-oval">Topic 9</div>
            <div className="topic-oval">Topic 10</div>
            <div className="topic-oval">Topic 11</div>
            <div className="topic-oval">Topic 12</div>
          </div>
        </div>
      </div>
      </Typography>
    </div>
  );
};

export default Dashboard;
