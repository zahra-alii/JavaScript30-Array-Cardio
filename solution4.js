// SOLUTION 4:
const totalYears = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    }, 0 )
    console.log(totalYears);

/* SOLUTION EXPLAINED:
- .reduce() gives you the total inventor years, CB takes in an accumulator + current val & loops over every element
// STEPS:
- create new variable 
- take the original object (inventors) and add .reduce 
- initial val = 0 (starting point) */
