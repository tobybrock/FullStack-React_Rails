class AddUserIdToCreateResumes < ActiveRecord::Migration[6.0]
  def change
    add_column :resumes, :user_id, :integer
  end
end
