import React from 'react';

import Star from "@/ui/Icons/star.svg";

const Rating = ({amount}: {amount: number}) => {
    return (
        <div className={'absolute right-0 top-0 flex gap-2'}>
            {
                Array(5).fill(0).map((it, i) => <div>
                    {() => Star.render}
                </div>)
            }
        </div>
    );
};

export default Rating;