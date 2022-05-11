import {createContext , useContext } from "react";
import { useReducer } from "react";


const FilterContext = createContext();

const useFilter = ()=>useContext(FilterContext);

const FilterProvider=({children})=>
{

    const [filterstate , filterdispatch] = useReducer();
return
// eslint-disable-next-line no-unreachable
(
    <FilterContext.Provider value={{filterstate,filterdispatch}}>
        {children}
    </FilterContext.Provider>
);

}






export { useFilter , FilterProvider};