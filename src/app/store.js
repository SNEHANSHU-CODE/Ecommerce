import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../pages/slice/cartSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage
import { combineReducers } from 'redux';

// Combine reducers (in case you add more in the future)
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store with middleware to handle non-serializable actions
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],
      },
    }),
});

// Export the persistor
export const persistor = persistStore(store);

