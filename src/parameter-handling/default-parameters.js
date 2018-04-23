function foo(a, b = 20, c = 30) {
  return a + b + c
}

// we expect this to be 60
console.log(foo(10))
