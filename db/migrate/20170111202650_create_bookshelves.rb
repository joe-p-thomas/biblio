class CreateBookshelves < ActiveRecord::Migration
  def change
    create_table :bookshelves do |t|
      t.string :title, null: false
      t.integer :user_id, nulll: false

      t.timestamps null: false
    end

    add_index :bookshelves, [:title, :user_id], unique: true
    add_index :bookshelves, :user_id
  end
end
