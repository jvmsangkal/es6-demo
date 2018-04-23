// old way
const obj = {
  foo: function(a, b) {
    console.log(a, b)
  }
}

// new way
const obj2 = {
  foo(a, b) {
    console.log(a, b)
  },
}
