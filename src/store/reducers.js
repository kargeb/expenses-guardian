export const ADD_MONTH = "ADD_MONTH";

const initialState = {
  months: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONTH: {
      console.log("action.payload z reduxa: ", action.payload);
      console.log("ziterowany payload: ", [{ ...action.payload }]);
      console.log("state.moths z reduxa:", state);
      const newMonth = action.payload;
      console.log("newMOnth: ", newMonth);
      const newMONTHS = [...state.months, newMonth];
      console.log("newMONTHS :", newMONTHS);

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
  //   console.log(action);
  //   console.log(state);
  //   return state;
};

export default reducer;
