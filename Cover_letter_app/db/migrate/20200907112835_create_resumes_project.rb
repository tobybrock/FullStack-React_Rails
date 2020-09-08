class CreateResumesProject < ActiveRecord::Migration[6.0]
  def change
    create_table :resumes_projects do |t|
      t.string :title
      t.string :link
      t.string :desc
    end
  end
end
