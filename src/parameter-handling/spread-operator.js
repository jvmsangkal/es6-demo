// usage in arrays
const minions = ['Bob', 'Stuart', 'Kevin']
const persons = ['Gru', 'Agnes']

function concatenateArrays(arr1, arr2) {
  return [...arr1, ...arr2]
}

console.log(concatenateArrays(minions, persons))


// usage in function calls
const nums = [1, 2, 3]
function getSum(a, b, c) {
  return a + b + c
}

console.log(getSum(...nums))


// usage in objects
const foo = {
  a: 1,
  b: 2,
}

const bar = {
  c: 3,
  d: 4,
}

console.log({
  ...foo,
  ...bar,
})

