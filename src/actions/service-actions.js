const tomatosLoaded = tomatos => {
  return {
    type: "FETCH_TOMATOS_REQUEST_SUCCESS",
    payload: tomatos
  };
};

const timerValueUpdated = timerValue => {
  return {
    type: "TIMER_VALUE_UPDATED",
    payload: timerValue
  };
};
const newTomatoStarted = newTomatoName => {
  return {
    type: "NEW_TOMATO_STARTED",
    payload: newTomatoName
  };
};

const newTomatoPaused= () => {
  return {
    type: "NEW_TOMATO_PAUSED"
  };
};


const newTomatoStoped = () => {
  return {
    type: "NEW_TOMATO_STOPED"
  };
};

export {
  tomatosLoaded,
  timerValueUpdated,
  newTomatoStarted,
  newTomatoPaused,
  newTomatoStoped,
};
