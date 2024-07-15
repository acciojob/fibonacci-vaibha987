function fibonacci(num) {
// your code here
	   let x=0;
		let y=1;
    for(let i=2;i<=num;i++) {
		let z=x+y
		 x=y
		 y=z	 
	}
	 if (num === 0 || num === 1) {
    return x;
  } else {
    return y;
  }
}
}

module.exports = fibonacci;
