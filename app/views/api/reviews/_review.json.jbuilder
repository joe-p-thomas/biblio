json.extract! review, :id, :rating, :body
json.set! :userName, "#{review.user.first_name} #{review.user.last_name}"
json.set! :bookId, review.book_id
