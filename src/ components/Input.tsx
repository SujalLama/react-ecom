import { ComponentPropsWithoutRef, forwardRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({className = '', ...props}, ref) => {
    const defaultStyle = 'w-full mb-8 border rounded-md px-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline ';
    const newClassname = className ? (defaultStyle + className) : defaultStyle;

    return (
        <input 
        ref={ref}
        className={newClassname} 
        {...props} />)
})

export default Input;
