## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Header
    - SearchContainer
    - ProfileContainer

**ProfileContainer**
  - ProfileMenu

**SearchContainer**
  - SearchBar
  - DropDownSearchResults

**SearchResultsContainer**
  - NewBookContainer

**NewBookContainer**
  - NewBookForm

**BookshelfContainer**
  - Bookshelves
  - NewBookshelfForm
  - BookListContainer

**BookListContainer**
  - BookListItem

**BookDetailContainer**
  - BookDetail
  - NewReviewContainer
  - ReviewContainer

**ReviewContainer**
  - NewReviewContainer
  - ReviewList
    - ReviewListItem

**NewReviewContainer**
  - ReviewForm

## Routes

| Path                             | Component                |
|----------------------------------|--------------------------|
| "/sign-up"                       | "AuthFormContainer"      |
| "/sign-in"                       | "AuthFormContainer"      |
| "/home"                          | "HomeContainer"          |
| "/home/bookshelves/:bookshelfId" | "BookshelfContainer"     |
| "/home/book/:bookId"             | "BookDetailContainer"    |
| "home/new-book"                  | "NewBookContainer"       |
| "home/search-results"            | "SearchResultsContainer" |
