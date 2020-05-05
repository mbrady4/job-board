import React, { useState, useEffect } from 'react';
import JobListing from '../jobListing/jobListing.js';
import FilterMenu from '../filterMenu/filterMenu.js';

const JobBoard = (props) => {
    const referenceJobs = require('../../data/data.json')

    const [jobs, setJobs] = useState(require('../../data/data.json'))

    // Create Filters State object with properties for each state
    const [filters, setFilters] = useState({
      role:[],
      level:[],
      languages:[],
      tools:[]
    });

    const toolFilter = (tool) => {
      if ( (filters.tools.length > 1) & (filters.tools.includes(tool)) ) {
          console.log(`${tool} already is filtered.`)
      }
      else {
        const newFilter = {
          ...filters,
          tools: [...filters.tools, tool]
        }
        setFilters(newFilter);
        console.log(`The new tool filter is: ${tool}`);
      }
    }

    const languageFilter = (language) => {
      if ( (filters.languages.length > 0) & (filters.languages.includes(language)) ) {
          console.log(`${language} already is filtered.`)
      }
      else {
        const newFilter = {
          ...filters,
          languages: [...filters.languages, language]
        }
        setFilters(newFilter);
        console.log(`The Updated Tool Filters is: ${language}`);
      }
    }

    const roleFilter = (role) => {
      const newFilter = {
        ...filters,
        role: role
      };
      setFilters(newFilter);
      console.log(`The updated role filter is ${filters.role}`);
    }

    const levelFilter = (level) => {
      const newFilter = {
        ...filters,
        level: level
      };
      setFilters(newFilter);
      console.log(`The updated level filter is ${filters.level}`);
    }

    const removeLevel = () => {
      const newFilter = {
        ...filters,
        level: ''
      };
      setFilters(newFilter);
    }

    const removeRole = () => {
      const newFilter = {
        ...filters,
        role: ''
      };
      setFilters(newFilter);
    }

    const removeTool = (tool) => {
      const newToolArr = filters.tools.filter(i => i !== tool)
      const newFilter = {
        ...filters,
        tools: newToolArr
      }
      setFilters(newFilter);
    }

    const removeLanguage = (language) => {
      const newLangArr = filters.languages.filter(i => i !== language)
      console.log('To Remove', language);
      console.log('New Filter', newLangArr);
      const newFilter = {
        ...filters,
        languages: newLangArr
      }
      setFilters(newFilter);
    }

    useEffect( (() => {
      let activeJobs = []
      referenceJobs.forEach( (job) => {
        if ((filters.role.length === 0 || filters.role === job.role) &&
           (filters.level.length === 0 || filters.level === job.level) &&
           (isPresent(filters.tools, job.tools)) &&
           (isPresent(filters.languages, job.languages))) {
             activeJobs.push(job);
        }
      })
      setJobs(activeJobs);
      console.log(activeJobs);
    }), [filters, referenceJobs]);

    const isPresent = (filterArr, jobArr) => {
      if (filterArr.length > 0) {
        if (jobArr !== undefined) {
          let checker = filterArr.every(i => jobArr.includes(i));
          if ( checker ) {
            return true;
          }
          else { return false; }
        }
        else { return false; }
      }
      else { return true; }
    }

    const resetFilters = () => {
      setFilters({
        role:[],
        level:[],
        languages:[],
        tools:[]
      });
    }

    console.log(filters);
    return (
        <div>
          { (filters.role.length > 0 | filters.level > 0 |
             filters.languages.length > 0 | filters.tools.length > 0) ?
            <FilterMenu filters={filters} 
                      removeLevel={removeLevel}
                      removeRole={removeRole}
                      removeLanguage={removeLanguage}
                      removeTool={removeTool}
                      resetFilters={resetFilters}/> : null }
          {jobs.map( (job, key) => {
            return <JobListing job={job} 
                               key={key} 
                               levelFilter={levelFilter}
                               roleFilter={roleFilter}
                               languageFilter={languageFilter}
                               toolFilter={toolFilter}
                                />;
          })}
        </div>
    )
};

export default JobBoard;