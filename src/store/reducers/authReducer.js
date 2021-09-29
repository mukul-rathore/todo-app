const initState = {
    authError: null,
  };
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN_ERROR':
        console.log('login error')
        return { ...state, authError: action.err };
  
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return { ...state, authError: null };
  
      case 'LOGOUT_SUCCESS':
        console.log('logout success')
        return { ...state, authError: null };
  
      case 'SIGNUP_SUCCESS':
        console.log("sucess")
        return { ...state, authError: null };
  
      case 'SIGNUP_ERROR':
        return { ...state, authError: action.err };
     
      case 'RESET_AUTH_ERROR':
        return { ...state, authError: null };
  
      default:
        return state;
    }
  };
  export default authReducer;
  