import Actions from './actions';
const initState = {
  identity: '',
  isRoomHost: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
      break;

    default:
      return state;
  }
};

export default reducer;
