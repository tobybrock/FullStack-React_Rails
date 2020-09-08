class CreateResumesExperience < ActiveRecord::Migration[6.0]
  def change
    create_table :resumes_experiences do |t|
      t.string :organisation
      t.string :position
      t.string :duration
      t.string :desc
    end
  end
end
