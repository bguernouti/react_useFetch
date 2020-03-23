import React, {createContext} from "react";

export const AppContext = createContext(true);

const AppContextProvider = (props) => 
{
    const [kingdoms, setKingdoms ] = React.useState({})
    return (
        <AppContext.Provider value={
            {
                kingdoms,
                setKingdoms
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider}