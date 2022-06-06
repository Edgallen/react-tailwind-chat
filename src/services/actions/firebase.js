export const INITIALIZE_APP = 'initialize_app';

export function initialize(app) {
  return {
    type: INITIALIZE_APP,
    payload: app
  }
};