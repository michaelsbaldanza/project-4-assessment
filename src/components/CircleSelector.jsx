import React from 'react';

const CircleSelector = (props) => (
    <div className="CircleSelector">
        {props.buttons.map((button, idx) =>
          <button
            key={button}
            onClick={() => props.handleCircleSelector(idx)}
            className={`${button === props.SelCircleIdx ? 'selected' : ''}`}
        >SELECT BUTTON {idx}</button>
        )}
        
    </div>
);

export default CircleSelector;