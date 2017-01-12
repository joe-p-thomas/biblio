json.set! @bookshelf.id do
  json.partial! 'api/bookshelves/bookshelf', bookshelf: @bookshelf
end
