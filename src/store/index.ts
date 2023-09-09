import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./reducer";
import thunk from "redux-thunk";

import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  middleware: [thunk],
};

const persistedReducer = persistReducer(persistConfig as any, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persister = persistStore(store);

export { store, persister };