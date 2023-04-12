import React, { createContext } from 'react';
import MoviesAPI from './api/moviesAPI';

export const GlobalState = createContext() 

export const DataProvider = ({children}) => {

    const state = {
        moviesAPI: MoviesAPI(),
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}   


export default GlobalState;