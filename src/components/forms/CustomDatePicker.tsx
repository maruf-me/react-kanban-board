import React, { forwardRef, useState } from 'react'
import DatePicker from "react-datepicker";
import { StringLiteralType } from 'typescript';

interface ICustiomDatePicker {
    value?: string;
    onClick?: ((e: any) => void) | undefined;
}

interface IProps {
    selected: Date | string;
    onChange: (date: Date) => void;
    className?: string;
}

const CustomDatePicker = ({ selected, onChange, className }: IProps) => {
    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = forwardRef(({ value, onClick }: ICustiomDatePicker, ref) => (
        <button type='button' className={`${className} bg-white  text-primary-100 border border-primary-100 p-3 px-4 rounded-full`} onClick={onClick} ref={ref as React.LegacyRef<HTMLButtonElement>}>
            {value}
        </button>
    ));

    return (
        <div>
            <DatePicker
                showIcon
                selected={selected}
                onChange={onChange}
                customInput={<ExampleCustomInput />}
            />
        </div>
    )
}

export default CustomDatePicker