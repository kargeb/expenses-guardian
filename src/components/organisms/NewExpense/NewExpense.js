import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "november",
  "december",
];

const NewExpense = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState("");
  const [isSummaryVisible, setSummaryVisibility] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("poszedl submit");

    setSummaryVisibility(true);
  };

  const style = {
    // height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div>
      <form noValidate autoComplete="off" style={style}>
        <Typography variant="h3">Dodaj nową startę piniędzy</Typography>
        {/* <FormControl variant="outlined" className={classes.formControl}> */}
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Miesiąc</InputLabel>
          <Select
            native
            value={currentMonth}
            onChange={(e) => setCurrentMonth(e.target.value)}
            label="Miesiąc"
            // inputProps={{
            //   name: "age",
            //   id: "outlined-age-native-simple",
            // }}
          >
            <option aria-label="None" value="" />
            {MONTHS.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Wydatek"
          variant="outlined"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <FormControl>
          <Input
            id="standard-adornment-weight"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="standard-weight-helper-text">
            Weight
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          wyslij
        </Button>
      </form>
      {isSummaryVisible && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {currentMonth}
            </Typography>
            <Typography variant="body2" component="p">
              {expense}
            </Typography>
            <Typography color="textSecondary">{price}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NewExpense;
