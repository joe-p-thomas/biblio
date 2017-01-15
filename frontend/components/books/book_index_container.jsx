import { connect } from 'react-redux';
import BookIndex from './book_index';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  books: ownProps.books,
  title: ownProps.title
});

const mapDispatchToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
