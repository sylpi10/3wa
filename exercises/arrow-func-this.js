const CounterV1 = {
	count: 0,
	counter: function counter() {
		setInterval(() => {
			this.count++;
            if (this.count < 6) {
                console.log(this.count);
            }
		}, 1000);
	},
};
CounterV1.counter();