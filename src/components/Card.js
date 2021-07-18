import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.shift.user_id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.shift.date}</h6>
                <p className="card-text">{props.shift.shift}</p>
            </div>
        </div>
    )
}

export default Card;