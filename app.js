	function fizzBuzz(n){
	    let array = []

	    for(let i=1; i<=n; i++){
	   
	        let isDivisibleBy3 = i%3 == 0
	        let isDivisibleBy5 = i% 5==0
	        if( isDivisibleBy3 && isDivisibleBy5 ){
	         array.push('FizzBuzz')
	        }
	        else if(isDivisibleBy3){
	         array.push('fizz')
	        }
	        else if(isDivisibleBy5){
	         array.push('buzz')
	     
	        }
	        else{
	         array.push(i)
	        }
	        
	     }
	     return array

	}
	let result = fizzBuzz(15)
	console.log(result)
