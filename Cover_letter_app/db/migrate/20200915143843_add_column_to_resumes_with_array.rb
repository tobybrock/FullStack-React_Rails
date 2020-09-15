class AddColumnToResumesWithArray < ActiveRecord::Migration[6.0]
  def change
    add_column :resumes, :project, :string, array: true, default: []
    add_column :resumes, :education, :string, array: true, default: []
    add_column :resumes, :experience, :string, array: true, default: []
  end
end
