let rangeStart = 1
let rangeEnd = 100

const secretNumber = Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart

for (;;) {
	const guess = Math.round((rangeStart + rangeEnd) * 0.5)
	console.log(`C1: Is the number ${guess}?`)

	if (secretNumber > guess) {
		console.log("C2: No, it is bigger.")
		rangeStart = guess + 1
	} else if (secretNumber < guess) {
		console.log("C2: No, it is smaller.")
		rangeEnd = guess - 1
	} else {
		console.log("C2: You are correct!")
		break
	}

	console.log()
}
