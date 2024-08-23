import axios from "axios";
import React, { useEffect, createContext, useState } from "react";
import { BASEURL } from "../api";

export const UseHostelContext = createContext({
    avialableHostels: [],
})


export const HostelContext = ({children}) => {
    const [avialableHostels, setAvailableHostels] = useState([])

    const getHostel = async ()=> {
        try {
            const res = await axios.get(BASEURL + "hostels")
            setAvailableHostels(res?.data)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(()=> {
        getHostel()
    },[])
    return (
        <UseHostelContext.Provider value={{avialableHostels}}>
            {children}
        </UseHostelContext.Provider>
    )
}