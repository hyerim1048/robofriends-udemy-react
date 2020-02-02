import React from 'react'; // jsx 쓰려면 react import 해야 해


const Card = ({ name, email, id }) => { // props
    return (
        //<h1>RoboFriends</h1>
        // const { name, email, id } = props;
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2> {name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

// only one div (element) not two 

export default Card;