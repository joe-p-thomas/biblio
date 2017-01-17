import * as apiUtils from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const RECEIVE_BOOK_DETAIL = 'RECEIVE_BOOK_DETAIL';
export const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';

export const receiveBooks = ( books ) => ({
  type: RECEIVE_BOOKS,
  books
});

export const receiveBook = ( book ) => ({
  type: RECEIVE_BOOK,
  book
});

export const receiveBookDetail = (book) => ({
  type: RECEIVE_BOOK_DETAIL,
  book
});

export const removeBook = ( book ) => ({
  type: REMOVE_BOOK,
  book
});

export const receiveFormErrors = (errors) => ({
  type: RECEIVE_FORM_ERRORS,
  errors
});

export const requestBooks = () => ( dispatch ) => (
  apiUtils.fetchBooks().then(
    res => dispatch(receiveBooks(res))
  )
);

export const requestUsersBooks = () => ( dispatch ) => (
  apiUtils.fetchUsersBooks().then(
    res => dispatch(receiveBooks(res))
  )
);

export const requestBooksByParams = (params) => (dispatch) => (
  apiUtils.fetchBooksByParams(params).then(
    res => {
      dispatch(receiveBooks(res));
    }
  )
);

export const requestBook = (book) => (dispatch) => (
  apiUtils.fetchBook(book).then(
    res => dispatch(receiveBook(res))
  )
);

export const requestBookDetail = (book) => (dispatch) => (
  apiUtils.fetchBookDetail(book).then(
    res => dispatch(receiveBookDetail(res))
  )
);

export const createBook = (book) => (dispatch) => (
  apiUtils.createBook(book).then(
    res => {
      dispatch(receiveBook(res));
      dispatch(receiveFormErrors([]));
      return res;
    },
    err => dispatch(receiveFormErrors(err.responseJSON))
  )
);

export const updateBook = (book) => (dispatch) => (
  apiUtils.updateBook(book).then(
    res => {
      dispatch(receiveBook(res));
      dispatch(receiveFormErrors([]));
      return res;
    },
    err => receiveFormErrors(err.responseJSON)
  )
);

export const deleteBook = (book) => (dispatch) => (
  apiUtils.deleteBook(book).then(
    res => dispatch(removeBook(book)),
    err => dispatch(receiveFormErrors(err.responseJSON))
  )
);
