import React, { useContext } from "react";

const useFetch = (url, options,deps) => 
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