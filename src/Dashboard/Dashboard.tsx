import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/NavBar";
import "./Dashboard.css"

function Dashboard() {    
    return (
        <div>
            <NavBar/>
            <div className="container">
            <Typography variant="h2" align="center">
                Dashboard
            </Typography>
        </div>
        </div>
    );
}

export default Dashboard;