import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Month from "./organisms/Month/Month";
import Typography from "@material-ui/core/Typography";

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

const Main = () => {
  const [months, setMonths] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");

  let searchedMonth = null;

  if (months.length) {
    console.log("jestem w IFIE");
    searchedMonth = months.filter((month) => month.name == currentMonth);
  }

  useEffect(() => {
    console.log("zaladowalem sie ");
    fetch("/database.json")
      .then((response) => response.json())
      .then((data) => setMonths(data.months));
  }, []);

  return (
    <div>
      {console.log("months length: ", months.length)}
      {console.log("months: ", months)}
      <Typography variant="h3">Jestem w Main</Typography>
      <label htmlFor="month">
        <select
          id="month"
          name="month"
          style={{ textTransform: "capitalize" }}
          onChange={(e) => setCurrentMonth(e.target.value)}
        >
          {MONTHS.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </label>

      <p>Wybrany miesiac: {currentMonth}</p>
      {searchedMonth !== null && <Month month={searchedMonth[0]} />}
    </div>
  );
};

export default Main;
