import React from 'react';
import JobListing from '../jobListing/jobListing.js';

const JobBoard = (props) => {

    // const [jobs, setJobs] = useState()

    const jobs = data;

    console.log(jobs);
    return (
        <div>
            {console.log(jobs)}
            <JobListing job={data[0]} />
        </div>
    )
};

const data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"]
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    }
]

export default JobBoard;