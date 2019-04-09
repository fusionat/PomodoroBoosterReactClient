import React from 'react';

const {
  Provider: PomodoroServiceProvider,
  Consumer: PomodoroServiceConsumer
} = React.createContext();

export {
  PomodoroServiceProvider,
  PomodoroServiceConsumer
};
