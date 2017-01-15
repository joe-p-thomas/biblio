# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#### USERS #####
# Master Account
user1 = User.create(first_name: 'Joe', last_name: 'Thomas',
                    username: 'joe-thomas', password: 'password')
# Guest User
user2 = User.create(first_name: 'guest', last_name: 'user',
                    username: 'guest_user', password: 'password')




#### BOOKS ####
## Fantasy ##
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

book3 = Book.create(title: 'The Two Towers',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'eee4b31031637cd20d984c4146500ebf_bjt3ig',
                    description: 'temp')

book4 = Book.create(title: 'The Return of the King',
                    author: 'J.R.R. Tolkien',
                    user_id: 1,
                    image_url: 'Return_20of_20the_20King_sipblx',
                    description: 'temp')

book5 = Book.create(title: 'A Game of Thrones',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'latest_g2dwmd',
                    description: 'temp')

book6 = Book.create(title: 'A Clash of Kings',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'clash_of_kings_i796qv',
                    description: 'temp')

book7 = Book.create(title: 'A Storm of Swords',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'A-Storm-of-Swords_ogpk99',
                    description: 'temp')

book8 = Book.create(title: 'A Feast for Crows',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: 'AFeastForCrows_hcdchw',
                    description: 'temp')

book9 = Book.create(title: 'A Dance with Dragons',
                    author: 'George R.R. Martin',
                    user_id: 1,
                    image_url: '6618aa0653da0c28411454128b52a8d7_s75yt0',
                    description: 'temp')

## Science Fiction ##
book10 = Book.create(title: 'Stranger in a Strange Land',
                   author: 'Robert A Heinlein',
                   user_id: 1,
                   image_url: 'stranger_ina_strange_land._oljloy',
                   description: 'temp')

book11 = Book.create(title: 'Dune',
                   author: 'Frank Herbert',
                   user_id: 1,
                   image_url: '41shWIN_2BssL_tybesv',
                   description: 'temp')








#### BOOKSHELVES ####
bookshelf1 = Bookshelf.create(title: 'Fantasy', user_id: user2.id)
bookshelf2 = Bookshelf.create(title: 'Science Fiction', user_id: user2.id)




#### SHELVINGS ####
Shelving.create(book_id: book1.id, bookshelf_id: 3)
Shelving.create(book_id: book2.id, bookshelf_id: 3)
Shelving.create(book_id: book3.id, bookshelf_id: 3)
Shelving.create(book_id: book4.id, bookshelf_id: 3)
Shelving.create(book_id: book5.id, bookshelf_id: 3)
Shelving.create(book_id: book6.id, bookshelf_id: 3)
Shelving.create(book_id: book7.id, bookshelf_id: 3)
Shelving.create(book_id: book8.id, bookshelf_id: 3)

shelving1 = Shelving.create(book_id: book1.id, bookshelf_id: bookshelf1.id)
shelving2 = Shelving.create(book_id: book2.id, bookshelf_id: bookshelf1.id)
shelving3 = Shelving.create(book_id: book3.id, bookshelf_id: bookshelf1.id)
shelving4 = Shelving.create(book_id: book4.id, bookshelf_id: bookshelf1.id)
shelving5 = Shelving.create(book_id: book5.id, bookshelf_id: bookshelf1.id)
shelving6 = Shelving.create(book_id: book6.id, bookshelf_id: bookshelf1.id)

shelving7 = Shelving.create(book_id: book10.id, bookshelf_id: bookshelf2.id)
shelving8 = Shelving.create(book_id: book11.id, bookshelf_id: bookshelf2.id)
