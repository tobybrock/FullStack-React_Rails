class ChangeYearToString < ActiveRecord::Migration[6.0]
  def change
    change_column :resumes, :phone, :string
  end
end
