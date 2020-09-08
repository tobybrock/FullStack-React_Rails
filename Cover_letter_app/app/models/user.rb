class User < ApplicationRecord
  has_secure_password
  has_many :resumes

  validates :email, uniqueness: { message: 'already exists'}
  validates :password, :name, :email, presence: true
end
