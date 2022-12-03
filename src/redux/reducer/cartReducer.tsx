const cartReducer = (state = [], action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartReducer;
