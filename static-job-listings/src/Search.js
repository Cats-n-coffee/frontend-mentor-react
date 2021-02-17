import React from 'react';
// import { ReactComponent as Icon } from './images/icon-remove.svg';

const Search = ({ filters, removeOneFilter, clearAllFilters }) => {
    return (  
        <div className="filter-panel">
            <section className="all-filters">
                { filters.map(filter => {
                    return (
                        <div className="filter-item" key={ filter }>
                            <button className="filter-applied">
                                { filter }
                            </button>
                            <button className="filter-icon" 
                                value={ filter } 
                                onClick={(e) => removeOneFilter(e.target.value)}>
                            </button>   
                        </div>
                    )
                }) }
            </section>
            <div className="clear-filters"
                onClick={ () => clearAllFilters() }>Clear</div>
        </div>
    );
}
 
export default Search;