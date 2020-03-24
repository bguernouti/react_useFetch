import React, {useContext} from "react"
import {useFetch} from "../Fetcher";
import {AppContext} from "../context/AppContext"

const User = (props) => {
    return (
        <tr>
            <td>
                {props.user.id}
            </td>
            <td>
                {props.user.name}
            </td>
        </tr>
    )
}

export default User;