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
      const oldMonths = [];
      const newMonth = [];

      state.months.forEach((month) => {
        if (month.name != action.payload.name) {
          oldMonths.push(month);
        } else {
          newMonth.push(month);
        }
      });

      const updatedMonth = {
        ...newMonth[0],
        expenses: [...newMonth[0].expenses, ...action.payload.expenses],
      };

      return {
        ...state,
        months: [...oldMonths, updatedMonth],
      };
    }
    default: {
      console.log("Nieznana akcja: ", action.type);
      return { ...state };
    }
  }
};

export default reducer;
