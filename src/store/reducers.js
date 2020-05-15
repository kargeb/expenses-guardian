export const ADD_MONTH = "ADD_MONTH";
export const ADD_EXPENSE = "ADD_EXPENSE";

const initialState = {
  months: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONTH: {
      const newMONTHS = [...state.months, action.payload];

      return {
        ...state,
        months: newMONTHS,
      };
    }
    case ADD_EXPENSE: {
      console.log("akcja ADD_EZXPENSE - payload: ", action.payload);

      const currentMonth = action.payload;
      let pickedMonth = null;
      let otherMonths = [];

      console.log("current month name:", currentMonth.name);
      // console.log("current month name:", currentMonth.name);

      otherMonths = state.months.filter((month) => {
        console.log("month name z petli:", month.name);
        if (month.name == currentMonth.month) {
          console.log("JESTEEEEEEM");
          pickedMonth = JSON.parse(JSON.stringify(month));
          return false;
        } else {
          return true;
        }
      });

      console.log("picked month: ", pickedMonth);
      console.log("otherMOnths: ", otherMonths);

      const newExpense = {
        name: currentMonth.name,
        price: currentMonth.price,
      };

      console.log("new Expense: ", newExpense);

      console.log("picked mont expsnbense: ", pickedMonth.expenses);
      pickedMonth.expenses = [...pickedMonth.expenses, newExpense];
      console.log("NOWEEE picked mont expsnbense: ", pickedMonth.expenses);

      const newDB = [...otherMonths, pickedMonth];
      console.log("new DB : ", newDB);

      return {
        ...state,
        months: newDB,
      };
    }
    default: {
      console.log("Nieznana akcja: ", action.type);
      return { ...state };
    }
  }
};

export default reducer;
