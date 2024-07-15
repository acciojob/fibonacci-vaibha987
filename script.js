function fibonacci(num) {
  if (num <= 1) {
    return num;
  } 
  let x = 0;
  let y = 1;
  
  for(let i = 2; i < num; i++) {
    let z = x + y;
    x = y;
    y = z;
  }
  return y;
}

module.exports = fibonacci;