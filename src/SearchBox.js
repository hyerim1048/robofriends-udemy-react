import React from 'react';

const SearchBox = ({SearchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            onChange={searchChange}
            placeholder='Search Robot' />
        </div>
    );
}

export default SearchBox;