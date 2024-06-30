import React, {useEffect} from 'react';

import {createPortal} from "react-dom";


function Modal({children}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'auto';
    }, []);
    return createPortal(
        <div className={'absolute left-0 top-0 w-[100vw] h-[100vh] bg-black bg-opacity-20'}>
            <div className="fixed z-10 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                {children}
            </div>
        </div>,
        document.body
    );
}

export default Modal;