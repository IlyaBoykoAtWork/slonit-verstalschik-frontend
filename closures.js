function createLogger() {
	const logs = []
	return {
		log(message) {
			logs.push(message)
		},

		getLogs() {
			return logs
		},
	}
}

const createRandomGenerator = (min, max) => () => Math.random() * (max - min) + min
