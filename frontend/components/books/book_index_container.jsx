import { connect } from 'react-redux';
import BookIndex from './book_index';

const mapStateToProps = (state, ownProps) => ({
  books: ownProps.books
});

const mapDispatchToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
