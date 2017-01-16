@reviews.each do |review|
  json.set! review.id do
    json.partial! 'api/reviews/review', book: book
  end
end
