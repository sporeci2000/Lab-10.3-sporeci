import { createContext, useContext, useState } from 'react';
import type { Filter } from '../types/types'

interface FilterContextType {
    filter: Filter;
    setFilter: (filter: Filter) => void; //function to update the filter
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider(props: any) {
    const [filter, setFilter] = useState<Filter>('all');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {props.children} {/*Access children from props.children*/}
        </FilterContext.Provider>
    );
}

export function useFilter() {
    const context = useContext(FilterContext);
    if (!context) throw new Error('useFilter must be used within FilterProvider');
    return context;
}

