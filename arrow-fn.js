// @ts-check
/**
 * @template T
 * @param {T[]} arr
 * @param {(item: T) => boolean} predicate
 * @returns {T[]}
 */
const myFilter = (arr, predicate) => {
	/** @type {T[]} */
	const filtered = []
	for (const item of arr) {
		if (predicate(item)) {
			filtered.push(item)
		}
	}
	return filtered
}

const numbers = Array(5).fill(null).map((_, i) => i + 1)

const evenNumbers = myFilter(numbers, /* deno-fmt-ignore */ n => n%2 === 0)
console.log(evenNumbers)

const greaterThan3 = myFilter(numbers, /* deno-fmt-ignore */ n => n>3)
console.log(greaterThan3)
