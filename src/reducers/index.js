
const initialState = {
    pomodoros: [],
    tomatos: []
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {      
      case 'TOMATOS_LOADED': 
        return {
          ...state, tomatos: action.payload
        } 

      default:
        return state;
    }
  };
  
  export default reducer;
  