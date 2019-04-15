const tomatosLoaded = tomatos => {
  return {
    type: "FETCH_TOMATOS_SUCCESS",
    payload: tomatos
  };
};

const timerValueUpdated = timerValue => {
  return {
    type: "TIMER_VALUE_UPDATED",
    payload: timerValue
  };
};


export { tomatosLoaded, timerValueUpdated };
