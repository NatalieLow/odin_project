def sumThreeFiveFactors(start)
  toSum = []
  num = start - 1

  while num > 0
    if num % 3 == 0 || num % 5 == 0
      toSum << num
    end
    num -= 1
  end

  toSum.inject(:+)

end



puts sumThreeFiveFactors(1000)