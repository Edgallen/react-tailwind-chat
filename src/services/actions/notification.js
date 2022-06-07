export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const showNotification = (data) => {
  return {
    type: SHOW_NOTIFICATION,
    payload: data
  }
}

export const hideNotification = () => {
  return {
    type: HIDE_NOTIFICATION
  }
}