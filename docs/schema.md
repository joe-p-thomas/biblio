# Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
first_name      | string    | not null
last_name       | string    | not null
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author      | string    | not null
user_id     | integer   | not null
description | text      | not null
cover_url   | string    | not null

## bookshelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed, foreign key
title       | string    | not null

## shelvings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
book_id     | integer   | not null, foreign key
bookshelf_id| integer   | not null, indexed, foreign key

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, indexed, foreign key
book_id     | integer   | not null, indexed, foreign key
rating      | integer   | not null
body        | string    |
