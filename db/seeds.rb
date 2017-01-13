# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#### USERS #####
user1 = User.create(first_name: 'Joe', last_name: 'Thomas',
                    username: 'joe-thomas', password: 'password')

user2 = User.create(first_name: 'guest', last_name: 'user',
                    username: 'guest_user', password: 'password')




#### BOOKS ####
book1 = Book.create(title: 'The Hobbit',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'hobbit-cover-688x1024_wbuwij',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')





book2 = Book.create(title: 'The Two Towers',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: '',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')

book2 = Book.create(title: 'The Fellowship of the Ring',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'ea81ba3426a4209bb7fe54c22801b877_d6exed',
                    description: 'temp')






#### BOOKSHELVES ####
bookshelf1 = Bookshelf.create(title: 'Fantasy', user_id: user2.id)
bookshelf2 = Bookshelf.create(title: 'Humor', user_id: user2.id)




#### SHELVINGS ####
shelving1 = Shelving.create(book_id: book1.id, bookshelf_id: bookshelf1.id)
