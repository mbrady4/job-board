import React from 'react';
import './filterMenu.css';

const FilterMenu = (props) => {
    return (
        <div className='filterContainer'>
            <div className='filters'>
                {props.filters.role.length > 0 ? <div onClick={ () => props.removeRole(props.filters.role) } className='closeContainer'>
                                                 <button>{props.filters.role}</button>
                                                 <span className='close'>X</span></div> : null}
                {props.filters.level.length > 0 ? <div onClick={ () => props.removeLevel(props.filters.level) } className='closeContainer'>
                                                  <button>{props.filters.level}</button>
                                                  <span className='close'>X</span></div> : null}
                {props.filters.tools.map( (tool, key) => {
                    return <div onClick={ () => props.removeTool(tool) } className='closeContainer'>
                           <button key={key}>{tool}</button>
                           <span className='close'>X</span></div>
                })}
                {props.filters.languages.map( (language, key) => {
                    return <div onClick={ () => props.removeLanguage(language) } className='closeContainer'>
                           <button key={key}>{language}</button>
                           <span className='close'>X</span></div>
                })}
            </div>
            <div>
                <button onClick={ () => props.resetFilters() } className='clear'>Clear</button>
            </div>
        </div>
    )
}

export default FilterMenu;