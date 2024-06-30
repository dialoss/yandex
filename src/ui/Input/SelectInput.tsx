import React, {useRef, useState} from 'react';

function Arrow() {
    return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.49984 18.9583H12.4998C17.0248 18.9583 18.9582 17.025 18.9582 12.5V7.49996C18.9582 2.97496 17.0248 1.04163 12.4998 1.04163H7.49984C2.97484 1.04163 1.0415 2.97496 1.0415 7.49996V12.5C1.0415 17.025 2.97484 18.9583 7.49984 18.9583ZM2.2915 7.49996C2.2915 3.65829 3.65817 2.29163 7.49984 2.29163H12.4998C16.3415 2.29163 17.7082 3.65829 17.7082 7.49996V12.5C17.7082 16.3416 16.3415 17.7083 12.4998 17.7083H7.49984C3.65817 17.7083 2.2915 16.3416 2.2915 12.5V7.49996ZM9.55817 12.2417C9.68317 12.3667 9.84151 12.4251 9.99984 12.4251C10.1582 12.4251 10.3165 12.3667 10.4415 12.2417L13.3832 9.30006C13.6248 9.05839 13.6248 8.65839 13.3832 8.41672C13.1415 8.17506 12.7415 8.17506 12.4998 8.41672L9.99984 10.9167L7.49984 8.41672C7.25817 8.17506 6.85817 8.17506 6.61651 8.41672C6.37484 8.65839 6.37484 9.05839 6.61651 9.30006L9.55817 12.2417Z"
              fill="#999FA6"/>
    </svg>

}

type SelectInputProps = {
    label: string
    placeholder: string
    data: [key: string, string];
    onChange: (result: string) => void;
}

const SelectInput = ({label, placeholder, data, onChange}: SelectInputProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const ref = useRef<HTMLInputElement>();
    let inputData = {...data};
    if (value) {
        for (const key in inputData) {
            if (!inputData[key].includes(value.toLowerCase())) delete inputData[key];
        }
    }
    return (
        <div className={'flex flex-col gap-1 items-start'}>
            <label htmlFor="input">{label}</label>
            <div className={'relative'}>
                <input
                    ref={ref}
                    className={'border-2 focus:outline-none focus:border-amber-500 border-solid bg-white rounded-lg p-2'}
                    type="text"
                    name={'input'}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={() => setTimeout(() => setOpen(false), 100)}
                />
                {open && <div
                    className={'overflow-y-auto p-2 rounded z-10 shadow-md max-h-[300px] w-[100%] absolute top-[130%] flex flex-col bg-white'}>
                    {Object.values(inputData).length ? Object.entries(inputData).map(([key, value]) => <div
                        className={'p-1 rounded hover:cursor-pointer hover:bg-slate-200 transition-all duration-100'}
                        onClick={() => {
                            onChange && onChange(key);
                            setValue(value);
                        }}>
                        {value}
                    </div>) : <div>Ничего не найдено</div>}
                </div>}
                <div className={'absolute right-[10px] top-1/2 translate-y-[-50%] hover:cursor-pointer'}
                     onClick={() => {
                         setOpen(!open);
                         ref.current.focus();
                     }}>
                    <Arrow/>
                </div>
            </div>
        </div>

    );
};

export default SelectInput;
