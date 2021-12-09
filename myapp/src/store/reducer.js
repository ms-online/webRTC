import Actions from './actions';
const initState = {
  identity: '',
  isRoomHost: false,
  connectOnlyWithAudio: false,
  roomId: null,
  showOverlay: true,
  participants: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
      break;
    case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio,
      };
      break;
    case Actions.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
      break;
    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: action.identity,
      };
      break;
    case Actions.SET_SHOW_OVERLAY:
      return {
        ...state,
        showOverlay: action.showOverlay,
      };
      break;
    case Actions.SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants,
      };
      break;

    default:
      return state;
  }
};

export default reducer;
