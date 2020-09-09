class RenameIncidentEvents < ActiveRecord::Migration[6.0]
  def change
    rename_table :resumes_experiences, :experiences
    rename_table :resumes_educations, :educations
    rename_table :resumes_projects, :projects
  end
end
