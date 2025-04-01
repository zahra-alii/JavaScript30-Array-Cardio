// SOLUTION 1:
const fifteen = inventors.filter(function(inventor){
  if(inventor.year >= 1500 && inventor.year < 1600){
    return true;
  }
});
console.table(fifteen);
