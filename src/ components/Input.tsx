import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    className?: string;
}

export default function Input ({className = '', ...props} : InputProps) {
    const defaultStyle = 'w-full mb-8 border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline ';
    const newClassname = className ? (defaultStyle + className) : defaultStyle;

    return (
        <input 
        className={newClassname} 
        {...props} />)
}