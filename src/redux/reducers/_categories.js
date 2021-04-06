export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_CATEGORIES':
      return [
        ...payload,
      ];

    default:
      return state;
  }
};
