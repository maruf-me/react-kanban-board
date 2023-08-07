import React from 'react';
import { Provider } from 'react-redux';
import { persistedStore, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading={null}>
                {children}
            </PersistGate>
        </Provider>
    )
}