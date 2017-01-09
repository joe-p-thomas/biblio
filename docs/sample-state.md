```
{
  session: {
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
      books: [
        {
          id: 2
          title: The Fellowship of the Ring
          author: J.R.R. Tolkien
        },
        ...
      ],
      reviews: {
        2: {
          id: 1,
          bookId: 2,
          rating: 5,
          body: 'Great Book'
        }
      }
    },
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
      userId: 2,
      rating: 5,
      body: ''
    },
    ...
  },
  forms: {
    errors: []
  }
}
```
