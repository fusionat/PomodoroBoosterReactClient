export default class PomodoroStoreService {
  data = [
    {
      id: 1,
      name:
        "TomatoTimers is a Custom Pomodoro Timer featuring To-do List with animated Tomatoes to boost your productivity.",
      timerValue: "00:25:00",
      fullComplete: true
    },
    {
      id: 2,
      name:
        "TomatoTimer is a flexible and easy to use online Pomodoro Technique Timer.",
      timerValue: "00:25:00",
      fullComplete: true
    },
    {
      id: 3,
      name: "My tomato",
      timerValue: "00:25:00",
      fullComplete: false
    }
  ];

  getTomatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 2000);
    });
  };
}
