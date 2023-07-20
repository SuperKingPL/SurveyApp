import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './modal';
import CurrentGuild from './CurrentGuild';
import CurrentChannel from './CurrentChannel';
import ContextMenu from './ContextMenu'

export const store = configureStore({
    reducer: {
        Modal: modalReducer,
        CurrentGuild: CurrentGuild,
        CurrentChannel: CurrentChannel,
        ContextMenu: ContextMenu
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;