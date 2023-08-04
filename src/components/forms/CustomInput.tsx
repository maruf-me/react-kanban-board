import React from 'react'

interface IProps {
    id?: string;
    type?: string;
    value?: string;
    divStyle?: string;
    className?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = (props: IProps) => {
    const { type, className, divStyle, onChange, value, id, placeholder } = props
    return (
        <div className={divStyle}>
            <input id={id} type={type ? type : 'text'} placeholder={placeholder} value={value} onChange={onChange} className={`${className} appearance-none block w-full bg-secondary-10 text-gray-700 border rounded-md py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:shadow-lg border-primary-100`} />
        </div>
    )
}

export default CustomInput