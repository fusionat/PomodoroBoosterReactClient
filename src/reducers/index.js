const initialState = {
  pomodoros: [],
  tomatos: [],
  currentTomato: {
    timerValue: "00:00:00"
  },
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
      const newUpdated = { ...state.currentTomato, timerValue: action.payload };
      return {
        ...state,
        currentTomato: newUpdated
      };

    case "NEW_TOMATO_STARTED":
      const newTomato = {
        id: 4,
        name: action.payload,
        timerValue: "00:00:00"
      };
      return {
        ...state,
        currentTomato: newTomato
      };

    case "TOMATO_ADDED_IN_LIST":
      let finishedTomato = state.currentTomato;

      return {
        ...state,
        tomatos: [...state.tomatos, finishedTomato],
        currentTomato: { timerValue: "00:00:00" }
      };

    default:
      return state;
  }
};

export default reducer;
