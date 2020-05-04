import React, { useState, useEffect } from 'react';
import JobListing from '../jobListing/jobListing.js';

const JobBoard = (props) => {
    const referenceJobs = require('../../data/data.json')

    const [jobs, setJobs] = useState(require('../../data/data.json'))
    const [filters, addFilters] = useState([])

    const addNewFilter = (filter) => {
      const tempFilters = [...filters]
      if (tempFilters.includes(filter) === false) {
        tempFilters.push(filter);
      }
      addFilters(tempFilters);
      console.log(filters);
    };

    const resetFilters = () => {
      addFilters([])
    };

    useEffect( () => {
      if (filters.length != 0) {
        let activeJobs = []
        for (let job = 0; job < referenceJobs.length; job++) {
          for (let filter = 0; filter < filters.length; filter++) {
            if ( referenceJobs[job].languages.includes(filter) || 
                referenceJobs[job].tools.includes(filter) ||
                referenceJobs[job].role == filter ||
                referenceJobs[job].level == filter ) {
                  activeJobs.push(referenceJobs[job])
              }
          }
        }
        setJobs(activeJobs);
        console.log(jobs);
      }
    }, [filters]);

    console.log(jobs);
    return (
        <div>
          {jobs.map( (job, key) => {
            return <JobListing job={job} 
                               key={key} 
                               addNewFilter={addNewFilter} />;
          })}
        </div>
    )
};

export default JobBoard;