/**
 * Helper Action creator function
 * @param {any}  type - type of action.
 * @param {any} payload - An optional param , key-value pairs for reducer
 */

export const createAction = (type: any, payload: any) => ({ type, payload });
