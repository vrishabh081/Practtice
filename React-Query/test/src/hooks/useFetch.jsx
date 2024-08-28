import { useEffect, useState } from "react"

const initState = {
    data: [],
    loading: false,
    error: false
}

export const useFetchData = (url) => {
    const [state, setState] = useState(initState);
    
    useEffect(() => {
        getData();
    }, [])
    
    const getData = async () => {
        setState({...state, loading: true})
        try{
            setState({...state, loading: true});
            const res1 = await fetch(url);
            const res2 = await res1.json();
            setState({...state, data: res2, loading: false})
        }
        catch(error){
            console.log(error);
            setState({...state, loading: false, error: true})
        }
    }

    return state
}