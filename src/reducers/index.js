
const initialState = {
    books: []
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'GET_POMODOROS':
        return {
          pomodoros: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  