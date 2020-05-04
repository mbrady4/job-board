import React from 'react';
import './jobListing.css';

let logos = {
    Photosnap:require('../../images/photosnap.svg'),
    manage:require('../../images/manage.svg'),
    account:require('../../images/account.svg'),
    myhome:require('../../images/myhome.svg'),
    loopstudios:require('../../images/loop-studios.svg'),
    faceit:require('../../images/faceit.svg'),
    shortly:require('../../images/shortly.svg'),
    insure:require('../../images/insure.svg'),
    eyecam:require('../../images/eyecam-co.svg'),
    theairfiltercompany:require('../../images/the-air-filter-company.svg'),
}

const JobListing = (props) => {
    const logoCode = logos[props.job.company]

    return (
        <div className='joblisting'>
            <img src={`${logoCode}`} alt=''/>
            <div>
                <div className='row'>
                    <h3>{props.job.company}</h3>
                    {props.job.new === true ? <h4>NEW!</h4> : null}
                    {props.job.featured === true ? <h4>FEATURED</h4> : null}
                </div>
                <div className='row'>
                    <h2>{props.job.position}</h2>
                </div>
                <div className='row'>
                    <p>{props.job.postedAt}</p>
                    <p>{props.job.contract}</p>
                    <p>{props.job.location}</p>
                </div>
            </div>
        </div>
    )
}

export default JobListing;