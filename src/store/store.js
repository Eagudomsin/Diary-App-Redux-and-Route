import { configureStore } from '@reduxjs/toolkit';

import myReducer from './mySlice';

const store = configureStore({
  reducer: { mydiary: myReducer },
});

export default store;
