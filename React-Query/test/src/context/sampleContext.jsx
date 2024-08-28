import { createContext, useState } from "react";

const initState = {
    data: [1, 2, 3]
}
export const MyContext = createContext();

export const MyProvider = ({children}) => {
    const [state, setState] = useState(initState);

    return <MyContext.Provider value={state} >{children}</MyContext.Provider>
}