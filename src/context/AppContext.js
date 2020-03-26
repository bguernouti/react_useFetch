import React, {createContext} from "react";

export const AppContext = createContext(true);

const AppContextProvider = (props) => 
{
    const USERS_URL = "https://jsonplaceholder.typicode.com/users";
    
    const [users, setUsers ] = React.useState({})
    const [albums, setAlbums ] = React.useState({})
    return (
        <AppContext.Provider value={
            {
                users,
                setUsers,
                albums,
                setAlbums
            }
        }>
            {props.children}
        </AppContext.Provider>
    )
}

export {AppContextProvider}