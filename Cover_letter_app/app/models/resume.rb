class Resume < ApplicationRecord
  belongs_to :user
  has_many :projects
  has_many :educations
  has_many :experiences
end