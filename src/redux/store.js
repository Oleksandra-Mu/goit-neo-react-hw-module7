import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import contactsSlice from "./contactsSlice";

import storage from "redux-persist/lib/storage";

const persistConfigContacts = {
  key: "contacts",
  storage,
};

const contactPersistedReducer = persistReducer(
  persistConfigContacts,
  contactsSlice
);

export const store = configureStore({
  reducer: {
    contacts: contactPersistedReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
