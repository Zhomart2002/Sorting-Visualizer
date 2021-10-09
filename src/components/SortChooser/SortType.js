import React from 'react'

export default function SortType({name, clickHandler}) {
    return (
        <React.Fragment>
            <span className="sortName" onClick={(event) => clickHandler(event)}>{name}</span>
            <div className="headerDivider"></div>
        </React.Fragment>
    )
}
