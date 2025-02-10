// @ts-check
/** @param {string} str  */
function capitalize(str) {
	return str.slice(0, 1).toUpperCase() + str.slice(1)
}

/**
 * @param {string} str
 * @param {number} maxLen
 */
function ellipsis(str, maxLen) {
	if (str.length <= maxLen) return str
	const longestTruncRegEx = new RegExp(`^[^]{0,${maxLen - 1}}\\b`)
	const truncatedStr = str.match(longestTruncRegEx)?.[0] ?? ""
	return truncatedStr + "…"
}

/**
 * @param {string} strA
 * @param {string} strB
 */
function isContained(strA, strB) {
	return strA.length > strB.length ? strA.includes(strB) : strB.includes(strA)
}
