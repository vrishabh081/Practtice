import { useQuery } from "react-query"

export const useQueryHook = ({key, apiFun, enabled=true, staleTime=0}) => {
    console.log(key)
    return useQuery(key, Array.isArray(key) ? () => apiFun(key[1]) : apiFun, {
        enabled,
        staleTime
    })
}