import React from 'react';
import { PomodoroServiceConsumer } from '../pomodoro-service-context';

const withPomodoroService = () => (Wrapped) => {

  return (props) => {
    return (
      <PomodoroServiceConsumer>
        {
          (pomodoroService) => {
            return (<Wrapped {...props}
              pomodoroService={pomodoroService}/>);
          }
        }
      </PomodoroServiceConsumer>
    );
  }
}

export default withPomodoroService;