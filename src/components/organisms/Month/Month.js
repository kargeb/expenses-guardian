import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";

const Month = ({ month }) => {
  const newMonth = [{ ...month }];
  console.log("newMOnth: ", newMonth);

  return (
    <div>
      <Typography variant="h4"> {month.name}</Typography>
      <List aria-label="secondary mailbox folders">
        {month.expenses.map((item) => (
          <ListItem key={item.name}>
            <ListItemText primary={item.name} secondary={item.price} />
          </ListItem>
        ))}
        {/* 
        <ListItem>
          <ListItemText primary="Trash" secondary="pies" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Spam" />
        </ListItem> */}
      </List>
      {/* <ul>
      </ul> */}
    </div>
  );
};

Month.defaultProps = {
  month: {
    name: "Ni ma nic",
    expenses: [],
  },
};

export default Month;
