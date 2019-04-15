export default class PomodoroStoreService {
  data = [
    {
      id: 1,
      name:
        "Stay focus on TomatoProject.",
      timerValue: "00:25:00",
      fullComplete: true
    },
    {
      id: 2,
      name:
        "I'm refactoring!",
      timerValue: "00:17:00",
      fullComplete: true
    },
  ];

  getTomatos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 2000);
    });
  };
}
