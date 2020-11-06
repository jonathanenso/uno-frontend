import { combineReducers } from 'redux';

import authentication from './authentication.reducer';
import registration from './registration.reducer';
import users from './users.reducer';
import alert from './alert.reducer';
import agencies from './agencies.reducer';
import careers from './career.reducer';
import matters from './matteer.reducer';
import clases from './clases.reducer';
import teachers from './teacher.reducer';
import logsEmail from './log.email.reducer';
const rootReducer = combineReducers({
	authentication,
	registration,
	users,
	alert,
	agencies,
	careers,
	matters,
	clases,
	teachers,
	logsEmail
});

export default rootReducer;