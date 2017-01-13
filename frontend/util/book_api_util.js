export const fetchBooks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/books'
  })
);

export const fetchUsersBooks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/books/users_books'
  })
);

export const fetchBooksByParams = (params) => (
  $.ajax({
    method: 'GET',
    url: 'api/books/search',
    data: {params}
  })
);

export const fetchBook = (book) => (
  $.ajax({
    method: 'GET',
    url: `api/books/${book.id}`
  })
);

export const createBook = (book) => (
  $.ajax({
    method: 'POST',
    url: 'api/books',
    data: {book}
  })
);

export const updateBook = (book) => (
  $.ajax({
    method: 'PATCH',
    url: `api/books/${book.id}`,
    data: {book}
  })
);

export const deleteBook = (book) => (
  $.ajax({
    method: 'DELETE',
    url: `api/books/${book.id}`
  })
);
