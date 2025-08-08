//import React from 'react';
import { useFilter } from '../contexts/FilterContext';

export function FilterButtons() {
    const { filter, setFilter } = useFilter();

    return (
        <div>
            {/* Map over the array of filter options to create buttons */}

            {['all', 'active', 'completed'].map(f => (

                <button
                    key={f} // Unique key for each button 
                    onClick={() => setFilter(f as any)}
                    className={filter === f ? 'active' : ''}
                >
                    {f} {/* Display the filter name on the button */}

                </button>
            ))}
        </div>
    );
}