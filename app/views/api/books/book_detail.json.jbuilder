json.partial! 'api/books/book', book: @book
json.extract! @book, :user_id
if @review
  json.set! :review do
    json.partial! 'api/reviews/review', review: @review
  end
else
  json.set! :review, nil
end
