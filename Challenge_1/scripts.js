const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below``

const  first  = data.lists[0]
const  second  = data.lists[1]
const third  = data.lists[2]
console.log(first, second, third)

const result = []

const extractBiggest = () => {
	if (first[1] > second[1]) {
		return first
	}

	if (third[1] < 1) {
		return second
	}
	
	return result
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)







// // scripts.js

// const data = {
//     lists: [
//         ['first', [15, 11, 13, 7, 5]],
//         ['second', [2, 6, 8, 4, 14, 12, 10]],
//         ['third', [9, 3, 1]],
//     ]
// }

// // Only edit below

// const first = data.lists['first']
// const second = data.lists['second']
// const third = data.lists['third']

// const result = []

//     const extractBiggest = () => {
//         if ('first'[1]> 'second'[1]) {
//             return 'first'
//         }

//         if ('third'[2] < 1) {
//             return 'second'
//         }

//         return result
//     }

// // Only edit above

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())
// result.push(extractBiggest())

// console.log(result)