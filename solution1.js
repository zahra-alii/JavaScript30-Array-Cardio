// SOLUTION 1:
const fifteen = inventors.filter(function(inventor){
  if(inventor.year >= 1500 && inventor.year < 1600){
    return true;
  }
});
console.table(fifteen);

/* SOLUTION EXPLAINED:
- CB function takes in new variable/object (inventor)
- create conditions to target inventors born in 1500s using myObject.myMethod(inventor.year) */

// Alternative with arrow function: 
const  fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(fifteen);
