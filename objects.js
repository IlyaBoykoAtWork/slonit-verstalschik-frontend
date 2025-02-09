// @ts-check
/**
 * @param {Record<any, unknown>} obj
 */
const sumOfNumberFields = (obj) =>
	Object
		.values(obj)
		.reduce(
			/** @param {number} sum */
			(sum, value) => sum + (typeof value === "number" ? value : 0),
			0,
		)

/**
 * @param {Record<any, unknown>} obj
 */
const namesOfNumberFields = (obj) =>
	/** @type {[string, number][]} */
	(Object
		.entries(obj)
		.filter(([, v]) => typeof v === "number"))
		.sort(([, a], [, b]) => b - a)
		.map(([k]) => k)

const testObject = { name: "Vasya", friends: 5, likes: 19, projects: 7 }
console.log(sumOfNumberFields(testObject))
console.log(namesOfNumberFields(testObject))
