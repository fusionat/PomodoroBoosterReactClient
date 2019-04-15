const initialState = {
  pomodoros: [],
  tomatos: [],
  currentTomato: {},
  timerValue: "00:00:00",
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOMATOS_REQUEST_SUCCESS":
      return {
        ...state,
        tomatos: action.payload,
        loading: true
      };

    case "TIMER_VALUE_UPDATED":
      return {
        ...state,
        timerValue: action.payload
      };

    case "NEW_TOMATO_STARTED":
      return {
        ...state,
        currentTomato: action.payload
      };

    case "TOMATO_ADDED_IN_LIST":
      let finishedTomato = state.currentTomato;
      finishedTomato.timerValue = state.timerValue;
      return {
        ...state,
        tomatos: [...state.tomatos, finishedTomato],
        currentTomato: {}
      };
      
    default:
      return state;
  }
};

export default reducer;
