import React from 'react';

const Circles = (props) => (
    <div className="Circles">
        {props.buttons.map((button, idx) =>
            <div
              key={button}
              className={`${props.selCircleIdx === idx ? 'selected' : ''}`}
            >{button}</div>
        )}
    </div>
);

export default Circles;