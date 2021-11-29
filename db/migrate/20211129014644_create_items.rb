class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.text :description, null: false
      
      t.timestamps null: false
    end
  end
end
