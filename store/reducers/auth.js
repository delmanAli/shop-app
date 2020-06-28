import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AL, setDidTryAl } from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  didTryAutoLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
        didTryAutoLogin: true
      };
    case SET_DID_TRY_AL:
      return {
        ...state,
        didiTryAutoLogin: true
      }
    case LOGOUT:
      return {
        initialState,
        didTryAutoLogin: true
      }
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId
    //   };
    default:
      return state;
  }
};
