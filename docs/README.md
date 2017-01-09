# Biblio
[Heroku Link]()

## Minimum Viable Product
Biblio is a web application inspired from Goodreads, in which users
can catalogue and review books that they have read.

1. Hosting on Heroku
2. A production README, replacing this README
3. New account creation, login, and guest/demo login
4. Books
5. Bookshelves
6. Reviews
7. Read Status (will read, have read, etc.)

## Design Docs
* [View Wireframes](wireframes)
* [React Components](component-hierarchy.md)
* [API endpoints](api-endpoints.md)
* [DB schema](schema.md)
* [Sample State](sample-state.md)


## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (Day 1-2)

**Objective:** Functioning rails project with front-end Authentication.
Host site on Heroku.

### Phase 2: Bookshelves/Books Model, API, and components (Day 3-4)

**Objective:** When logged in, user will have a sidebar listing their
bookshelves. Each bookshelf will have a corresponding list of books.
Books and bookshelves can be added and deleted.

### Phase 3: Reviews Model, API, and components (Day 5)

**Objective:** Books can be reviewed. Books pages will have reviews listed
below them.

### Phase 4: Search (Day 6)

**Objective:** Books can be searched for by title or author.

### Phase 5: Improve UX (Day 7)

**objective:** Allow editing and creating new items to be streamlined
within the views.

### Phase 6: Styling (Day 8)

**objective:** Refactor styling for one final time, for polished looking
web application.

### Bonus Features
- Integrate API to get book cover for the user.
- Multiple viewing options for book lists.
- Book lists can be sorted with several options.
