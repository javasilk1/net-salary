import {combineReducers, configureStore} from '@reduxjs/toolkit'
import bracketsReducer from "./BracketsSlice";
import storage from 'redux-persist/lib/storage'

import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';


const reducers = combineReducers<any>({
    bracketsTax: bracketsReducer,
});
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [""]
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
    }
})
export const persistor = persistStore(store)


export type RootState = ReturnType<typeof reducers>;

// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

