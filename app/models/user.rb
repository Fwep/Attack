# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password
  # Rails validation to ensure username, email, session token, and password digest
  # exist
  validates :username, :email, :session_token, presence: true
  validates :password_digest, presence: {message: 'Password can\'t be blank'}
  # Rails validation to ensure username, email are unique
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
  end

  def new
    @user = User.new
  end

  def password=(password) # To hash the password for the user
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password) # Save the user from having to verify password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
