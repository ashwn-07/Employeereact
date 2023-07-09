import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const Hompage = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <Grid
        container
        marginLeft="auto"
        marginRight="auto"
        spacing={4}
        sx={{ marginTop: "100px" }}
      >
        {data.map((value, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={6} lg={4}>
              <Card sx={{ maxWidth: 345, backgroundColor: "#BB001B" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      color="WHITE"
                      component="div"
                    >
                      {value.name}
                    </Typography>
                    <Typography variant="body2" color="WHITE">
                      ID of the user is:{" "}
                      <Typography variant="h6">{value.id}</Typography>
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="body2" color="WHITE">
                      E-Mail of the user is:{" "}
                      <Typography variant="h6"> {value.email}</Typography>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Hompage;
