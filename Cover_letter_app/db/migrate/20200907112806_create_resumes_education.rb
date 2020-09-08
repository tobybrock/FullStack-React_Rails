class CreateResumesEducation < ActiveRecord::Migration[6.0]
  def change
    create_table :resumes_educations do |t|
      t.string :institution
      t.date :year
      t.string :qualification
      t.string :desc
    end
  end
end
