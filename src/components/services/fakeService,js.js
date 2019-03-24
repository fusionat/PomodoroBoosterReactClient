
export default class FakeService {
		pomodoros = [
				{
						id: 1,
						name: 'Learning Elglish',
						tomatoCount: 10,
						status: 'Active',
						createdAt: '10/1/2019',
						coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
				{
						id: 2,
						name: 'Reading Book',
						tomatoCount: 12,
						status: 'Active',
						createdAt: '10/1/2019',
						coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
				}
		];

		tomatos = [
				{},
				{}
		];

		getTomatos() {
				return new Promise((resolve, reject) => {
						setTimeout(() => {
								if (Math.random() > 0.75) {
										reject(new Error('Something bad happened'));
								} else {
										resolve(this.tomatos);
								}
						}, 20000);
				});
		}
		getPomodoros() {
				return new Promise((resolve, reject) => {
						setTimeout(() => {
								if (false) {
										reject(new Error('Something bad happened'));
								} else {
										resolve(this.pomodoros);
								}
						}, 2000);
				});
		}
}