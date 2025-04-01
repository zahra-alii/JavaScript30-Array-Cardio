// SOLUTION 3:
const ordered = inventors.sort(function(a,b) {
    if(a.year > b.year){
      return 1;
    }else{
      return -1;
    }
  });
  console.table(ordered);


// Alternative with arrow func + ternary operator:
  const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1 );
  console.table(ordered);


/* SOLUTION EXPLAINATION/STEPS:
- sort gives you 2 items & you sort the 2 items 
- by returning 1 & -1, you get the older year before the younger year
// declare new variable (ordered) and use myObject.myMethod to assign it [inventors.sort]
// pass a CB func into the method
// Pass 2 arguments into the CB function (2 elements you want to sort/compare) - a,b [oldest-youngest elements]
