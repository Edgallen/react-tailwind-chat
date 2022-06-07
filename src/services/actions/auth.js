export const SHOW_EMAIL_ERROR = 'SHOW_EMAIL_ERROR';
export const HIDE_EMAIL_ERROR = 'HIDE_EMAIL_ERROR';

export const SHOW_PASSWORD_ERROR = 'SHOW_PASSWORD_ERROR';
export const HIDE_PASSWORD_ERROR = 'HIDE_PASSWORD_ERROR';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESTORED_PASSWORD = 'RESTORED_PASSWORD';

export const showEmailError = (message) => {
  return {
    type: SHOW_EMAIL_ERROR,
    payload: message
  };
};

export const hideEmailError = () => {
  return {
    type: HIDE_EMAIL_ERROR
  };
};

export const showPasswordError = (message) => {
  return {
    type: SHOW_PASSWORD_ERROR,
    payload: message
  };
};

export const hidePasswordError = () => {
  return {
    type: HIDE_PASSWORD_ERROR
  };
};

export const forgotPassword = () => {
  return {
    type: FORGOT_PASSWORD
  };
};

export const restoredPassword = () => {
  return {
    type: RESTORED_PASSWORD
  };
};