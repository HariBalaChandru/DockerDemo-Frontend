import "./App.css";
import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  CardContent,
  Typography,
  Card,
  Grid,
  Avatar,
  Button,
} from "@material-ui/core";

function App() {
  const [users, setUsers] = useState([]);
  const calcAge = (ageString) => {
    var ageDate = new Date(ageString);
    var today = new Date();
    var ageYear = today.getFullYear() - ageDate.getFullYear();
    var ageMonth = today.getMonth() - ageDate.getMonth();
    if (
      ageMonth < 0 ||
      (ageMonth === 0 && today.getDate() < ageDate.getDate())
    ) {
      ageYear--;
    }
    return ageYear;
  };
  const btnClick = (event) => {
    const url = `http://${process.env.REACT_APP_BK_SERVER || 'localhost'}:5000/profiles`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setUsers(r))
      .catch(err => console.log(err));
  };
  const card = (data, i) => (
    <Grid item xs={3} key={i}>
      <Card
        variant="outlined"
        style={{
          margin: 10,
        }}
      >
        <React.Fragment>
          <CardContent>
            <Avatar
              src={data.avatar}
              style={{
                width: 200,
                height: 200,
                margin: "auto",
              }}
            />
            <Typography
              sx={{ fontSize: 14 }}
              style={{
                color: data.color,
              }}
              gutterBottom
            >
              {data.name}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                fontStyle: "italic",
                color: data.color,
              }}
            >
              {data.mail}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                color: data.color,
              }}
            >
              {data.gender}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                color: data.color,
              }}
            >
              {data.mobile}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                color: data.color,
              }}
            >
              {data.username}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              style={{
                color: data.color,
              }}
            >
              {calcAge(data.dob) + " years"}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Grid>
  );
  return (
    <div className="App">
      <Container>
        <CssBaseline />
        <Button onClick={btnClick}>Fetch</Button>
        <Grid container>{users.map(card)}</Grid>
      </Container>
    </div>
  );
}

export default App;
