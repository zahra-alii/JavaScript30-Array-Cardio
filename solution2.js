// SOLUTION 2:
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

/* STEPS:
.map - takes in array, does something w array and returns new arr w/ same length
1) declare new variable (fullNames)
2) target objects w/ map we're targeting (in this case, inventors)
3) create a new array/variable (inventor) for map to take in
4) return inventors first + last names by using arr.method (inventor.first, inventor.last) */
  
