import {combineReducers} from 'redux';
import UserReducers from './user.reducers';
import RefrigeratorReducers from './refrigerator.reducers';
import ActiveUserReducers from './active.user.reducers';
import TelevisionReducers from './television.reducers';

const allReducers = combineReducers({
	activeUser: ActiveUserReducers,
	refrigerator: RefrigeratorReducers,
	television: TelevisionReducers,
	user: UserReducers,
});

export default allReducers;
