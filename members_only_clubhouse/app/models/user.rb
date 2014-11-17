class User < ActiveRecord::Base
  before_create :remember
  validates :name, presence: true

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, uniqueness: { case_sensitive: false }, presence: true, format: {:with => VALID_EMAIL_REGEX }
  has_secure_password

  def email= email
    super(email.downcase)
  end

  private
  def new_token
    SecureRandom.urlsafe_base64
  end

  def digest(string)
    BCrypt::Password.create(string)
  end

  def remember
    self.remember_token = digest(new_token)
  end
end
