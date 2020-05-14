import React from "react";

const Month = ({ month }) => {
  const newMonth = [{ ...month }];
  console.log("newMOnth: ", newMonth);

  return (
    <div>
      <h4>{month.name}</h4>
      <ul>
        {month.expenses.map((item) => (
          <li key={item.name}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
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
