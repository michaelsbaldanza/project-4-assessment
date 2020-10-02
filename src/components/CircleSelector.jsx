import React from 'react';

const CircleSelector = (props) => (
    <div className="CircleSelector">
        <button onClick={() => alert('clicked!')} className={`${props.selCircle===true ? 'selected' : ''}`}>
            Select Circle 1
        </button>
        <button onClick={() => alert('clicked!')} className={`${props.selCircle % 2===true ? 'selected' : ''}`}>
            Select Circle 2
        </button>
        <button onClick={() => alert('clicked!')} className={`${props.selCircle % 2===true ? 'selected' : ''}`}>
            Select Circle 3
        </button>
        <button onClick={() => alert('clicked!')} className={`${props.selCircle % 2===true ? 'selected' : ''}`}>
            Select Circle 4
        </button>
    </div>
);

export default CircleSelector;