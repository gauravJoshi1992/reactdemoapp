import {combineReducers} from 'redux';
import UserReducer from './user.reducer';
import RefrigeratorReducer from './refrigerator.reducer';
import ActiveUserReducer from './active.user.reducer';
import TelevisionReducer from './television.reducer';
import MobileReducer from './mobile.reducer';

const allReducers = combineReducers({
	activeUser: ActiveUserReducer,
	mobile: MobileReducer,
	refrigerator: RefrigeratorReducer,
	television: TelevisionReducer,
	user: UserReducer,
});

export default allReducers;
