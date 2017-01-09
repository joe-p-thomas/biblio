{
  currentUser: {
    id: 1,
    firstName: Joe,
    lastName: Thomas,
    username: joe-p-thomas,
    bookShelves: [
      {
        id: 1,
        name: Fiction,
        bookIds: [1]
      },
      ...
    ],
    errors: []
  },
  books: {
    1: {
      id: 1,
      title: The Hobbit,
      author: J.R.R. Tolkien
    },
    ...
  },
  reviews: {
    1: {
      id: 1,
      bookId: 1,
      userId: 1,
      rating: 5,
      body: ''
    },
    ...
  },
  forms: {
    book: {errors: []},
    review: {errors: []}
  }
}
