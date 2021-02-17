import { useState, useEffect } from 'react';
import ItemResult from './ItemResult';
import Search from './Search';

const Results = () => {
    const [jobs, setJobs] = useState(null);
    const [data, setData] = useState(null);
    const [filters, setFilters] = useState([]);
    

    useEffect(() => {
        fetch('data.json', {
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            setJobs(data)
            setData(data)
        })
        .catch(err => console.log(err));
    }, [])

    const addedFilters = (filterValue) => { 
        const filtersArray = [...filters];
        if (filtersArray.indexOf(filterValue) === -1) {
            filtersArray.push(filterValue);
        }
        setFilters(filtersArray);

        const jobsArray = [...jobs];
        const newResults = jobsArray.filter(job => {
            if (job.level === filterValue) {
                return job.level === filterValue
            }
            if (job.role === filterValue) {
                return job.role === filterValue
            }
            if (job.languages.includes(filterValue)) {
                return job.languages.includes(filterValue)
            }
            if (job.tools.includes(filterValue)) {
                return job.tools.includes(filterValue)
            }
        })
       setJobs(newResults)
    }

    const removeOneFilter = (filterValue) => {
        const filtersArray = [...filters];
        const newArray = filtersArray.filter(item => item !== filterValue)
        setFilters(newArray);

        const originalArray = [...data];
        sortResults(newArray, originalArray);
    }

    const sortResults = (filtersArray, jobsArray) => {
        
        const newResults = jobsArray.filter(job => {
            if (filtersArray.length === 0) {
                return job
            }

            for (let i = 0; i < filtersArray.length; i++) {
                var filter = filtersArray[i];
                if (job.level === filter) {
                    return job.level === filter
                }
                if (job.role === filter) {
                    return job.role === filter
                }
                if (job.languages.includes(filter)) {
                    return job.languages.includes(filter)
                }
                if (job.tools.includes(filter)) {
                    return job.tools.includes(filter)
                }
            }             
        })
        setJobs(newResults);
    }

    const clearAllFilters = () => {
        setJobs(data);
        setFilters([]);
    }

    return ( 
        <div className="result-list">
            { (filters.length > 0) 
                && <Search 
                filters={ filters } 
                removeOneFilter={ removeOneFilter }
                clearAllFilters={ clearAllFilters }/> }
            { jobs && 
                <ItemResult 
                data={ jobs } 
                addedFilters={ addedFilters }/> }
        </div>
     );
}
 
export default Results;

// sortresults
// var jobsArray = [...jobs];
        // 



// removefiltered items
// const jobsArray = [...data];
        // const newResults = jobsArray.filter(job => {
        //     for (let i = 0; i < filtersArray.length; i++) {
        //         if (!Object.values(job).includes(filtersArray[i])) {
        //             return job
        //         }
        //     }
            
        // })
        // setJobs(newResults)


// filter short version
// for (let i = 0; i < filtersArray.length; i++) {
//     if (Object.values(job).includes(filtersArray[i])) {
//         return job
//     }
// }