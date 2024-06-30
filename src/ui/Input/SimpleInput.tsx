import React from 'react';

const SimpleInput = React.forwardRef((props, ref) => {
    return (
        <input className={'border-2 focus:outline-none focus:border-amber-500 border-solid bg-white rounded-lg p-2'}
               {...props} ref={ref}/>
    );
});

export default SimpleInput;