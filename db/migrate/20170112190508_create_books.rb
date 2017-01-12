class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :books, [:title, :author], unique: true
    add_index :books, :title
    add_index :books, :author
  end
end
