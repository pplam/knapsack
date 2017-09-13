# knapsack
An algorithm to solve the knapsack problem

## Usage
~~~shell
git clone https://github.com/pplam/knapsack.git
~~~

~~~javascript
const knapsack = require('./knapsack')

const amounts = [2, 3, 4, 5]
const weights = [1, 3, 2, 2]
const values = [2, 4, 3, 3]
const capacity = 10

const solutions = knapsack(amounts, weights, values, capacity)
~~~

This gives all `solutions` as:
~~~javascript
[ [ [ 2, 0, 0, 4 ], 10, 16 ],
  [ [ 2, 0, 1, 3 ], 10, 16 ],
  [ [ 2, 0, 2, 2 ], 10, 16 ],
  [ [ 2, 0, 3, 1 ], 10, 16 ],
  [ [ 2, 0, 4, 0 ], 10, 16 ] ]
~~~
Each item in this array is a solution, each solution is given as `[amount, weight, value]`. Where `amount` is an array of amount of each object in this solution respectively, `weight` is total weight of these objects and `value` is their total value.

## Contribution
Any better solution is welcome, please mail me at shiwen.l.ating@gmail.com, or create a pull request. Thks!
