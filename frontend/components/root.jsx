import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import BrowseContainer from './browse/browse_container';
import BookshelfIndexContainer from './bookshelves/bookshelf_index_container';
import SearchResultsContainer from './search/search_results_container';
import BookDetailContainer from './books/book_detail_container';

const Root = ({store}) => {

  const ensureLogin = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={BrowseContainer}/>
          <Route path='/bookshelves' component={BookshelfIndexContainer}
                 onEnter={ensureLogin}/>
          <Route path='/search' component={SearchResultsContainer}/>
          <Route path='/book-detail/:id' component={BookDetailContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
