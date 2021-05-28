import { connect } from 'react-redux';
import Waiter from './Waiter';
import {
  getAll,
  fetchFromAPI,
  getLoadingState,
  getTableStatus,
  fetchStatusFromAPI,
} from '../../../redux/tablesRedux';

const mapStateToProps = state => ({
  tables: getAll(state),
  loading: getLoadingState(state),
  status: getTableStatus(state),
});
// w kontenerze komponentu Waiter, nowe powiązanie stanu z propsem, wykorzystujące stworzony thunk,

const mapDispatchToProps = dispatch => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  fetchStatus: () => dispatch(fetchStatusFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
