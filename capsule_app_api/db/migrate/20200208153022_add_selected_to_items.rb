class AddSelectedToItems < ActiveRecord::Migration[6.0]
  def change
    add_column :items, :selected, :boolean
  end
end
