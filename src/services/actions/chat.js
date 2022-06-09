// import { getDatabase, ref, child, get } from "firebase/database";

export const GET_CONTACTS_REQUEST = 'GET_CONTACTS_REQUEST';
export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';

// const dbRef = ref(getDatabase());

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

const getContacts = () => {
  return (dispatch) => {
    dispatch(contactsRequest())


  }
}