import { connect } from 'react-redux';
import Browse from './browse';

const MapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  books: state.books
});

const MapDispatchToProps = (dispatch) => ({
  
});
