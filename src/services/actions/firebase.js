export const INITIALIZE_APP = 'INITIALIZE_APP';

export function initialize(app) {
  return {
    type: INITIALIZE_APP,
    payload: app
  }
};