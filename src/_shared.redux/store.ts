import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['volatile'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
