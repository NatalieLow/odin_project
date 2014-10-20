def evenFibonacciSum(max)
  i = 1
  j = 2
  fibonacci = []
  fibonacci << i
  sum = 0

  while !(j > max)
    fibonacci << j
    next_fib = i + j
    i = j
    j = next_fib
  end


  fibonacci.each do |fib_num|
    if fib_num % 2 == 0
      sum += fib_num
    end
  end

  sum
end

puts evenFibonacciSum(4000000)