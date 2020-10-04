import React from 'react';

const CircleSelector = (props) => (
    <div className="CircleSelector">
        {props.buttons.map((button, idx) =>
          <button
            key={button}
            onClick={() => props.handleCircleSelector(idx)}
            className={`${props.selCircleIdx === idx ? 'selected' : ''}`}
        >SELECT BUTTON {button}</button>
        )}
        
    </div>
);

export default CircleSelector;