import React from 'react';

type TileProps = {
    children: React.ReactNode;
    className?: string;
}

const Tile = ({children, className}: TileProps) => {
    return (
        <div className={className + ' shadow-sm rounded-lg bg-white p-4 inline-block '}>
            {children}
        </div>
    );
};

export default Tile;