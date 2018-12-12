import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

const rootReducer = combineReducers({
  entitites: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
})

export default rootReducer;
