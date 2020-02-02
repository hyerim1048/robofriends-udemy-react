import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
            robots.map((user, i) => {
                return <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                />
            }) // key prop 을 항상 줘야 한다 - doesnt change id 같은거로 원래는 지정해야 함 
            }
        </div>
    );
}

export default CardList;