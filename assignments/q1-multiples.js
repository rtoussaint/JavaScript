function multiples (limit) {
	var counter = 0;
	for(var i = 0; i < limit; i++) {
		if(i%3 == 0){
			counter = counter + i;
		}
		else if(i%5 == 0){
			counter = counter + i;
		}
		else{
			counter = counter;
		}
		
	}
	return counter;

}
console.log(multiples(1));
console.log(multiples(10));
console.log(multiples(16));
