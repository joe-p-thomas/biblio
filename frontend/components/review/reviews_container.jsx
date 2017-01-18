import { connect } from 'react-redux';
import Reviews from './reviews';

const mapStateToProps = (state) => ({
  reviews: state.reviews,
  currentUser: state.session.currentUser,
  errors: state.formErrors
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
