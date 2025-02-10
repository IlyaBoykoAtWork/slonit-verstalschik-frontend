const operations = {
	"+": (a, b) => a + b,
	"*": (a, b) => a * b,
	"-": (a, b) => a - b,
	"/": (a, b) => a / b,
}

const getRandomOperation = () => {
	const pool = Object.keys(operations)
	return pool[Math.floor(Math.random() * pool.length)]
}

const getRandomNumber = function () {
	return Math.floor(Math.random() * 100 - 50) / 10
}

for (let i = 0; i < 10; i++) {
	const n1 = getRandomNumber()
	const n2 = getRandomNumber()
	const operation = getRandomOperation()
	const result = operations[operation](n1, n2)

	console.log(`${n1} ${operation} ${n2} = ${result}`)
}
