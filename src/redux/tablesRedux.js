import Axios from 'axios';
import { api } from '../components/settings';
/* selectors */
export const getAll = ({ tables }) => tables.data;
export const getLoadingState = ({ tables }) => tables.loading;
export const getTableId = ({ tables }) => tables.data.id;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
// nowy typ...
const FETCH_STATUS = createActionName('FETCH_STATUS');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
// ...i kreator akcji, odpowiedzialne za aktualizację statusu pojedynczego stolika
export const fetchStatus = payload => ({ payload, type: FETCH_STATUS });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
// nowy thunk, który zapisze odpowiednie zmiany w API, a po otrzymaniu odpowiedzi zaktualizuje stan aplikacji,
export const fetchStatusFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios.get(`${api.url}/api/${api.tables}`)
      .then(res => {
        dispatch(fetchStatus(res.status));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_STATUS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        status: action.payload,
      };
    }
    default:
      return statePart;
  }
}
