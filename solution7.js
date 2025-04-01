// SOLUTION 7:
const transportation = data.reduce(function(obj, item){
  if(!obj[item]){
     obj[item] = 0;
  }
  obj[item]++
  return obj;
}, {});  // initial value/starting point = blank object
console.log(transportation);

/* EXPLAINED:
- create new var (transportation)
- set it equal to an object.method (.reduce)
- take in a CB function that takes in 2 items (obj = data, item = items inside data) */
