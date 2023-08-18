import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    className: string;
}

export default function Button({children, className, ...props} : PropsWithChildren<ButtonProps>) {
    
    const newStyle = className ? '' + className : '';
    
    return <button className={newStyle} {...props}>
        {children}
    </button>
}