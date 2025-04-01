// SOLUTION 5:
const oldest = inventors.sort((a,b) => {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
})

console.table(oldest);

/* SOLUTION EXPLAINED:
- .sort gives you 2 items & you sort the 2 items 
- by returning 1 & -1, you get one element on top of the other */

/* STEPS: 
- declare new variable 
- object.method that takes in CB function
- pass in 2 args in CB func (a,b)
- create 2 new variables (one for each element you're sorting)
- use the 2 args you passed and put them on the 2 properties/elements (year.passed - year)
- create conditionals for desired output  */
