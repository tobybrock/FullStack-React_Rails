class ChangeYearToInteger < ActiveRecord::Migration[6.0]
  def change
    remove_column :educations, :year
    add_column :educations, :year, :integer
  end
end
