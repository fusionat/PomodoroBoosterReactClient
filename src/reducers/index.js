import timerStatus from "./../enums/timer-status";

const initialState = {
  tomatos: [],
  currentTomato: {
    timerValue: "00:00:00"
  },
  loading: false,
  timerStatus: timerStatus.STOP
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
      const newUpdated = {
        ...state.currentTomato,
        timerValue: action.payload
      };
      return {
        ...state,
        currentTomato: newUpdated
      };

    case "NEW_TOMATO_STARTED":
      if (state.timerStatus === timerStatus.PAUSE) {
        return {
          ...state,
          timerStatus: timerStatus.START
        };
      }
      
      const newTomato = {
        id: 4,
        name: action.payload,
        timerValue: "00:00:00"
      };
      return {
        ...state,
        currentTomato: newTomato,
        timerStatus: timerStatus.START
      };

    case "NEW_TOMATO_PAUSED":
      return {
        ...state,
        timerStatus: timerStatus.PAUSE
      };

    case "NEW_TOMATO_STOPED":
      let finishedTomato = state.currentTomato;

      return {
        ...state,
        tomatos: [finishedTomato, ...state.tomatos],
        currentTomato: { timerValue: "00:00:00" },
        timerStatus: timerStatus.STOP
      };

    default:
      return state;
  }
};

export default reducer;
