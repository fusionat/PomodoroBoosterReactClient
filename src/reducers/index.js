
const initialState = {
    pomodoros: [],
    tomatos: [],
    loading: false
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {      
      case 'TOMATOS_LOADED': 
        return {
          ...state, 
          tomatos: action.payload,
          loading: true
        } 

      default:
        return state;
    }
  };
  
  export default reducer;
  