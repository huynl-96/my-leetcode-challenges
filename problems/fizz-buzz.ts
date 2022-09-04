/**
 * The straight-forward approach
 *
 * @param {number} n
 * @return {Array<string>}
 * @see https://leetcode.com/problems/fizz-buzz/
 * @see https://leetcode.com/submissions/detail/791466851/
 *
 * Runtime: 77 ms, faster than 92.35% of TypeScript online submissions for Fizz Buzz.
 * Memory Usage: 44.7 MB, less than 91.34% of TypeScript online submissions for Fizz Buzz.
 */
export function fizzBuzz1(n: number): Array<string> {
  return Array.from({length: n}, (_, i) => i + 1).map((i) => {
    if (i % 3 === 0 && i % 5 === 0) return 'FizzBuzz';
    if (i % 3 === 0) return 'Fizz';
    if (i % 5 === 0) return 'Buzz';
    return `${i}`;
  });
}

// console.log(fizzBuzz1(3))
// console.log(fizzBuzz1(5))
// console.log(fizzBuzz1(15))

/**
 * The dynamic approach
 */
export function fizzBuzz2(n: number, dict: Record<number, string> = {
  3: 'Fizz',
  5: 'Buzz',
}): Array<string> {
  return Array.from(
    { length: n },
    (_, i) => Object.keys(dict)
      .map(key => (i + 1) % Number(key) === 0 ? dict[Number(key)] : '')
      .join('')
      || `${i + 1}`
  )
}

// console.log(fizzBuzz2(3))
// console.log(fizzBuzz2(5))
// console.log(fizzBuzz2(15))
