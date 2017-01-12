json.extract! bookshelf, :id, :title
json.books do
  json.array! bookshelf.books.ids
end
