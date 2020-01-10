export const initialState = {
  accounts: []
};

export default (state, action) => {
  switch (action.type) {
    case "FETCH_ACCOUNTS":
      return { ...state, accounts: action.payload };
    case "ADD_ACCOUNT": {
      return { ...state, accounts: [...state.accounts, action.payload] };
    }
    default:
      return state;
  }
};
