const evens = [0, 2, 4, 6, 8, 10]

// old way
let odds = evens.map(function getOdd(n) {
  return n + 1
})

// new way
odds = odds.map(n => n + 1)
const sum = evens.reduce((a, b) => a + b)

// Lexical this
const bob = {
  name: 'Bob',
  friends: ['Stuart', 'Kevin'],
  printFriends() {
    this.friends.forEach(f => console.log(`${this.name} knows ${f}`))
  },
}

bob.printFriends()
