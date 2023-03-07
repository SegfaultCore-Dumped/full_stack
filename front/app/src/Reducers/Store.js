import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import authReducer from './AuthReducer';

const rootReducer = combineReducers({ authReducer });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const Store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
export const Persistor = persistStore(Store);
