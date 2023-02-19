function Reducer(state, action) {
  switch (action.type) {
    case "addnumber":
      console.log(state);
      console.log(action);

      return {
        name: action.payload.name,
        count: state.count + 1,
      };

    case "subnumber":
      return {
        name: action.payload.name,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

export default Reducer;
