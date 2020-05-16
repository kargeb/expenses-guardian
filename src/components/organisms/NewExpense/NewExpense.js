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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { useDispatch } from "react-redux";
import { ADD_EXPENSE } from "../../../store/reducers";
import { useSelector } from "react-redux";

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
  // const [month, setMonth] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [pickedMonths, setPickedMonths] = useState([]);
  const [isAutomatic, setIsAutomatic] = useState(true);
  const [payday, setPayday] = useState(15);
  const [isSummaryVisible, setSummaryVisibility] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("poszedl submit: ", month, name, price);
    // const newExpense = { month, name, price };

    // setSummaryVisibility(true);
    // dispatch({ type: ADD_EXPENSE, payload: newExpense });
  };

  const handleCheckboxes = (e) => {
    console.log("JESTEEEEM");
    const clickedMonth = e.target.name;
    console.log(e.target.name, " checked:", e.target.checked);

    if (pickedMonths.includes(clickedMonth)) {
      console.log("miesiace przed clickienieniem: ", pickedMonths);
      const monthsWithoutClicked = pickedMonths.filter(
        (month) => month !== clickedMonth
      );
      console.log("pozostale miesiace: ", monthsWithoutClicked);
      setPickedMonths(monthsWithoutClicked);
    } else {
      setPickedMonths([...pickedMonths, clickedMonth]);
    }
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
          <FormGroup row>
            {MONTHS.map((month) => (
              <FormControlLabel
                key={month}
                control={
                  <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    checked={pickedMonths.includes(month)}
                    // checked={pickedMonths.includes({ month })}
                    onChange={handleCheckboxes}
                    name={month}
                    color="primary"
                  />
                }
                label={month}
              />
            ))}
          </FormGroup>
        </FormControl>
        <Button variant="outlined" onClick={() => setPickedMonths([...MONTHS])}>
          Check all
        </Button>

        <TextField
          id="outlined-basic"
          label="Nazwa wydatku"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl>
          <Input
            id="standard-adornment-weight"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            endAdornment={<InputAdornment position="end">Zł</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Cena</FormHelperText>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={isAutomatic}
              onChange={(e) => setIsAutomatic(e.target.checked)}
              name="automatic"
            />
          }
          label="Automatyczna spłata"
        />
        <InputLabel htmlFor="outlined-age-native-simple">Miesiąc</InputLabel>
        <Select
          native
          value={payday}
          onChange={(e) => setPayday(e.target.value)}
          label="Miesiąc"
          // inputProps={{
          //   name: "age",
          //   id: "outlined-age-native-simple",
          // }}
        >
          <option aria-label="None" value="" />
        </Select>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Wyslij
        </Button>
      </form>
      {isSummaryVisible && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {/* {month} */}
            </Typography>
            <Typography variant="body2" component="p">
              {name}
            </Typography>
            <Typography color="textSecondary">{price}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NewExpense;
