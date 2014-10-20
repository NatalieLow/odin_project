var fibonacci = function(max){
    var fib_nums = [];
    var i = 1;
    var j = 2;
    var sum = 0;

    fib_nums.push(i);

    while(!(j>max)){
        fib_nums.push(j);
        var next_fib = i + j;
        i = j;
        j = next_fib;
    }


    for(var count = fib_nums.length; count--;){
        if(fib_nums[count] % 2 === 0){
            sum += fib_nums[count];
        }
    }
    return sum;
}

fibonacci(4000000)