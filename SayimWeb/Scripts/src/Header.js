import React from 'react';

const Header = ({ title }) => {
    return (
        <h5>{title}</h5>
    )
}


Header.defaultProps = {
    title: 'Task Tracker'
}
export default Header