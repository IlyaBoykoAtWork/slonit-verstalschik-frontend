// @ts-check
/**
 * @template T
 * @param {T[]} arr
 * @param {number} start
 * @param {number} end
 * @returns {T[]}
 */
function mySlice(arr, start, end) {
	start = Math.max(0, start < 0 ? start + arr.length : start)
	end = Math.min(arr.length, end < 0 ? end + arr.length : end)
	/** @type {T[]} */
	const newArr = []
	for (let i = start; i < end; i++) {
		newArr.push(arr[i])
	}
	return newArr
}

/**
 * @template T
 * @param {T[]} arr
 * @param {T} item
 * @param {number=} from
 * @returns {number}
 */
function myIndexOf(arr, item, from) {
	for (let i = from ?? 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return i
		}
	}
	return -1
}

/**
 * @template T
 * @param {T[]} arr
 * @param {T} item
 * @param {number=} from
 * @returns {boolean}
 */
function myIncludes(arr, item, from) {
	// return myIndexOf(arr, item, from) >= 0
	for (let i = from ?? 0; i < arr.length; i++) {
		if (arr[i] === item) {
			return true
		}
	}
	return false
}
