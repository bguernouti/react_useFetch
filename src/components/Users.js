import React, {useContext, useState, useEffect} from "react"
import {useFetch} from "../Fetcher";
import {AppContext} from "../context/AppContext"
import User from "./User"

const Users = (props) => 
{
    const [count,setCount] = useState(0)
    const URL_All = "https://jsonplaceholder.typicode.com/users";
    const POST = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const ctx = useContext(AppContext);
    const res = useFetch(URL_All,{},[ctx.albums])
    
    if (!res) {
        return (
            <div> Loading ... </div>
        )
    }

    const handleChange = (e) => 
    {
        ctx.setUsers(res);
    }    

    console.log("Users Rendered ");

    return (
        <React.Fragment>
            <table border="1">
                <tbody>
                    {
                        res.map(
                            user => (
                                <User key={user.id} user={user} />
                            )
                        )
                    }
                </tbody>
            </table>
            <button type="button" onClick={handleChange}> Increment </button>
        </React.Fragment>
    )
}

export default Users;