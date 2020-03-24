import React, {useContext} from "react"
import {useFetch} from "../Fetcher";
import {AppContext} from "../context/AppContext"

const Album = (props) => {
    return (
        <tr>
            <td>
                {props.album.id}
            </td>
            <td>
                {props.album.title}
            </td>
            <td>
                {props.album.userId}
            </td>
        </tr>
    )
}

export default Album;