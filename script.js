// your code here
function fibonacci(num) {
let a=0
let b=1
let c=0
    if(num==1){
     return 0
    }
    else if(num==2){
        return 1
    }
    else{
     for(let i=3;i<=num;i++){
	c=a+b
	a=b
	b=c
}
	return c
    }
}

fibonacci(5)