import React, {useContext, useState, useEffect} from "react"
import {useFetch} from "../Fetcher";
import {AppContext} from "../context/AppContext"
import User from "./User"

const Users = (props) => 
{
    const [count,setCount] = useState(0)

    
    const URL_All = "http://127.0.0.1:5555/semences";
    //const URL_All = "https://jsonplaceholder.typicode.com/users";
    const Single_Url = "";

    const ctx= useContext(AppContext);
    const res = useFetch(URL_All,{},[count])
    console.log(count);
    
    if (!res) {
        {console.log("negative res" + count);}
        return (
            <div> Loading ... </div>
        )
    }

    const handleChange = (e) => 
    {
        let c = count;
        setCount(c+1)
    }
    
    return (
        <table border="1">
            <tbody>
                {
                    res.map(
                        user => (
                            <React.Fragment key={user.id*3}>
                                <User key={user.id} user={user} />
                                <button key={user.id * 2} onClick={handleChange} type="button"> INC</button>
                            </React.Fragment>
                        )
                    )
                }
            </tbody>
        </table>
    )
}

export default Users;