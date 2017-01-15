const RECEIVE_FORM_ERRORS = 'RECEIVE_FORM_ERRORS';

const FormErrorReducer = (state = {}, action)=> {
  switch (action.type) {
    case RECEIVE_FORM_ERRORS:
      return action.errors;
    default:
      return [];
  }
};

export default FormErrorReducer;
