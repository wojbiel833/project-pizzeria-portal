import shortid from 'shortid';

// selectors
export const getOrders = ({ orders }, listId) =>
  orders.filter(order => order.listId == listId);

// action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_ORDER = createActionName('ADD_ORDER');

// action creators
export const createActionAddOrder = payload => ({
  payload: { ...payload, id: shortid.generate() },
  type: ADD_ORDER,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_ORDER:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}
