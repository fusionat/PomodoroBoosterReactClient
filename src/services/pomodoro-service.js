
export default class PomodoroStoreService {

  getTomatos = () => {
    return [
      {
        id: 1,
        name: "TomatoTimers is a Custom Pomodoro Timer featuring To-do List with animated Tomatoes to boost your productivity.",
        description: "00:25:00",
        fullComplete: true
      },
      {
        id: 2,
        name: "TomatoTimer is a flexible and easy to use online Pomodoro Technique Timer.",
        description: "00:25:00",
        fullComplete: true
      },
      {
        id: 3,
        name: "My tomato",
        description: "00:25:00",
        fullComplete: false
      }
    ];
  }

}