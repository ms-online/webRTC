const initState = {
  identity: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return {
        ...state,
      };
      break;

    default:
      return state;
  }
};

export default reducer;
