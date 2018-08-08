# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  bio             :text
#  country         :string
#  city            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  attr_reader :password
  before_save :ensure_profile_image

  has_many :casts
  has_one_attached :profile_image
  # has_one_attached :cover_image

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_profile_image
    unless self.profile_image.attached?
      self.profile_image.attach(io: File.open('app/assets/images/user_default.jpg'), filename: 'user_default.jpg')
    end
  end
end
