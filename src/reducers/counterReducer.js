function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    case 'USER_INPUT':
      return state + parseInt(action.payload);
    default:
      console.error('Unexpected action type.');
      return state;
  }
}

export default counterReducer;
