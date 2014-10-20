var sumThreeFiveFactors = function(start){
    var num = start - 1;
    var sum = 0;

    while(num > 0){
        if(num % 3 === 0 || num % 5 === 0){
            sum += num;
        }
        num -= 1;
    }
    return sum
}

console.log(sumThreeFiveFactors(1000));