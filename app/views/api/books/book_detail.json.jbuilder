json.partial! 'api/books/book', book: @book
json.extract! @book, :user_id
