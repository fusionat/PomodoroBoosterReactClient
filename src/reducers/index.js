const initialState = {
  pomodoros: [],
  tomatos: [],
  timerValue: "00:00:00",
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOMATOS_SUCCESS":
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

    default:
      return state;
  }
};

export default reducer;
