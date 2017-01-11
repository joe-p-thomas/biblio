class CreateShelvings < ActiveRecord::Migration
  def change
    create_table :shelvings do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false

      t.timestamps null: false
    end

    add_index :shelvings, [:book_id, :bookshelf_id], unique: true
    add_index :shelvings, :book_id
    add_index :shelvings, :bookshelf_id

  end
end
