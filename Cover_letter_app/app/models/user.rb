class User < ApplicationRecord
  has_secure_password
  has_many :resumes, dependent: :destroy

  validates :email, uniqueness: { message: 'already exists'}
  validates :password_digest, :name, :email, presence: true
end
