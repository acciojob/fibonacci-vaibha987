function fibonacci(num) {
  let x = 0;
  let y = 1;
  let z
  for(let i = 2; i <= num; i++) {
    let z = x + y;
    x = y;
    y = z;
  }

  return z
}

module.exports = fibonacci;