class User < ApplicationRecord
  has_many :resumes

  validates :email, uniqueness: { message: 'already exists'}
  validates :password, :password_digest, presence: true
end