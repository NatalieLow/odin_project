def insertion(array)
  i = 1
  j = nil

  until j == 0
    j = 0

    until i == array.length
      if array[i - 1] > array[i]
        array[i-1], array[i] = array[i], array[i-1]
        j += 1
      end
      i+=1
    end
    i = 1
  end
  array
end

#
#someNums = [1, 3, 4, 6, 2, 5, 3232, 53, 3]
#sorted_nums = insertion(someNums)
#puts "#{sorted_nums}"
#
#someWords = %w(this that more and for the love of god hey)
#sorted_words = insertion(someWords)
#puts "#{someWords}"


def fizz_buzz
  (1..100).each do |num|
    if num % 3 == 0 && num % 5 == 0
      puts "fizzbuzz"
    elsif num % 3 == 0
      puts "fizz"
    elsif num % 5 == 0
      puts "buzz"
    elsif
      puts num
    end
  end
end




puts fizz_buzz