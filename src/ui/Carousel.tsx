import React, {useEffect, useRef, useState} from 'react';
import NavButton from "@/ui/NavButton";

type CarouselProps = {
    items: object[];
    element: React.FC;
}

const STEP = window.innerWidth;

const Carousel = ({items, element}: CarouselProps) => {
    const [scroll, setScroll] = useState(0);
    const [width, setWidth] = useState(0);
    const ref = useRef();

    useEffect(() => {
        ref.current.scrollTo({top: 0, left: scroll, behavior: 'smooth'});
        setWidth(ref.current.scrollWidth)
    }, [scroll]);

    console.log(scroll)
    return (
        <div className={'relative p-4'}>
            <div className={'flex gap-4 w-[100%] overflow-x-auto no-scrollbar'} ref={ref}>
                {
                    items.map(item => React.createElement(element, {item}))
                }
            </div>
            <div className={'flex w-[100%] left-0 justify-between absolute z-10 translate-y-[-50%] top-1/2'}>
                <NavButton side={'left'} disabled={scroll < 10}
                           callback={() => setScroll(Math.max(0, scroll - STEP))}/>
                <NavButton side={'right'} disabled={scroll >= width - 10}
                           callback={() => setScroll(Math.min(scroll + STEP, width))}/>
            </div>
        </div>
    );
};

export default Carousel;