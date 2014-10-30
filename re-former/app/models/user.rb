class User < ActiveRecord::Base
  validates :email, :password, :username, presence: true
end
