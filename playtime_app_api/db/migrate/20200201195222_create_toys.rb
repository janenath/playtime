class CreateToys < ActiveRecord::Migration[6.0]
  def change
    create_table :toys do |t|
      t.string :name
      t.integer :price
      t.string :ageRange
      t.string :imageUrl
      t.string :link

      t.timestamps
    end
  end
end
