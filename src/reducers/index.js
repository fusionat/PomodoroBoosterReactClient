import timerStatus from "./../enums/timer-status";

const initialState = {
  tomatos: [],
  tomato: {
    name: "",
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
        ...state.tomato,
        timerValue: action.payload
      };
      return {
        ...state,
        tomato: newUpdated
      };

    case "TIMER_NAME_UPDATED":
      return {
        ...state,
        tomato: {
          ...state.tomato,
          name: action.payload
        }
      };

    case "NEW_TOMATO_STARTED":
      if (state.timerStatus === timerStatus.PAUSE) {
        return {
          ...state,
          timerStatus: timerStatus.START
        };
      }

      const newTomato = {
        ...state.tomato,
        id: parseInt(Math.random() * 100)
      };

      return {
        ...state,
        tomato: newTomato,
        timerStatus: timerStatus.START
      };

    case "NEW_TOMATO_PAUSED":
      return {
        ...state,
        timerStatus: timerStatus.PAUSE
      };

    case "NEW_TOMATO_STOPED":
      let finishedTomato = state.tomato;

      return {
        ...state,
        tomatos: [finishedTomato, ...state.tomatos],
        tomato: { timerValue: "00:00:00", name: "" },
        timerStatus: timerStatus.STOP
      };

    default:
      return state;
  }
};

export default reducer;
