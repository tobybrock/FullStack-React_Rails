class ChangeResumeTables < ActiveRecord::Migration[6.0]
  def change
    remove_column :resumes, :education, :string
    remove_column :resumes, :project, :string
    remove_column :resumes, :experience, :string
  end
end
