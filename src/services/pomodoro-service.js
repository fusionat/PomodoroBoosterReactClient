export default class PomodoroStoreService {
  data = [
    {
      id: 1,
      name:
        "TomatoTimers is a Custom Pomodoro.",
      timerValue: "00:25:00",
      fullComplete: true
    },
    {
      id: 2,
      name:
        "TomatoTimer is a flexible.",
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
