import React from 'react';
import "./Loader.scss"

const Loader = () => {
    return <div className={'fixed top-[50vh] left-1/2 translate-x-[-50%]'}><span className="loader"></span></div>
};

export default Loader;