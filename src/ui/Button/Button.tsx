import React from 'react';
import classNames from "classnames";

interface IButton {
    variant?: "outlined" | "filled"
    children?: React.ReactNode
    onClick: () => any
}

const Button = ({variant = "filled", children = <></>, onClick}: IButton) => {
    const style = classNames({
        "rounded-[8px] px-[16px] py-[8px]": true,
        'border-[2px] text-[#FF5500] border-[#FF5500] ': variant === "outlined",
        'text-white bg-[#FF5500]': variant === "filled",
    });
    return (
        <button className={style} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;