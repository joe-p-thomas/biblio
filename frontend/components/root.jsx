import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import BrowseContainer from './browse/browse_container';
import BookshelfIndexContainer from './bookshelves/bookshelf_index_container';
import SearchResultsContainer from './search/search_results_container';
import BookDetailContainer from './books/book_detail_container';
import NewBookContainer from './books/new_book_container';
import EditBookContainer from './books/edit_book_container';
import { requestUsersBooks, requestBookDetail } from '../actions/book_actions';
import { requestBookshelves } from '../actions/bookshelf_actions';

const Root = ({store}) => {

  const ensureLogin = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/');
    }
  };

  const requestDetail = (nextState, replace, cb) => {
    store.dispatch(requestBookDetail({id: nextState.params.id}))
      .then(store.dispatch(requestBookshelves()))
      .then(cb);
  };

  const requestEditDetail = (nextState, replace, cb) => {
    if (!store.getState().session.currentUser) {
      replace('/');
    } else {
      store.dispatch(requestBookDetail({id: nextState.params.id}))
        .then(cb);
    }
  };

  const requestShelves = (nextState, replace, cb) => {
    if (!store.getState().session.currentUser) {
      replace('/search');
    } else {
      store.dispatch(requestUsersBooks())
      .then(store.dispatch(requestBookshelves()))
      .then(cb);
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={BrowseContainer}/>
          <Route path='/bookshelves' component={BookshelfIndexContainer}
                 onEnter={requestShelves}/>
          <Route path='/search' component={SearchResultsContainer}/>
          <Route path='/book-detail/:id' component={BookDetailContainer}
                 onEnter={requestDetail}/>
          <Route path='/new-book' component={NewBookContainer}
                 onEnter={ensureLogin}/>
          <Route path='/edit-book/:id' component={EditBookContainer}
                 onEnter={requestEditDetail}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
