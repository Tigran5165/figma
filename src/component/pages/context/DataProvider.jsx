import React, { createContext, useReducer, useCallback } from "react";
import axios from "axios";


export const DataContext = createContext()
export const BASE_URL = "http://localhost:3001"

const initialState = {
    menuArray: [],
    menuArray2: [],
    loading: true,
    error: true,
}

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_MENUARRAY':
            return { ...state, menuArray: action.payload };
        case 'SET_MENUARRAY2':
            return { ...state, menuArray2: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const useLoadingError = (dispatch) => {
    const setLoading = (isLoading) => dispatch({ type: 'SET_LOADING', payload: isLoading })
    const setError = (error) => dispatch({ type: 'SET_ERROR', payload: error })
    return { setLoading, setError }
}


export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(dataReducer, initialState)
    const { setLoading, setError } = useLoadingError(dispatch)

    const fetchData = useCallback(async (type, ednpoint) => {
        setLoading(true)
        try {
            const response = await axios.get(`${BASE_URL}${ednpoint}`)
            if (JSON.stringify(state[type]) !== JSON.stringify(response.data)) {
                dispatch({ type, payload: response.data })
            }
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }, [setLoading, setError, state])


    const fetchMenuArray = () => fetchData('SET_MENUARRAY', '/menuArray')
    const fetchMenuArray2 = () => fetchData('SET_MENUARRAY2', '/menuArray2')

    const updateLike = (item) => {
        const updatedLike = !item.like
        axios.patch(`http://localhost:3001/menuArray/${item.id}`, { like: updatedLike })
            .then((response) => {
                const updatedMenuArray = state.menuArray.map(value => 
                    value.id === item.id ? { ...value, like: updatedLike } : value
                );
                dispatch({ type: 'SET_MENUARRAY', payload: updatedMenuArray });
            })
            .catch((error) => {
                console.log('Error updating like', error);
            })
    }


    return (
        <DataContext.Provider value={{
            fetchMenuArray,
            fetchMenuArray2,
            updateLike,
            menuArray: state.menuArray,
            menuArray2: state.menuArray2,
            error: state.error,
            loading: state.loading
        }}>
            {children}
        </DataContext.Provider>
    )
}