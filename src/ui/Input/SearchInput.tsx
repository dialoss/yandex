import React, {useEffect, useState} from 'react';

type Input = {
    placeholder?: string;
    className?: string;
    defaultValue?: string;
    onChange: (result: string) => void
}

function Search() {
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M0.833374 7.66671C0.833374 11.4334 3.90004 14.5 7.66671 14.5C11.4334 14.5 14.5 11.4334 14.5 7.66671C14.5 3.90004 11.4334 0.833374 7.66671 0.833374C3.90004 0.833374 0.833374 3.90004 0.833374 7.66671ZM1.83337 7.66671C1.83337 4.45337 4.44671 1.83337 7.66671 1.83337C10.8867 1.83337 13.5 4.45337 13.5 7.66671C13.5 10.88 10.8867 13.5 7.66671 13.5C4.44671 13.5 1.83337 10.88 1.83337 7.66671ZM14.3134 15.02C14.4134 15.12 14.54 15.1666 14.6667 15.1666C14.7934 15.1666 14.92 15.12 15.02 15.02C15.2134 14.8266 15.2134 14.5066 15.02 14.3133L13.6867 12.98C13.4934 12.7866 13.1734 12.7866 12.98 12.98C12.7867 13.1733 12.7867 13.4933 12.98 13.6866L14.3134 15.02Z"
              fill="#999FA6"/>
    </svg>
}

function Close() {
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.99992 15.1667C4.04659 15.1667 0.833252 11.9534 0.833252 8.00004C0.833252 4.04671 4.04659 0.833374 7.99992 0.833374C11.9533 0.833374 15.1666 4.04671 15.1666 8.00004C15.1666 11.9534 11.9533 15.1667 7.99992 15.1667ZM7.99992 1.83337C4.59992 1.83337 1.83325 4.60004 1.83325 8.00004C1.83325 11.4 4.59992 14.1667 7.99992 14.1667C11.3999 14.1667 14.1666 11.4 14.1666 8.00004C14.1666 4.60004 11.3999 1.83337 7.99992 1.83337ZM6.11325 10.3867C5.98658 10.3867 5.85991 10.34 5.75991 10.24C5.56658 10.0467 5.56658 9.72666 5.75991 9.53332L7.29325 7.99999L5.75991 6.46666C5.56658 6.27332 5.56658 5.95332 5.75991 5.75999C5.95325 5.56666 6.27325 5.56666 6.46658 5.75999L7.99991 7.29332L9.53325 5.75999C9.72658 5.56666 10.0466 5.56666 10.2399 5.75999C10.4332 5.95332 10.4332 6.27332 10.2399 6.46666L8.70658 7.99999L10.2399 9.53332C10.4332 9.72666 10.4332 10.0467 10.2399 10.24C10.1399 10.34 10.0132 10.3867 9.88658 10.3867C9.75991 10.3867 9.63325 10.34 9.53325 10.24L7.99991 8.70666L6.46658 10.24C6.37325 10.34 6.23991 10.3867 6.11325 10.3867Z"
              fill="#999FA6"/>
    </svg>

}

const SearchInput = ({placeholder, className = "", defaultValue = '', onChange}: Input) => {
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        onChange && onChange(value);
    }, [value]);
    return (
        <div className={'flex flex-col items-start'}>
            <div className={'relative'}>
                <input
                    type="text"
                    className={className + ' pl-8 border-2 focus:outline-none focus:border-amber-500 border-solid bg-white rounded-lg p-2'}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className={'absolute left-[10px] top-1/2 translate-y-[-50%]'}>
                    <Search/>
                </div>
                {value && <div className={'absolute right-[10px] top-1/2 translate-y-[-50%] hover:cursor-pointer'}
                     onClick={() => setValue("")}>
                    <Close/>
                </div>}
            </div>
        </div>
    );
};

export default SearchInput;
