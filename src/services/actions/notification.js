export const SHOW_NOTIFICATION = 'show_notification';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const showNotification = () => {
  return {
    type: SHOW_NOTIFICATION
  }
}

export const hideNotification = () => {
  return {
    type: HIDE_NOTIFICATION
  }
}