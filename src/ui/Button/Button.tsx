import React from 'react';
import classNames from "classnames";

interface IButton {
    variant?: "outlined" | "filled"
    children?: React.ReactNode
    onClick?: () => any;
    className?: string
    type?: string
}

const Button = ({variant = "filled", type='', children = <></>, onClick, className = ''}: IButton) => {
    const style = classNames({
        ["rounded-[8px] px-[16px] py-[8px] " + className]: true,
        'border-[2px] text-[#FF5500] border-[#FF5500] ': variant === "outlined",
        'text-white bg-[#FF5500]': variant === "filled",
    });
    return (
        <button className={style} onClick={onClick} type={type}>
            {children}
        </button>
    );
};

export default Button;