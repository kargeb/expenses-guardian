import React, { useEffect } from "react";
import { TextField, Paper, Box, Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useDispatch } from "react-redux";
import { ADD_MONTH } from "./../store/reducers";

import Main from "../components/Main";
import NewExpense from "../components/organisms/NewExpense/NewExpense";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Use EFFECT z APP do Reduxa ");
    fetch("/database.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("data z reducowego usestate", data);
        data.months.forEach((month) => {
          console.log("month z usetstate reuxowego: ", month);
          dispatch({ type: ADD_MONTH, payload: month });
        });
      });
  }, [dispatch]);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}> */}
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Paper>
          <Typography
            // margin={30}
            variant="h3"
            color="primary"
            align="center"
            gutterBottom
          >
            Expenses
            <hr />
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Paper>
                  <Main />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                  <NewExpense />
                </Paper>
              </Grid>
            </Grid>
            <hr />
          </Typography>
          <form>
            <TextField
              width={400}
              name="title"
              label="Exercise"
              margin="normal"
            />
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default App;
