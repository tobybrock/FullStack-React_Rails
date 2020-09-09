class AddResumeIdToTable < ActiveRecord::Migration[6.0]
  def change
    add_column :resumes_projects, :resume_id, :integer
    add_column :resumes_educations, :resume_id, :integer
    add_column :resumes_experiences, :resume_id, :integer
  end
end
