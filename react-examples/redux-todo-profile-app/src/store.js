import { createStore } from 'redux'; // Corrected import
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store;
