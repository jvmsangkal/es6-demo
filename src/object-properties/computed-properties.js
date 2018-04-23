
const a = 'new '
const b = 'property'

const obj = {
  foo: 'bar',
  [a + b]: 42,
}

// old way
var obj = { foo: 'bar' }
obj[a + b] = 42
