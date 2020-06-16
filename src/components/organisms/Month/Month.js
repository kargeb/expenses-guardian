import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,

    "&:hover": {
      background: theme.palette.secondary.main,
      cursor: "pointer",
    },
  },
}));

const Month = ({ month }) => {
  const handleClick = (item, month) => {
    console.log("Kliknael w: ", item, " w miesicu::", month);
  };

  const newMonth = [{ ...month }];
  const classes = useStyles();
  console.log("newMOnth: ", newMonth);

  return (
    <div>
      <Typography variant="h4"> {month.name}</Typography>
      <List aria-label="secondary mailbox folders">
        {month.expenses.map((item) => (
          <ListItem key={item.name}>
            <ListItemText primary={item.name} secondary={item.price} />
            <ListItemAvatar>
              <Avatar
                className={classes.icon}
                onClick={() => handleClick(item, month.name)}
              >
                <DeleteIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        ))}
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
