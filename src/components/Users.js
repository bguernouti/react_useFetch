import React, {useContext} from "react"
import {useFetch} from "../Fetcher";
import {AppContext} from "../context/AppContext"

const Users = (props) => 
{

    const URL_All = "https://jsonplaceholder.typicode.com/users";
    const Single_Url = "";

    const ctx= useContext(AppContext);
    const res = useFetch(URL_All,{})
    
    if (!res) {
        return (
            <div> Loading ... </div>
        )
    }

    return (
        <div>
            {
            res.map(
                user => ( 
                    <div key={user.id}>
                         {user.name}
                    </div>
                )
            )
            }
        </div>
    )
}

export default Users;