export const ADD_MONTH = "ADD_MONTH";

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
    default: {
      console.log("Nieznana akcja: ", action.type);
      return { ...state };
    }
  }
};

export default reducer;
