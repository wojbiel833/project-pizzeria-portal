import { connect } from 'react-redux';
import Waiter from './Waiter';
import {
  getAll,
  fetchFromAPI,
  getLoadingState,
  fetchStatusFromAPI,
} from '../../../redux/tablesRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});
// w kontenerze komponentu Waiter, nowe powiązanie stanu z propsem, wykorzystujące stworzony thunk,

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchStatus: (id, status) => dispatch(fetchStatusFromAPI({ id, status })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
