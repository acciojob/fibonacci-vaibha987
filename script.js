function fibonacci(num) {
  let x = 0;
  let y = 1;
  
  for(let i = 2; i <= num; i++) {
    let z = x + y;
    x = y;
    y = z;
  }

  return num === 0 ? x : y;
}

module.exports = fibonacci;