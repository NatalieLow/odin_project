def maxPrimeFactor(num)
  num_factors = factors(num)
  prime_factors = []
  puts "num factors #{num_factors}"

  num_factors.each do |num|
    if isPrime(num)
      prime_factors << num
    end
  end
  puts "prime factors #{prime_factors}"

  if prime_factors != []
    return prime_factors.max
  else
    puts "no prime factors"
  end

end

def factors(num)
  factor_arr = []
  i = 2

  while i <= Math.sqrt(num).floor
    if num % i == 0
      pair = num / i
      factor_arr << i << pair
    end
    i += 1
  end
  factor_arr
end

def isPrime(num)
  if num > 2
    count = 2
    while count <= Math.sqrt(num).floor
      if num % count == 0
        return false
      end
      count += 1
    end
    return true
  else
    return true
  end

end

puts "#{maxPrimeFactor(600851475143)}"

#puts isPrime(4)