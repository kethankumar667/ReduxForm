const initialState = [
  {
    id: 0,
    FisrtName: "Kethan",
    LastName: "Kumar",
    number: 7013604560,
    email: "k@hfn.com",
  },
  {
    id: 1,
    FisrtName: "Ram",
    LastName: "Kumar",
    number: 1987654321,
    email: "r@hfn.com",
  },
  {
    id: 2,
    FisrtName: "Shravan",
    LastName: "Kumar",
    number: 1234555689,
    email: "s@hfn.com",
  },
];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      state = [...state, action.payload];
      return state;
    }
    case "UPDATE_USER": {
      const updatestate = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatestate;
      return state;
    }
    case "DELETE_USER": {
      const filterstate = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterstate;
      return state;
    }
    default:
      return state;
  }
};
