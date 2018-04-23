const [a, , b] = [1, 2, 3]

// 1 3
console.log(a, b)

const person = {
  name: 'Bob',
  age: 12,
}

// declaring new variables
const { name } = person
console.log(name)


// destructuring in function parameters
function printAge({ age }) {
  console.log(age)
}
printAge(person)

function printAge2({ age: x }) {
  console.log(x)
}
printAge2(person)
