function fibonacci(n) {
  
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

let fibNr = fibonacci(1000);
console.log(fibNr); 



