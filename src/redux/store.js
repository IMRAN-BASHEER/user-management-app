// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'; // Import saga middleware
import userReducer from './slices/userSlice'; // Import your user slice
import rootSaga from './sagas'; // Import your rootSaga

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Pass middleware as a callback function
});

// Run the rootSaga
sagaMiddleware.run(rootSaga);

export default store;
