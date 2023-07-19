import React, {ChangeEvent} from "react";
import {ProfitabilityIndex} from "../interfaces/config";
import "../App.css"

interface radioGroupProps  {
    options: ProfitabilityIndex<string, number, string>[]
    name: string;
    value: any;
    label?: string;
    type?: string;
    error?: string;
    variant?:string;
    onChange: (event: ChangeEvent<HTMLElement>) => void;
}

const CustomSelect: React.FC<radioGroupProps> = ({ type,value, error,label,onChange,name,options}) => {
    return (
        <div className="radio-group">
            {options.map((option, index) => {
                const checked = value === option.code
                return <div key={index}>
                    <input type="radio" id={name+index} name={name} value={option.code} checked={checked} onChange={onChange}/>
                    <label htmlFor="fatturato2">{option.label}</label>
                </div>
            })}
        </div>
    );
};

export default CustomSelect;

