// SOLUTION 6:
 const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? 1 : -1;
      });
      console.table(alpha);

/* EXPLAINED:
- create new variable that takes in a function w/ 2 arguments
- pass in the original object (people) and add the .sort method
- take in 2 new arrays & add the .split method
