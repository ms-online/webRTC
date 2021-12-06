const Actions = {
  SET_IS_ROOM_HOST: 'SET_IS_ROOM_HOST',
};

export const setIsRootHost = (isRoomHost) => {
  return {
    type: Actions.SET_IS_ROOM_HOST,
    isRoomHost,
  };
};

export default Actions;
