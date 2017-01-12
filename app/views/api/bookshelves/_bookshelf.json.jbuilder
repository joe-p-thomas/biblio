json.set! @bookshelf.id do
  json.extract! @bookshelf, :id, :title
  json.books do
    json.array! @bookshelf.books.id
  end
end
