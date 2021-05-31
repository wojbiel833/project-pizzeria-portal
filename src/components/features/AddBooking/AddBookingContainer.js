import { connect } from 'react-redux';
import AddBooking from './AddBooking';
import {
  getAll,
  fetchReservationsFromAPI,
  getLoadingState,
  // fetchStatusFromAPI,
} from '../../../redux/reservationsRedux';

const mapStateToProps = state => ({
  reservations: getAll(state),
  loading: getLoadingState(state),
});
// w kontenerze komponentu Waiter, nowe powiązanie stanu z propsem, wykorzystujące stworzony thunk,

const mapDispatchToProps = dispatch => ({
  fetchReservations: () => dispatch(fetchReservationsFromAPI()),
  // fetchStatus: (id, status) => dispatch(fetchStatusFromAPI({ id, status })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBooking);
