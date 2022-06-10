export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';

export const SET_UID = 'SET_UID';

export const contactsRequest = () => {
  return {
    type: GET_CONTACTS_REQUEST,
  }
}

export const contactsSuccess = (data) => {
  return {
    type: GET_CONTACTS_SUCCESS,
    payload: data
  }
}

export const setUid = (uid) => {
  return {
    type: SET_UID,
    payload: uid
  };
};