import React, {useContext, useState} from "react"
import {useFetch} from "../Fetcher";
import {AppContext} from "../context/AppContext"
import Album from "./Album"

const Albums = (props) => 
{
    const [count,setCount] = useState(0);
    const URL_All = "https://jsonplaceholder.typicode.com/users/1/albums";

    const ctx= useContext(AppContext);
    const res = useFetch(URL_All,{},[ctx.users])
    
    if (!res) {
        return (
            <div> Loading ... </div>
        )
    }

    const handleChange = (e) => 
    {
        ctx.setAlbums(res);
        
    }
    console.log("Albums Rendered")

    return (
        <React.Fragment>
            <table border="1">
                <tbody>
                    {
                        res.map(
                            album => (
                                <Album key={album.id} album={album} />
                            )
                        )
                    }
                </tbody>
            </table>
            <button type="button" onClick={handleChange}> Increment </button>
        </React.Fragment>
    )
}

export default Albums;