const fib = (i,j) => {
   while (i < 18000000000) {
       console.log(i);
       return fib(j, i+j);
    }
}

fib(1,1);

