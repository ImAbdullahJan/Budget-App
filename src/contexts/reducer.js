export default (state, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT": {
      return { accounts: [...state.accounts, action.payload] };
    }

    default: {
      return state;
    }
  }
};
