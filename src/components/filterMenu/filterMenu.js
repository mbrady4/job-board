import React from 'react';

const FilterMenu = (props) => {
    return (
        <div>
            <div>
                <h1>Active Filters</h1>
                {props.filters.role.length > 0 ? <button onClick={ () => props.removeRole(props.filters.role) }>{props.filters.role}</button> : null}
                {props.filters.level.length > 0 ? <button onClick={ () => props.removeLevel(props.filters.level) }>{props.filters.level}</button> : null}
                {props.filters.tools.map( (tool, key) => {
                    return <button onClick={ () => props.removeTool(tool) } key={key}>{tool}</button>
                })}
                {props.filters.languages.map( (language, key) => {
                    return <button onClick={ () => props.removeLanguage(language) } key={key}>{language}</button>
                })}
            </div>
            <div>
                <button onClick={ () => props.resetFilters() }>Clear</button>
            </div>
        </div>
    )
}

export default FilterMenu;