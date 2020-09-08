class CreateResumes < ActiveRecord::Migration[6.0]
  def change
    create_table :resumes do |t|
      t.string :name
      t.integer :phone
      t.string :linkedin
      t.string :github
      t.string :skills
      t.string :experience
      t.string :education
      t.string :project
      t.string :references
    end
  end
end
