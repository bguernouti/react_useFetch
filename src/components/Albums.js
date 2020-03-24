import React, {useContext} from "react"
import {useFetch} from "../Fetcher";
import {AppContext} from "../context/AppContext"
import Album from "./Album"

const Albums = (props) => 
{

    const URL_All = "https://jsonplaceholder.typicode.com/albums";
    const Single_Url = "";

    const ctx= useContext(AppContext);
    //const res = useFetch(URL_All,{})
    
    if (!res) {
        return (
            <div> Loading ... </div>
        )
    }

    return (
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
    )
}

export default Albums;