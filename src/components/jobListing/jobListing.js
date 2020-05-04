import React, { PureComponent } from 'react';
import './jobListing.css';

let logos = {
    Photosnap:require('../../images/photosnap.svg'),
    Manage:require('../../images/manage.svg'),
    Account:require('../../images/account.svg'),
    MyHome:require('../../images/myhome.svg'),
    "Loop Studios":require('../../images/loop-studios.svg'),
    FaceIt:require('../../images/faceit.svg'),
    Shortly:require('../../images/shortly.svg'),
    Insure:require('../../images/insure.svg'),
    "Eyecam Co.":require('../../images/eyecam-co.svg'),
    "The Air Filter Company":require('../../images/the-air-filter-company.svg'),
}

const JobListing = (props) => {
    const logoCode = logos[props.job.company]

    return (
        <div className='joblisting'>
            <div className="job-info">
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
            <div className='job-filters'>
                <button onClick={ () => props.addNewFilter(props.job.role)}>{props.job.role}</button>
                <button onClick={ () => props.addNewFilter(props.job.level)}>{props.job.level}</button>
                { props.job.tools ? props.job.tools.map( (tool, key) => {
                    return <button onClick={ () => props.addNewFilter(tool)}>{tool}</button>;
                }) : null }
                { props.job.languages ? props.job.languages.map( (language, key) => {
                    return <button onClick={ () => props.addNewFilter(language)}>{language}</button>;
                }) : null }
            </div>
        </div>
    )
}

export default JobListing;