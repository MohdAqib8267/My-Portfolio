
import {createContext,useReducer} from 'react'

export const themeContext=createContext();

const initialState={darkMode: false};

const themeReducer=(state,action)=>{
    switch(action.type){
        case 'toggle':
            return {darkMode : !state.darkMode}; //toggle krne per ulta kr do
        default:
            return state; //other return current state   
    }
};

//export provider
export const ThemeProvider = (props)=>{
    const [state,dispatch] = useReducer(themeReducer, initialState);
    return(
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
};