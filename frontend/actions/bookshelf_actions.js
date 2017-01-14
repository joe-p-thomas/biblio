import * as apiUtils from '../util/bookshelf_api_util';

export const RECEIVE_BOOKSHELVES = 'RECEIVE_BOOKSHELVES';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const REMOVE_BOOKSHELF = 'REMOVE_BOOKSHELF';
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';

export const receiveBookshelves = (bookshelves) => ({
  type: RECEIVE_BOOKSHELVES,
  bookshelves
});

export const receiveBookshelf = (bookshelf) => ({
  type: RECEIVE_BOOKSHELF,
  bookshelf
});

export const removeBookshelf = (bookshelf) => ({
  type: REMOVE_BOOKSHELF,
  bookshelf
});

export const receiveFormErrors = (errors) => ({
  type: RECEIVE_FORM_ERRORS,
  errors
});

export const requestBookshelves = () => (dispatch) => (
  apiUtils.fetchBookshelves().then(
    res => dispatch(receiveBookshelves(res))
  )
);

export const createBookshelf = (bookshelf) => (dispatch) => (
  apiUtils.createBookshelf(bookshelf).then(
    res => dispatch(receiveBookshelf(res)),
    err => dispatch(receiveFormErrors(err.responseJSON))
  )
);

export const updateBookshelf = (bookshelf) => (dispatch) => (
  apiUtils.updateBookshelf(bookshelf).then(
    res => dispatch(receiveBookshelf(res)),
    err => dispatch(receiveFormErrors(err.responseJSON))
  )
);

export const deleteBookshelf = (bookshelf) => (dispatch) => (
  apiUtils.deleteBookshelf(bookshelf).then(
    res => dispatch(removeBookshelf(bookshelf))
  )
);
