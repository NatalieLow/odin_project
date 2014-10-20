require 'rest-client'
url = "http://localhost:3000/users"
puts RestClient.get(url)
#puts "Enter a url"
#url = gets.chomp