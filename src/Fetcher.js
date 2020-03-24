import React, { useContext } from "react";
import {AppContext} from "./context/AppContext";

const useFetch = (url, options) => 
{
    const [response, setResponse] = React.useState(null);
    //const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => 
    {
        const Fetcher = async () => {
            let data = await fetch(url,options);
            let result = await data.json();
            setResponse(result);
        }
        Fetcher()
    },[]);
    return response;
}

export  {useFetch};