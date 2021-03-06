class User < ActiveRecord::Base
  validates :first_name, :last_name, :username,
            :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  after_save :build_default_shelves

  has_many :bookshelves
  has_many :books, through: :bookshelves
  has_many :reviews

  attr_reader :password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def build_default_shelves
    Bookshelf.create(title: 'Read', user_id: self.id)
    Bookshelf.create(title: 'Will Read', user_id: self.id)
    true
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

end
