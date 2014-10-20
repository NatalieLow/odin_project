var isPrime = function(num){
    var i = 2;

    if(num > i){
        while(i <= Math.sqrt(num)){
            if(num % i === 0){
                return false
            }
            i += 1;
        }
        return true
    }
    else{
        return true
    }
}

var factors = function(num){
    var i = 2;
    var arrFactors = [];

    while(i <= Math.sqrt(num)){

    }

}

console.log(isPrime(1))
console.log(isPrime(5))
