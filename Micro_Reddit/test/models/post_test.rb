require 'test_helper'

class PostTest < ActiveSupport::TestCase
  def setup
    @post = Post.new(url: "https://wwww.website.com")
  end

  test "url validation should accept valid addresses" do
    valid_addresses = %w[http://www.roomandboard.com/catalog/kids/cribs-and-nursery/moda-crib
      http://www.japantimes.co.jp/news/2009/11/07/national/japanese-urls-no-big-deal/#.VEU_SovF9y8]
    valid_addresses.each do |valid_address|
      @post.url = valid_address
      assert @post.valid?, "#{valid_address} should be valid"
    end


  end

  test "url validation should reject invalid address" do
    invalid_addresses = %w[uroen you,for http://where www.mekong.com]
    invalid_addresses.each do |invalid_address|
      @post.url = invalid_address
      assert_not @post.valid?, "#{invalid_address} should be of the form: https://wwww.some_site.com"
    end
  end
end
