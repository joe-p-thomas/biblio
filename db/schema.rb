# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170112190508) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "author",      null: false
    t.text     "description", null: false
    t.string   "image_url",   null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "books", ["author"], name: "index_books_on_author", using: :btree
  add_index "books", ["title", "author"], name: "index_books_on_title_and_author", unique: true, using: :btree
  add_index "books", ["title"], name: "index_books_on_title", using: :btree

  create_table "bookshelves", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bookshelves", ["title", "user_id"], name: "index_bookshelves_on_title_and_user_id", unique: true, using: :btree
  add_index "bookshelves", ["user_id"], name: "index_bookshelves_on_user_id", using: :btree

  create_table "shelvings", force: :cascade do |t|
    t.integer  "book_id",      null: false
    t.integer  "bookshelf_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "shelvings", ["book_id", "bookshelf_id"], name: "index_shelvings_on_book_id_and_bookshelf_id", unique: true, using: :btree
  add_index "shelvings", ["book_id"], name: "index_shelvings_on_book_id", using: :btree
  add_index "shelvings", ["bookshelf_id"], name: "index_shelvings_on_bookshelf_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string "first_name",      null: false
    t.string "last_name",       null: false
    t.string "username",        null: false
    t.string "password_digest", null: false
    t.string "session_token",   null: false
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
